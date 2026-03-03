package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;

public class AttendanceRecordResponse {

    private Long attendanceId;
    private Long studentId;
    private Long courseId;
    private LocalDate attendanceDate;
    private AttendanceStatus status;
    private boolean present;

    public AttendanceRecordResponse() {
    }

    public AttendanceRecordResponse(
            Long attendanceId,
            Long studentId,
            Long courseId,
            LocalDate attendanceDate,
            AttendanceStatus status,
            boolean present) {

        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.courseId = courseId;
        this.attendanceDate = attendanceDate;
        this.status = status;
        this.present = present;
    }

    public Long getAttendanceId() {
        return attendanceId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public LocalDate getAttendanceDate() {
        return attendanceDate;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public boolean isPresent() {
        return present;
    }
}
