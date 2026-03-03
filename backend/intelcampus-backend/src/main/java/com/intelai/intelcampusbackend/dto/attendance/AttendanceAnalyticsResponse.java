package com.intelai.intelcampusbackend.dto.attendance;

import java.math.BigDecimal;

public class AttendanceAnalyticsResponse {

    private Long invoiceId;
    private boolean eligible;
    private BigDecimal totalPaid;
    private BigDecimal expectedAmount;
    private String decisionReason;

    public AttendanceAnalyticsResponse() {
    }

    public AttendanceAnalyticsResponse(BigDecimal totalPaid,
                                       BigDecimal expectedAmount,
                                       BigDecimal difference) {
        this.totalPaid = totalPaid;
        this.expectedAmount = expectedAmount;
    }

    // ✅ REQUIRED CONSTRUCTOR (FIX)
    public AttendanceAnalyticsResponse(Long invoiceId,
                                       boolean eligible,
                                       BigDecimal totalPaid,
                                       BigDecimal expectedAmount,
                                       String decisionReason) {
        this.invoiceId = invoiceId;
        this.eligible = eligible;
        this.totalPaid = totalPaid;
        this.expectedAmount = expectedAmount;
        this.decisionReason = decisionReason;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public boolean isEligible() {
        return eligible;
    }

    public BigDecimal getTotalPaid() {
        return totalPaid;
    }

    public BigDecimal getExpectedAmount() {
        return expectedAmount;
    }

    public String getDecisionReason() {
        return decisionReason;
    }
}
