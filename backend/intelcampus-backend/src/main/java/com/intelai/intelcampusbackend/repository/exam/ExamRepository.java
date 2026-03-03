package com.intelai.intelcampusbackend.repository.exam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.Exam;

public interface ExamRepository extends JpaRepository<Exam, Long> {

    List<Exam> findByClassId(Long classId);
}
