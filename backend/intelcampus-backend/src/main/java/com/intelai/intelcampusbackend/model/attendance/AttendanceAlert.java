package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDate;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import jakarta.persistence.UniqueConstraint;

@Entity
@Table(
    name = "attendance_alert",
    uniqueConstraints = {
        @UniqueConstraint(
            columnNames = {
                "student_id",
                "alert_date",
                "alert_type"
            }
        )
    }
)
public class AttendanceAlert {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "student_id", nullable = false)
    private Long studentId;

    @Column(name = "academic_class_id", nullable = false)
    private Long academicClassId;

    @Enumerated(EnumType.STRING)
    @Column(name = "alert_type", nullable = false)
    private AttendanceAlertType alertType;

    @Column(name = "attendance_percentage", nullable = false)
    private double attendancePercentage;

    @Column(name = "alert_date", nullable = false)
    private LocalDate alertDate;

    @Column(name = "active", nullable = false)
    private boolean active = true;

    /* ================= GETTERS / SETTERS ================= */

    public Long getId() {
        return id;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getAcademicClassId() {
        return academicClassId;
    }

    public void setAcademicClassId(Long academicClassId) {
        this.academicClassId = academicClassId;
    }

    public AttendanceAlertType getAlertType() {
        return alertType;
    }

    public void setAlertType(AttendanceAlertType alertType) {
        this.alertType = alertType;
    }

    public double getAttendancePercentage() {
        return attendancePercentage;
    }

    public void setAttendancePercentage(double attendancePercentage) {
        this.attendancePercentage = attendancePercentage;
    }

    public LocalDate getAlertDate() {
        return alertDate;
    }

    public void setAlertDate(LocalDate alertDate) {
        this.alertDate = alertDate;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
