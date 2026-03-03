package com.intelai.intelcampusbackend.service.exam;

import com.intelai.intelcampusbackend.model.enums.exam.CertificateType;

public interface ExamCertificateService {

    void issueCertificate(
            Long examId,
            Long studentId,
            CertificateType certificateType,
            String issuedBy
    );
}
