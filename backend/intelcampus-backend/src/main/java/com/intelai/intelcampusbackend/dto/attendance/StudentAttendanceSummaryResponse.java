package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceColorStatus;

public class StudentAttendanceSummaryResponse {

    private Long studentId;
    private Long courseId;

    private long totalClasses;
    private long presentCount;
    private long lateCount;
    private long excusedCount;
    private long absentCount;

    private double attendancePercentage;

    private AttendanceColorStatus colorStatus;
    private boolean penaltyTriggered;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Long getCourseId() {
        return courseId;
    }

    public void setCourseId(Long courseId) {
        this.courseId = courseId;
    }

    public long getTotalClasses() {
        return totalClasses;
    }

    public void setTotalClasses(long totalClasses) {
        this.totalClasses = totalClasses;
    }

    public long getPresentCount() {
        return presentCount;
    }

    public void setPresentCount(long presentCount) {
        this.presentCount = presentCount;
    }

    public long getLateCount() {
        return lateCount;
    }

    public void setLateCount(long lateCount) {
        this.lateCount = lateCount;
    }

    public long getExcusedCount() {
        return excusedCount;
    }

    public void setExcusedCount(long excusedCount) {
        this.excusedCount = excusedCount;
    }

    public long getAbsentCount() {
        return absentCount;
    }

    public void setAbsentCount(long absentCount) {
        this.absentCount = absentCount;
    }

    public double getAttendancePercentage() {
        return attendancePercentage;
    }

    public void setAttendancePercentage(double attendancePercentage) {
        this.attendancePercentage = attendancePercentage;
    }

    public AttendanceColorStatus getColorStatus() {
        return colorStatus;
    }

    public void setColorStatus(AttendanceColorStatus colorStatus) {
        this.colorStatus = colorStatus;
    }

    public boolean isPenaltyTriggered() {
        return penaltyTriggered;
    }

    public void setPenaltyTriggered(boolean penaltyTriggered) {
        this.penaltyTriggered = penaltyTriggered;
    }
}
