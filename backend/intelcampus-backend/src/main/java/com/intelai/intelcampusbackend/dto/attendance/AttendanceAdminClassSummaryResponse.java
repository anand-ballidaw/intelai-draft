package com.intelai.intelcampusbackend.dto.attendance;

public class AttendanceAdminClassSummaryResponse {

    private Long academicClassId;
    private long totalStudents;
    private long totalSessions;
    private long presentCount;
    private long absentCount;

    public AttendanceAdminClassSummaryResponse(
            Long academicClassId,
            long totalStudents,
            long totalSessions,
            long presentCount,
            long absentCount
    ) {
        this.academicClassId = academicClassId;
        this.totalStudents = totalStudents;
        this.totalSessions = totalSessions;
        this.presentCount = presentCount;
        this.absentCount = absentCount;
    }

    public Long getAcademicClassId() {
        return academicClassId;
    }

    public long getTotalStudents() {
        return totalStudents;
    }

    public long getTotalSessions() {
        return totalSessions;
    }

    public long getPresentCount() {
        return presentCount;
    }

    public long getAbsentCount() {
        return absentCount;
    }
}
