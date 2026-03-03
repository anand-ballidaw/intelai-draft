package com.intelai.intelcampusbackend.config;

import java.math.BigDecimal;

import org.springframework.boot.context.properties.ConfigurationProperties;
import org.springframework.stereotype.Component;

import lombok.Getter;
import lombok.Setter;

@Component
@ConfigurationProperties(prefix = "intelcampus.policy.finance-attendance")
@Getter
@Setter
public class FinanceAttendancePolicyProperties {

    /**
     * Master toggle for finance -> attendance bridge
     */
    private boolean enabled = true;

    /**
     * Minimum paid ratio (0.0 - 1.0) to allow attendance
     * Used only if ratio-based evaluation is enabled later
     */
    private BigDecimal minimumPaidRatio = BigDecimal.ONE;

    /**
     * Policy version for audit & future migrations
     */
    private String policyVersion = "v1";
}
