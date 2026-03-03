package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDate;

public class AttendanceRegularizationRequest {

    private Long studentId;
    private Long academicClassSemesterId;
    private LocalDate attendanceDate;
    private String reason;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getAcademicClassSemesterId() {
        return academicClassSemesterId;
    }

    public void setAcademicClassSemesterId(Long academicClassSemesterId) {
        this.academicClassSemesterId = academicClassSemesterId;
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
}
