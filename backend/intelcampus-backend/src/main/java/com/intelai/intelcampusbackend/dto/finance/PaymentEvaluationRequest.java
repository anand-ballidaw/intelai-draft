package com.intelai.intelcampusbackend.dto.finance;

import java.math.BigDecimal;

public class PaymentEvaluationRequest {

    private Long invoiceId;
    private BigDecimal expectedTotalAmount;

    public PaymentEvaluationRequest() {
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public BigDecimal getExpectedTotalAmount() {
        return expectedTotalAmount;
    }

    public void setExpectedTotalAmount(BigDecimal expectedTotalAmount) {
        this.expectedTotalAmount = expectedTotalAmount;
    }
}
