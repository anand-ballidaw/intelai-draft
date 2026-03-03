package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAnalyticsResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAnalyticsService;

@RestController
@RequestMapping("/api/attendance/analytics")
public class AttendanceAnalyticsController {

    private final AttendanceAnalyticsService analyticsService;

    public AttendanceAnalyticsController(AttendanceAnalyticsService analyticsService) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/student/{studentId}/course/{courseId}")
    public AttendanceAnalyticsResponse getAnalytics(
            @PathVariable Long studentId,
            @PathVariable Long courseId,
            @RequestParam("from") String fromDate,
            @RequestParam("to") String toDate
    ) {
        return analyticsService.analyzeStudentAttendance(
                studentId,
                courseId,
                LocalDate.parse(fromDate),
                LocalDate.parse(toDate)
        );
    }
}
