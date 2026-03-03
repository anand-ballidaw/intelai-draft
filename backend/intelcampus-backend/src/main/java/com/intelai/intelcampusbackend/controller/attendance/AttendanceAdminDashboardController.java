package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAdminClassSummaryResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAdminDashboardService;

@RestController
@RequestMapping("/api/attendance/admin/dashboard")
public class AttendanceAdminDashboardController {

    private final AttendanceAdminDashboardService dashboardService;

    public AttendanceAdminDashboardController(
            AttendanceAdminDashboardService dashboardService
    ) {
        this.dashboardService = dashboardService;
    }

    /**
     * GET /api/attendance/admin/dashboard/class
     */
    @GetMapping("/class")
    public AttendanceAdminClassSummaryResponse getClassSummary(
            @RequestParam Long academicClassId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {
        return dashboardService.getClassSummary(
                academicClassId,
                startDate,
                endDate
        );
    }
}
