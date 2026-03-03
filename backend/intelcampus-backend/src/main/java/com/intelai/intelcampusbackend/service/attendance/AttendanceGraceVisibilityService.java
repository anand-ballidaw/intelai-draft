package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;

public interface AttendanceGraceVisibilityService {

    AttendanceGraceVisibility getVisibility(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate
    );
}
