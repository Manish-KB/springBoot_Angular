package com.manish.Student_Management.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.manish.Student_Management.model.Student;

public interface StudentRepository extends JpaRepository<Student, Long>{

}
