package com.intelai.intelcampusbackend.service.finance;

import java.math.BigDecimal;

import com.intelai.intelcampusbackend.model.finance.Payment;

public interface PaymentService {

    Payment processPayment(
            Long studentId,
            Long invoiceId,
            BigDecimal amount,
            String paymentMode
    );
}
