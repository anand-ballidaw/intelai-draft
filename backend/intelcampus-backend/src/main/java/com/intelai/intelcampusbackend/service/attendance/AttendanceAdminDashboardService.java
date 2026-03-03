package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAdminClassSummaryResponse;

public interface AttendanceAdminDashboardService {

    AttendanceAdminClassSummaryResponse getClassSummary(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );
}
