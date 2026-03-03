package com.intelai.intelcampusbackend.model.attendance;

public enum AttendancePenaltyType {

    WARNING_ONLY,        // Only warning, no penalty
    FINE,                // Monetary penalty
    EXAM_BLOCK,          // Block exam access
    CERTIFICATE_HOLD,    // Hold certificates
    SUSPENSION           // Extreme case
}
