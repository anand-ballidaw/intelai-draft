package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;

public interface AttendancePenaltyVisibilityService {

    AttendancePenaltyVisibility getVisibilityForStudent(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate
    );
}
