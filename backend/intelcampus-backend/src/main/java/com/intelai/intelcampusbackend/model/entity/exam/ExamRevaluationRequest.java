package com.intelai.intelcampusbackend.model.entity.exam;

import java.time.LocalDateTime;

import com.intelai.intelcampusbackend.model.enums.exam.RevaluationStatus;

import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "exam_revaluations")
public class ExamRevaluationRequest {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Long studentId;

    private Integer revisedMarks;

    private String reason;

    @Enumerated(EnumType.STRING)
    private RevaluationStatus status;

    private String reviewedBy;

    private LocalDateTime requestedAt;

    private LocalDateTime reviewedAt;

    public Long getId() {
        return id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Integer getRevisedMarks() {
        return revisedMarks;
    }

    public void setRevisedMarks(Integer revisedMarks) {
        this.revisedMarks = revisedMarks;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public RevaluationStatus getStatus() {
        return status;
    }

    public void setStatus(RevaluationStatus status) {
        this.status = status;
    }

    public String getReviewedBy() {
        return reviewedBy;
    }

    public void setReviewedBy(String reviewedBy) {
        this.reviewedBy = reviewedBy;
    }

    public LocalDateTime getRequestedAt() {
        return requestedAt;
    }

    public void setRequestedAt(LocalDateTime requestedAt) {
        this.requestedAt = requestedAt;
    }

    public LocalDateTime getReviewedAt() {
        return reviewedAt;
    }

    public void setReviewedAt(LocalDateTime reviewedAt) {
        this.reviewedAt = reviewedAt;
    }
}
