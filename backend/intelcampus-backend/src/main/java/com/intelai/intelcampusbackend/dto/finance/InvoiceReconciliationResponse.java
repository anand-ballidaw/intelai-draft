package com.intelai.intelcampusbackend.dto.finance;

import java.math.BigDecimal;

public class InvoiceReconciliationResponse {

    private Long invoiceId;
    private BigDecimal outstandingAmount;

    public InvoiceReconciliationResponse() {
    }

    public InvoiceReconciliationResponse(
            Long invoiceId,
            BigDecimal outstandingAmount
    ) {
        this.invoiceId = invoiceId;
        this.outstandingAmount = outstandingAmount;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public BigDecimal getOutstandingAmount() {
        return outstandingAmount;
    }

    public void setOutstandingAmount(BigDecimal outstandingAmount) {
        this.outstandingAmount = outstandingAmount;
    }
}
