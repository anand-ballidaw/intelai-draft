package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceReportRecordResponse;
import com.intelai.intelcampusbackend.service.attendance.AttendanceReportService;

@RestController
@RequestMapping("/api/attendance/reports")
public class AttendanceReportController {

    private final AttendanceReportService reportService;

    public AttendanceReportController(
            AttendanceReportService reportService) {
        this.reportService = reportService;
    }

    /**
     * GET /api/attendance/reports/student/{studentId}
     */
    @GetMapping("/student/{studentId}")
    public List<AttendanceReportRecordResponse> getStudentReport(
            @PathVariable Long studentId,
            @RequestParam("startDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam("endDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate) {

        return reportService.getStudentReport(
                studentId, startDate, endDate);
    }

    /**
     * GET /api/attendance/reports/class/{academicClassId}
     */
    @GetMapping("/class/{academicClassId}")
    public List<AttendanceReportRecordResponse> getClassReport(
            @PathVariable Long academicClassId,
            @RequestParam("startDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam("endDate")
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate) {

        return reportService.getClassReport(
                academicClassId, startDate, endDate);
    }
}
