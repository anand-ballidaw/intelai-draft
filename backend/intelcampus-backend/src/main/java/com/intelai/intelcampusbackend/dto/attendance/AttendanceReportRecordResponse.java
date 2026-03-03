package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDate;

public class AttendanceReportRecordResponse {

    private Long attendanceId;
    private Long studentId;
    private Long courseId;
    private LocalDate date;
    private boolean present;
    private boolean markedAutomatically;

    public AttendanceReportRecordResponse(
            Long attendanceId,
            Long studentId,
            Long courseId,
            LocalDate date,
            boolean present,
            boolean markedAutomatically) {

        this.attendanceId = attendanceId;
        this.studentId = studentId;
        this.courseId = courseId;
        this.date = date;
        this.present = present;
        this.markedAutomatically = markedAutomatically;
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

    public LocalDate getDate() {
        return date;
    }

    public boolean isPresent() {
        return present;
    }

    public boolean isMarkedAutomatically() {
        return markedAutomatically;
    }
}
