package com.intelai.intelcampusbackend.repository.exam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.ExamCertificate;

public interface ExamCertificateRepository extends JpaRepository<ExamCertificate, Long> {

    List<ExamCertificate> findByStudentId(Long studentId);

    List<ExamCertificate> findByExamId(Long examId);
}
