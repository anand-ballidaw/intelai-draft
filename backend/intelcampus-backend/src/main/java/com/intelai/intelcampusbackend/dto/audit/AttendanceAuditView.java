package com.intelai.intelcampusbackend.dto.audit;

import java.time.LocalDateTime;

public class AttendanceAuditView {

    private Long auditId;
    private Long studentId;
    private Long classId;
    private Long subjectId;
    private Long invoiceId;
    private String status;
    private String reason;
    private LocalDateTime createdAt;

    public AttendanceAuditView() {
    }

    public AttendanceAuditView(
            Long auditId,
            Long studentId,
            Long classId,
            Long subjectId,
            Long invoiceId,
            String status,
            String reason,
            LocalDateTime createdAt
    ) {
        this.auditId = auditId;
        this.studentId = studentId;
        this.classId = classId;
        this.subjectId = subjectId;
        this.invoiceId = invoiceId;
        this.status = status;
        this.reason = reason;
        this.createdAt = createdAt;
    }

    public Long getAuditId() {
        return auditId;
    }

    public void setAuditId(Long auditId) {
        this.auditId = auditId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getClassId() {
        return classId;
    }

    public void setClassId(Long classId) {
        this.classId = classId;
    }

    public Long getSubjectId() {
        return subjectId;
    }

    public void setSubjectId(Long subjectId) {
        this.subjectId = subjectId;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
