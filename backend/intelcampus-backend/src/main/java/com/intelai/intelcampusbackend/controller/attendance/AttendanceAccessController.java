package com.intelai.intelcampusbackend.controller.attendance;

import java.math.BigDecimal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAccessResponse;
import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResult;
import com.intelai.intelcampusbackend.service.attendance.AttendanceUnlockService;

@RestController
@RequestMapping("/api/attendance/access")
public class AttendanceAccessController {

    private final AttendanceUnlockService attendanceUnlockService;

    public AttendanceAccessController(
            AttendanceUnlockService attendanceUnlockService
    ) {
        this.attendanceUnlockService = attendanceUnlockService;
    }

    @GetMapping("/{invoiceId}")
    public ResponseEntity<AttendanceAccessResponse> checkAccess(
            @PathVariable Long invoiceId
    ) {

        PaymentEvaluationResult result =
                attendanceUnlockService.evaluateAttendanceAccess(
                        invoiceId,
                        BigDecimal.ZERO
                );

        AttendanceAccessResponse response =
                new AttendanceAccessResponse(invoiceId, result);

        return ResponseEntity.ok(response);
    }
}
