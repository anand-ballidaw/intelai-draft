package com.intelai.intelcampusbackend.service.impl.finance;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResponse;
import com.intelai.intelcampusbackend.repository.finance.PaymentRepository;
import com.intelai.intelcampusbackend.service.finance.PaymentEvaluationService;

@Service
public class PaymentEvaluationServiceImpl implements PaymentEvaluationService {

    private final PaymentRepository paymentRepository;

    public PaymentEvaluationServiceImpl(
            PaymentRepository paymentRepository
    ) {
        this.paymentRepository = paymentRepository;
    }

    @Override
    public PaymentEvaluationResponse evaluateInvoicePayment(
            Long invoiceId,
            BigDecimal expectedAmount
    ) {
        BigDecimal totalPaid =
                paymentRepository.getTotalPaidAmountByInvoiceId(
                        invoiceId
                );

        if (totalPaid == null) {
            totalPaid = BigDecimal.ZERO;
        }

        boolean eligible =
                totalPaid.compareTo(expectedAmount) >= 0;

        String reason = eligible
                ? "Invoice fully paid"
                : "Pending payment of " +
                  expectedAmount.subtract(totalPaid);

        return new PaymentEvaluationResponse(
                invoiceId,
                eligible,
                totalPaid,
                reason
        );
    }
}
