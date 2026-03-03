package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceReportRecordResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceReportService;

@RestController
@RequestMapping("/api/attendance/export")
public class AttendanceExportController {

    private final AttendanceReportService reportService;

    public AttendanceExportController(
            AttendanceReportService reportService
    ) {
        this.reportService = reportService;
    }

    @GetMapping("/student")
    public List<AttendanceReportRecordResponse> exportStudentAttendance(
            @RequestParam Long studentId,
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate
    ) {

        return reportService.getStudentReport(
                studentId,
                startDate,
                endDate
        );
    }
}
