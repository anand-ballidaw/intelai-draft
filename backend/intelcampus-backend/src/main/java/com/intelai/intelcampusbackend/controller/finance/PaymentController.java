package com.intelai.intelcampusbackend.controller.finance;

import com.intelai.intelcampusbackend.dto.finance.PaymentRequest;
import com.intelai.intelcampusbackend.model.finance.Payment;
import com.intelai.intelcampusbackend.service.finance.PaymentService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/finance/payments")
public class PaymentController {

    private final PaymentService paymentService;

    public PaymentController(PaymentService paymentService) {
        this.paymentService = paymentService;
    }

    @PostMapping
    public ResponseEntity<Payment> processPayment(
            @RequestBody PaymentRequest request
    ) {
        Payment payment = paymentService.processPayment(
                request.getStudentId(),
                request.getInvoiceId(),
                request.getAmount(),
                request.getPaymentMode()
        );

        return ResponseEntity.ok(payment);
    }
}
