package com.manish.Student_Management.controller;



import java.util.HashMap;
import java.util.List;
import java.util.Map;

import com.manish.Student_Management.exception.ResourceNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.manish.Student_Management.model.Student;
import com.manish.Student_Management.repository.StudentRepository;
@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/v1/")
public class StudentController {

    @Autowired
    private StudentRepository studentRepository;
    @GetMapping("/students")
public List<Student> getAllStudents()
{
    return studentRepository.findAll();
}

@PostMapping("/students")
    public Student createStudent(@RequestBody Student student)
{
    return studentRepository.save(student);
}

@GetMapping("/students/{id}")
    public ResponseEntity<Student> getStudentById(@PathVariable Long id)
{
    Student student=studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student Not Found"));
    return ResponseEntity.ok(student);
}
@PutMapping("/students/{id}")
public ResponseEntity<Student> updateEmployee(@PathVariable Long id, @RequestBody Student studentObj){
    Student student=studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student Not Found"));
    student.setFirstName(studentObj.getFirstName());
    student.setLastName(studentObj.getLastName());
    student.setLastName(studentObj.getEmailId());

    Student newStudent=studentRepository.save(student);
    return ResponseEntity.ok(newStudent);

}

@DeleteMapping("/students/{id}")
    public ResponseEntity<Map<String,Boolean>> deleteStudent(@PathVariable Long id)
{
    Student student=studentRepository.findById(id).orElseThrow(()->new ResourceNotFoundException("Student Not Found"));
    studentRepository.delete(student);
    Map<String,Boolean> response=new HashMap<>();
    response.put("Successfully Deleted", Boolean.TRUE);
    return ResponseEntity.ok(response);
}

}
