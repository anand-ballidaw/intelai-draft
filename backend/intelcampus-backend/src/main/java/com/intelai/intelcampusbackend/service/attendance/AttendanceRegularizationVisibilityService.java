package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;

public interface AttendanceRegularizationVisibilityService {

    AttendanceRegularizationVisibility getVisibility(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate
    );
}
