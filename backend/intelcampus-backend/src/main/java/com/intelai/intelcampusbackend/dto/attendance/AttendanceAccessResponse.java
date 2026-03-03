package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.dto.finance.PaymentEvaluationResult;

public class AttendanceAccessResponse {

    private Long invoiceId;
    private boolean unlocked;
    private String reason;

    public AttendanceAccessResponse() {
    }

    public AttendanceAccessResponse(
            Long invoiceId,
            PaymentEvaluationResult evaluationResult
    ) {
        this.invoiceId = invoiceId;
        this.unlocked = evaluationResult.isEligible();
        this.reason = evaluationResult.getReason();
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public void setInvoiceId(Long invoiceId) {
        this.invoiceId = invoiceId;
    }

    public boolean isUnlocked() {
        return unlocked;
    }

    public void setUnlocked(boolean unlocked) {
        this.unlocked = unlocked;
    }

    public String getReason() {
        return reason;
    }

    public void setReason(String reason) {
        this.reason = reason;
    }
}
