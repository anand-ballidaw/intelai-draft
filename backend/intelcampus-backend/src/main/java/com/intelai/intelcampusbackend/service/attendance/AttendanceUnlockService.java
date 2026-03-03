package com.intelai.intelcampusbackend.service.attendance;

import java.math.BigDecimal;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResult;

public interface AttendanceUnlockService {

    PaymentEvaluationResult evaluateAttendanceAccess(
            Long invoiceId,
            BigDecimal expectedAmount
    );
}
