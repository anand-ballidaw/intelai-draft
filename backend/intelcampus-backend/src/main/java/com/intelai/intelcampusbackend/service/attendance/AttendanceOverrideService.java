package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDateTime;
import java.util.Optional;

import com.intelai.intelcampusbackend.model.attendance.AttendanceOverride;

public interface AttendanceOverrideService {

    AttendanceOverride createOverride(
            Long invoiceId,
            String reason,
            String approvedBy,
            LocalDateTime validUntil
    );

    Optional<AttendanceOverride> getActiveOverride(Long invoiceId);
}
