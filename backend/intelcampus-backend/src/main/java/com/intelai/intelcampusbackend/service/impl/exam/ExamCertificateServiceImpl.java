package com.intelai.intelcampusbackend.service.impl.exam;

import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.entity.exam.Exam;
import com.intelai.intelcampusbackend.model.entity.exam.ExamCertificate;
import com.intelai.intelcampusbackend.model.enums.exam.CertificateType;
import com.intelai.intelcampusbackend.repository.exam.ExamCertificateRepository;
import com.intelai.intelcampusbackend.repository.exam.ExamRepository;
import com.intelai.intelcampusbackend.service.exam.ExamCertificateService;

@Service
public class ExamCertificateServiceImpl implements ExamCertificateService {

    private final ExamRepository examRepository;
    private final ExamCertificateRepository certificateRepository;

    public ExamCertificateServiceImpl(
            ExamRepository examRepository,
            ExamCertificateRepository certificateRepository
    ) {
        this.examRepository = examRepository;
        this.certificateRepository = certificateRepository;
    }

    @Override
    public void issueCertificate(
            Long examId,
            Long studentId,
            CertificateType certificateType,
            String issuedBy
    ) {
        Exam exam = examRepository.findById(examId)
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        ExamCertificate certificate = new ExamCertificate();
        certificate.setExam(exam);
        certificate.setStudentId(studentId);
        certificate.setCertificateType(certificateType);
        certificate.setIssuedBy(issuedBy);
        certificate.setIssuedAt(LocalDateTime.now());

        certificateRepository.save(certificate);
    }
}
