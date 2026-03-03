package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "attendance_penalties")
public class AttendancePenalty {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* ============================================================
       CORE REFERENCES
       ============================================================ */

    @Column(nullable = false)
    private Long studentId;

    @Column(nullable = false)
    private Long courseId;

    @Column(nullable = false)
    private Long academicClassSemesterId;

    /* ============================================================
       ATTENDANCE METRICS
       ============================================================ */

    @Column(nullable = false)
    private Double attendancePercentage;

    @Column(nullable = false)
    private Double requiredPercentage;

    /* ============================================================
       PERIOD
       ============================================================ */

    @Column(nullable = false)
    private LocalDate periodStart;

    @Column(nullable = false)
    private LocalDate periodEnd;

    /* ============================================================
       LIFECYCLE FLAGS
       ============================================================ */

    @Column(nullable = false)
    private boolean waived = false;

    @Column(nullable = false)
    private boolean revoked = false;

    /* ============================================================
       AUDIT
       ============================================================ */

    @Column(nullable = false)
    private LocalDate createdAt;

    private String waivedBy;

    private String waivedRemarks;

    private LocalDateTime waivedAt;

    private String revokedBy;

    private String revokedRemarks;

    private LocalDateTime revokedAt;

    /* ============================================================
       GETTERS / SETTERS
       ============================================================ */

    public Long getId() {
        return id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public Long getAcademicClassSemesterId() {
        return academicClassSemesterId;
    }

    public void setAcademicClassSemesterId(Long academicClassSemesterId) {
        this.academicClassSemesterId = academicClassSemesterId;
    }

    public Double getAttendancePercentage() {
        return attendancePercentage;
    }

    public void setAttendancePercentage(Double attendancePercentage) {
        this.attendancePercentage = attendancePercentage;
    }

    public Double getRequiredPercentage() {
        return requiredPercentage;
    }

    public void setRequiredPercentage(Double requiredPercentage) {
        this.requiredPercentage = requiredPercentage;
    }

    public LocalDate getPeriodStart() {
        return periodStart;
    }

    public void setPeriodStart(LocalDate periodStart) {
        this.periodStart = periodStart;
    }

    public LocalDate getPeriodEnd() {
        return periodEnd;
    }

    public void setPeriodEnd(LocalDate periodEnd) {
        this.periodEnd = periodEnd;
    }

    public boolean isWaived() {
        return waived;
    }

    public void setWaived(boolean waived) {
        this.waived = waived;
    }

    public boolean isRevoked() {
        return revoked;
    }

    public void setRevoked(boolean revoked) {
        this.revoked = revoked;
    }

    public LocalDate getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDate createdAt) {
        this.createdAt = createdAt;
    }

    public String getWaivedBy() {
        return waivedBy;
    }

    public void setWaivedBy(String waivedBy) {
        this.waivedBy = waivedBy;
    }

    public String getWaivedRemarks() {
        return waivedRemarks;
    }

    public void setWaivedRemarks(String waivedRemarks) {
        this.waivedRemarks = waivedRemarks;
    }

    public LocalDateTime getWaivedAt() {
        return waivedAt;
    }

    public void setWaivedAt(LocalDateTime waivedAt) {
        this.waivedAt = waivedAt;
    }

    public String getRevokedBy() {
        return revokedBy;
    }

    public void setRevokedBy(String revokedBy) {
        this.revokedBy = revokedBy;
    }

    public String getRevokedRemarks() {
        return revokedRemarks;
    }

    public void setRevokedRemarks(String revokedRemarks) {
        this.revokedRemarks = revokedRemarks;
    }

    public LocalDateTime getRevokedAt() {
        return revokedAt;
    }

    public void setRevokedAt(LocalDateTime revokedAt) {
        this.revokedAt = revokedAt;
    }
}
