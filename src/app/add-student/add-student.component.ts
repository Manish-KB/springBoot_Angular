import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-student',
  templateUrl: './add-student.component.html',
  styleUrl: './add-student.component.css'
})
export class AddStudentComponent {
  student: Student = new Student();


  constructor(private studentService: StudentService, private router: Router) { }
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
