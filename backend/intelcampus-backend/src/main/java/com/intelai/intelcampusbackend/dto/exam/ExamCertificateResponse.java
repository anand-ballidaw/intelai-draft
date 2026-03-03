package com.intelai.intelcampusbackend.dto.exam;

import com.intelai.intelcampusbackend.model.enums.exam.CertificateType;

public class ExamCertificateResponse {

    private Long certificateId;
    private Long studentId;
    private CertificateType certificateType;
    private String issuedBy;

    public Long getCertificateId() {
        return certificateId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public CertificateType getCertificateType() {
        return certificateType;
    }

    public String getIssuedBy() {
        return issuedBy;
    }

    public void setCertificateId(Long certificateId) {
        this.certificateId = certificateId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public void setCertificateType(CertificateType certificateType) {
        this.certificateType = certificateType;
    }

    public void setIssuedBy(String issuedBy) {
        this.issuedBy = issuedBy;
    }
}
