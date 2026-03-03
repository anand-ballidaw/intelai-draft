package com.intelai.intelcampusbackend.controller.attendance;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyAuditService;

@RestController
@RequestMapping("/api/attendance/penalties/audit")
public class AttendancePenaltyAuditController {

    private final AttendancePenaltyAuditService auditService;

    public AttendancePenaltyAuditController(
            AttendancePenaltyAuditService auditService
    ) {
        this.auditService = auditService;
    }

    /**
     * GET /api/attendance/penalties/audit/student/{studentId}
     * Returns full penalty history (active + waived + revoked)
     */
    @GetMapping("/student/{studentId}")
    public List<AttendancePenalty> getPenaltyHistory(
            @PathVariable Long studentId,
            @RequestParam Long academicClassSemesterId
    ) {
        return auditService.getPenaltyHistory(
                studentId,
                academicClassSemesterId
        );
    }
}
