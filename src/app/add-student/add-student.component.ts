import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';
import { AbstractControl, FormControl, FormGroup, Validators, FormBuilder, EmailValidator } from '@angular/forms';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: Student = new Student();
  form: FormGroup;


constructor(private studentService: StudentService, private router: Router, private fb: FormBuilder) {
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
onFormSubmit() {
  this.studentService.addStudent(this.student).subscribe(data => {
    console.log(data)
  });
  this.goToStudentList();

}
goToStudentList() {
  this.router.navigate(['/students']);
}
}
