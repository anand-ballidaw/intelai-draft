package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;

public interface AttendancePenaltyAuditService {

    List<AttendancePenalty> getPenaltyHistory(
            Long studentId,
            Long academicClassSemesterId
    );
}
