import { Component, OnInit } from '@angular/core';
import { StudentService } from '../student.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Student } from '../student';

@Component({
  selector: 'app-update-student',
  templateUrl: './update-student.component.html',
  styleUrl: './update-student.component.css'
})
export class UpdateStudentComponent implements OnInit {
  id: number;
  student = new Student();
  constructor(private studentService: StudentService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.studentService.getStudentById(this.id).subscribe(data => {
      this.student = data;
      console.log(this.student);
    });


  }

  updateStudent() {
    this.studentService.addStudent(this.student).subscribe(data => {
      console.log(data)
    });


  }
  onFormSubmit() {
    this.updateStudent();
    this.goToStudentList();

  }
  goToStudentList() {
    this.router.navigate(['/students']);
  }
}
