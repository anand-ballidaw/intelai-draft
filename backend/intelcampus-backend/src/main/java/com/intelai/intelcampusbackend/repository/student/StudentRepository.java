package com.intelai.intelcampusbackend.repository.student;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intelai.intelcampusbackend.model.student.Student;

@Repository
public interface StudentRepository extends JpaRepository<Student, Long> {

    /* ===== CORE ATTENDANCE QUERY ===== */

    List<Student> findByAcademicClass_IdAndActiveTrue(Long academicClassId);

    /* ===== OPTIONAL FUTURE USE ===== */

    List<Student> findByAcademicClass_Id(Long academicClassId);
}
