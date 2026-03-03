package com.intelai.intelcampusbackend.service.impl.attendance;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResponse;
import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResult;
import com.intelai.intelcampusbackend.service.attendance.AttendanceUnlockService;
import com.intelai.intelcampusbackend.service.finance.PaymentEvaluationService;

@Service
public class AttendanceUnlockServiceImpl implements AttendanceUnlockService {

    private final PaymentEvaluationService paymentEvaluationService;

    public AttendanceUnlockServiceImpl(
            PaymentEvaluationService paymentEvaluationService
    ) {
        this.paymentEvaluationService = paymentEvaluationService;
    }

    @Override
    public PaymentEvaluationResult evaluateAttendanceAccess(
            Long invoiceId,
            BigDecimal expectedAmount
    ) {
        PaymentEvaluationResponse response =
                paymentEvaluationService.evaluateInvoicePayment(
                        invoiceId,
                        expectedAmount
                );

        return new PaymentEvaluationResult(
                response.isEligible(),
                response.getReason()
        );
    }
}
