package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceDashboardResponse;

public interface AttendanceDashboardService {

    AttendanceDashboardResponse getStudentDashboard(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate
    );
}
