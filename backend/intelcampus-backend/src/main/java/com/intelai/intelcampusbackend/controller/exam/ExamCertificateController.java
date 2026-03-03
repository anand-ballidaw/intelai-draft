package com.intelai.intelcampusbackend.controller.exam;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.enums.exam.CertificateType;
import com.intelai.intelcampusbackend.service.exam.ExamCertificateService;

@RestController
@RequestMapping("/api/exams/certificates")
public class ExamCertificateController {

    private final ExamCertificateService certificateService;

    public ExamCertificateController(ExamCertificateService certificateService) {
        this.certificateService = certificateService;
    }

    @PostMapping("/issue")
    public void issueCertificate(
            @RequestParam Long examId,
            @RequestParam Long studentId,
            @RequestParam CertificateType type,
            @RequestParam String issuedBy
    ) {
        certificateService.issueCertificate(examId, studentId, type, issuedBy);
    }
}
