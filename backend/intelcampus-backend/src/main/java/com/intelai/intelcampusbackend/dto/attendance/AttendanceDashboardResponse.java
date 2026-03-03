package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;

public class AttendanceDashboardResponse {

    private AttendanceAnalyticsResponse analytics;
    private AttendanceRegularizationVisibility regularizationVisibility;
    private AttendanceGraceVisibility graceVisibility;
    private AttendancePenaltyVisibility penaltyVisibility;

    public AttendanceDashboardResponse(
            AttendanceAnalyticsResponse analytics,
            AttendanceRegularizationVisibility regularizationVisibility,
            AttendanceGraceVisibility graceVisibility,
            AttendancePenaltyVisibility penaltyVisibility) {

        this.analytics = analytics;
        this.regularizationVisibility = regularizationVisibility;
        this.graceVisibility = graceVisibility;
        this.penaltyVisibility = penaltyVisibility;
    }

    public AttendanceAnalyticsResponse getAnalytics() {
        return analytics;
    }

    public AttendanceRegularizationVisibility getRegularizationVisibility() {
        return regularizationVisibility;
    }

    public AttendanceGraceVisibility getGraceVisibility() {
        return graceVisibility;
    }

    public AttendancePenaltyVisibility getPenaltyVisibility() {
        return penaltyVisibility;
    }
}
