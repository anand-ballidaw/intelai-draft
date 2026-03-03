package com.intelai.intelcampusbackend.view.attendance;

import java.time.LocalDateTime;

public interface AttendanceAuditView {

    Long getAuditId();

    Long getInvoiceId();

    String getStatus();

    String getReason();

    LocalDateTime getCreatedAt();
}
