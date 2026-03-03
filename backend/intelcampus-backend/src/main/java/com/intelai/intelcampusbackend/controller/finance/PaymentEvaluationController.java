package com.intelai.intelcampusbackend.controller.finance;

import java.math.BigDecimal;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationRequest;
import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResponse;
import com.intelai.intelcampusbackend.service.finance.PaymentEvaluationService;

@RestController
@RequestMapping("/api/finance/payments")
public class PaymentEvaluationController {

    private final PaymentEvaluationService paymentEvaluationService;

    public PaymentEvaluationController(
            PaymentEvaluationService paymentEvaluationService
    ) {
        this.paymentEvaluationService = paymentEvaluationService;
    }

    @PostMapping("/evaluate")
    public ResponseEntity<PaymentEvaluationResponse> evaluatePayment(
            @RequestBody PaymentEvaluationRequest request
    ) {
        Long invoiceId = request.getInvoiceId();
        BigDecimal expectedAmount = request.getExpectedTotalAmount();

        PaymentEvaluationResponse response =
                paymentEvaluationService.evaluateInvoicePayment(
                        invoiceId,
                        expectedAmount
                );

        return ResponseEntity.ok(response);
    }
}
