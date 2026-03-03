package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;

public class AttendancePenaltyVisibilityResponse {

    private Long studentId;
    private Long courseId;
    private AttendancePenaltyVisibility visibility;
    private long absentCount;

    public AttendancePenaltyVisibilityResponse() {
    }

    public AttendancePenaltyVisibilityResponse(
            Long studentId,
            Long courseId,
            AttendancePenaltyVisibility visibility,
            long absentCount
    ) {
        this.studentId = studentId;
        this.courseId = courseId;
        this.visibility = visibility;
        this.absentCount = absentCount;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public AttendancePenaltyVisibility getVisibility() {
        return visibility;
    }

    public long getAbsentCount() {
        return absentCount;
    }
}
