package com.intelai.intelcampusbackend.dto.academic;

import com.intelai.intelcampusbackend.model.attendance.AttendanceAccessPolicy;

public class AttendanceAccessResponse {

    private Long invoiceId;
    private AttendanceAccessPolicy policy;

    // REQUIRED by Jackson
    public AttendanceAccessResponse() {
    }

    // REQUIRED by Controller
    public AttendanceAccessResponse(
            Long invoiceId,
            AttendanceAccessPolicy policy
    ) {
        this.invoiceId = invoiceId;
        this.policy = policy;
    }

    public Long getInvoiceId() {
        return invoiceId;
    }

    public AttendanceAccessPolicy getPolicy() {
        return policy;
    }
}
