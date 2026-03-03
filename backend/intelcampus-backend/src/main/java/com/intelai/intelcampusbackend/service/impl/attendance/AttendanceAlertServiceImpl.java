package com.intelai.intelcampusbackend.service.impl.attendance;

import java.math.BigDecimal;
import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAnalyticsResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAnalyticsService;

@Service
public class AttendanceAlertServiceImpl {

    private final AttendanceAnalyticsService analyticsService;

    public AttendanceAlertServiceImpl(AttendanceAnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    public boolean shouldAlert(Long studentId, Long courseId) {

        AttendanceAnalyticsResponse response =
                analyticsService.analyzeStudentAttendance(
                        studentId,
                        courseId,
                        LocalDate.now().minusMonths(1),
                        LocalDate.now()
                );

        BigDecimal paid = response.getTotalPaid();
        BigDecimal expected = response.getExpectedAmount();

        return paid.compareTo(expected) < 0;
    }
}
