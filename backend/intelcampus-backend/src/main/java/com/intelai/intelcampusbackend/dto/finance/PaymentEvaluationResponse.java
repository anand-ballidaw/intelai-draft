package com.intelai.intelcampusbackend.dto.finance;

import java.math.BigDecimal;

public class PaymentEvaluationResponse {

    private Long invoiceId;
    private boolean eligible;
    private BigDecimal paidAmount;
    private String reason;

    public PaymentEvaluationResponse() {
    }

    public PaymentEvaluationResponse(
            Long invoiceId,
            boolean eligible,
            BigDecimal paidAmount,
            String reason
    ) {
        this.invoiceId = invoiceId;
        this.eligible = eligible;
        this.paidAmount = paidAmount;
        this.reason = reason;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public boolean isEligible() {
        return eligible;
    }

    public BigDecimal getPaidAmount() {
        return paidAmount;
    }

    public String getReason() {
        return reason;
    }
}
