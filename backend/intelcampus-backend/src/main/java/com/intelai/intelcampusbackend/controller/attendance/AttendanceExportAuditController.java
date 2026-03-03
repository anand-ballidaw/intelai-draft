package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditService;

@RestController
@RequestMapping("/api/attendance/audit/export")
public class AttendanceExportAuditController {

    private final AttendanceAuditService auditService;

    public AttendanceExportAuditController(AttendanceAuditService auditService) {
        this.auditService = auditService;
    }

    @GetMapping("/student")
    public List<AttendanceAuditView> exportStudentAuditBetweenDates(
            @RequestParam Long studentId,
            @RequestParam Long classId,
            @RequestParam String fromDate,
            @RequestParam String toDate
    ) {

        LocalDate from = LocalDate.parse(fromDate.trim());
        LocalDate to = LocalDate.parse(toDate.trim());

        return auditService.getStudentAuditLog(studentId, classId, from, to);
    }

    @GetMapping("/class")
    public List<AttendanceAuditView> exportClassAuditBetweenDates(
            @RequestParam Long classId,
            @RequestParam Long subjectId,
            @RequestParam String fromDate,
            @RequestParam String toDate
    ) {

        LocalDate from = LocalDate.parse(fromDate.trim());
        LocalDate to = LocalDate.parse(toDate.trim());

        return auditService.getClassAuditLog(classId, subjectId, from, to);
    }
}
