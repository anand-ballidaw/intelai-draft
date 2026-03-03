package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;

public class AttendanceUpdateRequest {

    private Long studentId;
    private Long timetablePeriodId;
    private AttendanceStatus status;

    public AttendanceUpdateRequest() {
    }

    public AttendanceUpdateRequest(
            Long studentId,
            Long timetablePeriodId,
            AttendanceStatus status
    ) {
        this.studentId = studentId;
        this.timetablePeriodId = timetablePeriodId;
        this.status = status;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getTimetablePeriodId() {
        return timetablePeriodId;
    }

    public void setTimetablePeriodId(Long timetablePeriodId) {
        this.timetablePeriodId = timetablePeriodId;
    }

    public AttendanceStatus getStatus() {
        return status;
    }

    public void setStatus(AttendanceStatus status) {
        this.status = status;
    }
}
