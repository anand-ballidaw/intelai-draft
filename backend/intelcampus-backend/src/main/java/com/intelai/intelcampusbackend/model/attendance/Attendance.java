package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.intelai.intelcampusbackend.model.student.Student;
import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;

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
@Table(name = "attendance")
public class Attendance {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(optional = false)
    @JoinColumn(name = "student_id", nullable = false)
    private Student student;

    @Column(name = "attendance_date", nullable = false)
    private LocalDate attendanceDate;

    @ManyToOne(optional = false)
    @JoinColumn(name = "timetable_period_id", nullable = false)
    private TimetablePeriod timetablePeriod;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", nullable = false)
    private AttendanceStatus status;

    @Column(name = "marked_automatically", nullable = false)
    private boolean markedAutomatically = false;

    @Column(name = "marked_at")
    private LocalDateTime markedAt;

    @Column(name = "remarks", length = 500)
    private String remarks;

    /* =========================
       Getters and Setters
       ========================= */

    public Long getId() {
        return id;
    }

    public Student getStudent() {
        return student;
    }

    public void setStudent(Student student) {
        this.student = student;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public void setAttendanceDate(LocalDate attendanceDate) {
        this.attendanceDate = attendanceDate;
    }

    public TimetablePeriod getTimetablePeriod() {
        return timetablePeriod;
    }

    public void setTimetablePeriod(TimetablePeriod timetablePeriod) {
        this.timetablePeriod = timetablePeriod;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceStatus status) {
        this.status = status;
    }

    public boolean isMarkedAutomatically() {
        return markedAutomatically;
    }

    public void setMarkedAutomatically(boolean markedAutomatically) {
        this.markedAutomatically = markedAutomatically;
    }

    public LocalDateTime getMarkedAt() {
        return markedAt;
    }

    public void setMarkedAt(LocalDateTime markedAt) {
        this.markedAt = markedAt;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
