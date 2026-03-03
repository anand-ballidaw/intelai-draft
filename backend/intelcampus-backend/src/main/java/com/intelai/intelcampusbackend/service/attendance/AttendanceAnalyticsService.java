package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAnalyticsResponse;

public interface AttendanceAnalyticsService {

    AttendanceAnalyticsResponse analyzeStudentAttendance(
            Long studentId,
            Long courseId,
            LocalDate fromDate,
            LocalDate toDate
    );
}
