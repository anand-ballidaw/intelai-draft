package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;

public class AttendanceGraceVisibilityResponse {

    private Long studentId;
    private Long courseId;
    private AttendanceGraceVisibility visibility;
    private long absentCount;

    public AttendanceGraceVisibilityResponse() {
    }

    public AttendanceGraceVisibilityResponse(
            Long studentId,
            Long courseId,
            AttendanceGraceVisibility visibility,
            long absentCount) {

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

    public AttendanceGraceVisibility getVisibility() {
        return visibility;
    }

    public long getAbsentCount() {
        return absentCount;
    }
}
