import { Component } from '@angular/core';
import { Student } from '../student';
import { StudentService } from '../student.service';

@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.css']
})
export class StudentListComponent {
students: Student[] ;
constructor(private studentService:StudentService){

}

ngOnInit(): void{
  this.getStudents();
}

private getStudents(){
  this.studentService.getStudentsList().subscribe(data=>
    {
      this.students=data;
      console.log(this.students);
    });
}


// ngOnInit():void{
//   this.students=[{
//     "id":876876,
//     "first_name":"sandy",
//     "last_name":"r",
//     "email_id":"dahbsakh@gkfa.com",
//     "phone_number":879798,
//   },
//   {
//     "id":876876,
//     "first_name":"sandy",
//     "last_name":"b",
//     "email_id":"dahbsakh@gkfa.com",
//     "phone_number":879798,
//   }
// ]
// }
}
