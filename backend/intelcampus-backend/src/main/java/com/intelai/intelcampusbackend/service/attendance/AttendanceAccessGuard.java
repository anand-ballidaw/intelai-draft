package com.intelai.intelcampusbackend.service.attendance;

import java.math.BigDecimal;

/**
 * AttendanceAccessGuard
 *
 * Responsibility:
 * - Central policy gate for attendance access
 * - Used by Audit, Controller, and Guard layers
 */
public interface AttendanceAccessGuard {

    /**
     * Assert attendance access is allowed.
     *
     * @param invoiceId      related invoice
     * @param expectedAmount expected payable amount
     *
     * @throws IllegalStateException if access is denied
     */
    void assertAttendanceAllowed(
            Long invoiceId,
            BigDecimal expectedAmount
    );
}
