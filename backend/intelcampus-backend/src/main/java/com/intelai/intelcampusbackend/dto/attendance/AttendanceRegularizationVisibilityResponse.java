package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;

public class AttendanceRegularizationVisibilityResponse {

    private Long studentId;
    private Long courseId;
    private AttendanceRegularizationVisibility visibility;
    private boolean alreadyApplied;

    public AttendanceRegularizationVisibilityResponse() {
    }

    public AttendanceRegularizationVisibilityResponse(
            Long studentId,
            Long courseId,
            AttendanceRegularizationVisibility visibility,
            boolean alreadyApplied) {

        this.studentId = studentId;
        this.courseId = courseId;
        this.visibility = visibility;
        this.alreadyApplied = alreadyApplied;
    }

    /* 🔧 REQUIRED FIX: ADD THIS CONSTRUCTOR */
    public AttendanceRegularizationVisibilityResponse(
            Long studentId,
            Long courseId,
            AttendanceRegularizationVisibility visibility) {

        this(studentId, courseId, visibility, false);
    }

    public Long getStudentId() {
        return studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public AttendanceRegularizationVisibility getVisibility() {
        return visibility;
    }

    public boolean isAlreadyApplied() {
        return alreadyApplied;
    }
}
