package com.intelai.intelcampusbackend.controller.attendance;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRegularizationAuditView;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRegularizationAuditService;

@RestController
@RequestMapping("/api/attendance/regularization/audit")
public class AttendanceRegularizationAuditController {

    private final AttendanceRegularizationAuditService auditService;

    public AttendanceRegularizationAuditController(
            AttendanceRegularizationAuditService auditService
    ) {
        this.auditService = auditService;
    }

    /**
     * Student-level audit trail
     */
    @GetMapping("/student")
    public List<AttendanceRegularizationAuditView> getStudentRegularizations(
            @RequestParam Long studentId,
            @RequestParam Long academicClassSemesterId
    ) {
        return auditService.getStudentRegularizations(
                studentId,
                academicClassSemesterId
        );
    }

    /**
     * Admin / faculty audit by status
     */
    @GetMapping("/status")
    public List<AttendanceRegularizationAuditView> getByStatus(
            @RequestParam Long academicClassSemesterId,
            @RequestParam AttendanceRegularizationStatus status
    ) {
        return auditService.getRegularizationsByStatus(
                academicClassSemesterId,
                status
        );
    }
}
