package com.intelai.intelcampusbackend.repository.exam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.ExamRevaluationRequest;

public interface ExamRevaluationRepository
        extends JpaRepository<ExamRevaluationRequest, Long> {

    List<ExamRevaluationRequest> findByStudentId(Long studentId);
}
