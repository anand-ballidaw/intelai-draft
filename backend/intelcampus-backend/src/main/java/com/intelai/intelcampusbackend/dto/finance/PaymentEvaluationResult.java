package com.intelai.intelcampusbackend.dto.finance;

public class PaymentEvaluationResult {

    private final boolean eligible;
    private final String reason;

    public PaymentEvaluationResult(
            boolean eligible,
            String reason
    ) {
        this.eligible = eligible;
        this.reason = reason;
    }

    public boolean isEligible() {
        return eligible;
    }

    public String getReason() {
        return reason;
    }
}
