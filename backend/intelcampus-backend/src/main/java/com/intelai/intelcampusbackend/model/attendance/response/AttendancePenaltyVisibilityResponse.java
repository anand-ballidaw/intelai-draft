package com.intelai.intelcampusbackend.model.attendance.response;

import java.util.List;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;

public class AttendancePenaltyVisibilityResponse {

    private final boolean visible;
    private final List<AttendancePenalty> penalties;

    public AttendancePenaltyVisibilityResponse(
            boolean visible,
            List<AttendancePenalty> penalties
    ) {
        this.visible = visible;
        this.penalties = penalties;
    }

    public boolean isVisible() {
        return visible;
    }

    public List<AttendancePenalty> getPenalties() {
        return penalties;
    }
}
