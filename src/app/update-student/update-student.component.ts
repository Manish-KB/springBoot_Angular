import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student = new Student();
  form: FormGroup;
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router, private fb: FormBuilder) {
    this.form = this.fb.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      emailId: ['', [Validators.required, emailValidator]],
    });

    function emailValidator(control: AbstractControl): { [key: string]: any } | null {
      const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
      const valid = emailPattern.test(control.value);
      return valid ? null : { invalidEmail: true };
    }

  }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
      console.log(this.student);
    });


  }

  onFormSubmit() {
    this.studentService.updateStudent(this.id, this.student).subscribe(data => {
      this.goToStudentList();
    })


  }
  goToStudentList() {
    this.router.navigate(['/students']);
  }
}

