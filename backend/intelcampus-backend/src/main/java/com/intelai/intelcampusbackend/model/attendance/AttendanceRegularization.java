package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "attendance_regularizations")
public class AttendanceRegularization {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "student_id")
    private com.intelai.intelcampusbackend.model.student.Student student;

    @ManyToOne(optional = false)
    @JoinColumn(name = "academic_class_semester_id")
    private com.intelai.intelcampusbackend.model.academic.AcademicClassSemester academicClassSemester;

    @Column(nullable = false)
    private LocalDate attendanceDate;

    @Column(nullable = false, length = 500)
    private String reason;

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AttendanceRegularizationStatus status;

    @Column(nullable = false)
    private LocalDateTime requestedAt;

    private LocalDateTime reviewedAt;

    @Column(length = 255)
    private String reviewerRemarks;

    /* ================= GETTERS & SETTERS ================= */

    public Long getId() {
        return id;
    }

    public com.intelai.intelcampusbackend.model.student.Student getStudent() {
        return student;
    }

    public void setStudent(
            com.intelai.intelcampusbackend.model.student.Student student
    ) {
        this.student = student;
    }

    public com.intelai.intelcampusbackend.model.academic.AcademicClassSemester
    getAcademicClassSemester() {
        return academicClassSemester;
    }

    public void setAcademicClassSemester(
            com.intelai.intelcampusbackend.model.academic.AcademicClassSemester academicClassSemester
    ) {
        this.academicClassSemester = academicClassSemester;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }

    public AttendanceRegularizationStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceRegularizationStatus status) {
        this.status = status;
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

    public String getReviewerRemarks() {
        return reviewerRemarks;
    }

    public void setReviewerRemarks(String reviewerRemarks) {
        this.reviewerRemarks = reviewerRemarks;
    }
}
