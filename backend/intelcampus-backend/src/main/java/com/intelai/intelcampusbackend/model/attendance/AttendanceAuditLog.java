package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "attendance_audit_logs")
public class AttendanceAuditLog {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long attendanceId;

    @Column(nullable = false)
    private Long studentId;

    @Column(nullable = false)
    private String action;
    // MARKED_MANUAL, AUTO_MARKED, OVERRIDE, CORRECTED

    @Column(nullable = false)
    private String performedBy;
    // STAFF / SYSTEM / ADMIN

    @Column(nullable = false)
    private LocalDateTime performedAt;

    @Column(length = 500)
    private String remarks;

    public AttendanceAuditLog() {
    }

    public AttendanceAuditLog(
            Long attendanceId,
            Long studentId,
            String action,
            String performedBy,
            LocalDateTime performedAt,
            String remarks
    ) {
        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.action = action;
        this.performedBy = performedBy;
        this.performedAt = performedAt;
        this.remarks = remarks;
    }

    public Long getId() {
        return id;
    }

    public Long getAttendanceId() {
        return attendanceId;
    }

    public void setAttendanceId(Long attendanceId) {
        this.attendanceId = attendanceId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getAction() {
        return action;
    }

    public void setAction(String action) {
        this.action = action;
    }

    public String getPerformedBy() {
        return performedBy;
    }

    public void setPerformedBy(String performedBy) {
        this.performedBy = performedBy;
    }

    public LocalDateTime getPerformedAt() {
        return performedAt;
    }

    public void setPerformedAt(LocalDateTime performedAt) {
        this.performedAt = performedAt;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
