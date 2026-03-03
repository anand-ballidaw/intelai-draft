package com.intelai.intelcampusbackend.service.impl.finance;

import java.math.BigDecimal;
import java.time.LocalDateTime;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.finance.Payment;
import com.intelai.intelcampusbackend.service.finance.PaymentService;

@Service
public class PaymentServiceImpl implements PaymentService {

    @Override
    public Payment processPayment(
            Long studentId,
            Long invoiceId,
            BigDecimal amount,
            String paymentMode
    ) {
        Payment payment = new Payment();
        payment.setStudentId(studentId);
        payment.setInvoiceId(invoiceId);
        payment.setAmount(amount);
        payment.setPaymentMode(paymentMode);
        payment.setPaidAt(LocalDateTime.now());

        return payment;
    }
}
