package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;

public interface AttendanceAuditPdfExportService {

    byte[] exportStudentAuditPdf(
            List<AttendanceAuditView> audits
    );

    byte[] exportClassAuditPdf(
            List<AttendanceAuditView> audits
    );
}
