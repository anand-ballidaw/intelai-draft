package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceDashboardResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceDashboardService;

@RestController
@RequestMapping("/api/attendance/dashboard")
public class AttendanceDashboardController {

    private final AttendanceDashboardService dashboardService;

    public AttendanceDashboardController(
            AttendanceDashboardService dashboardService
    ) {
        this.dashboardService = dashboardService;
    }

    @GetMapping("/student")
    public AttendanceDashboardResponse getStudentDashboard(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        return dashboardService.getStudentDashboard(
                studentId,
                courseId,
                startDate,
                endDate
        );
    }
}
