package com.intelai.intelcampusbackend.service.finance;

import java.math.BigDecimal;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResponse;

public interface PaymentEvaluationService {

    PaymentEvaluationResponse evaluateInvoicePayment(
            Long invoiceId,
            BigDecimal expectedTotalAmount
    );
}
