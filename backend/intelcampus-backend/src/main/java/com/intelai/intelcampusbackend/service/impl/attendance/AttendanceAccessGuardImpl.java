package com.intelai.intelcampusbackend.service.impl.attendance;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResult;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAccessGuard;
import com.intelai.intelcampusbackend.service.attendance.AttendanceUnlockService;

/**
 * AttendanceAccessGuardImpl
 *
 * Central enforcement layer
 */
@Service
public class AttendanceAccessGuardImpl
        implements AttendanceAccessGuard {

    private final AttendanceUnlockService attendanceUnlockService;

    public AttendanceAccessGuardImpl(
            AttendanceUnlockService attendanceUnlockService
    ) {
        this.attendanceUnlockService = attendanceUnlockService;
    }

    @Override
    public void assertAttendanceAllowed(
            Long invoiceId,
            BigDecimal expectedAmount
    ) {

        PaymentEvaluationResult result =
                attendanceUnlockService.evaluateAttendanceAccess(
                        invoiceId,
                        expectedAmount
                );

        if (!result.isEligible()) {
            throw new IllegalStateException(
                    "Attendance access denied: " + result.getReason()
            );
        }
    }
}
