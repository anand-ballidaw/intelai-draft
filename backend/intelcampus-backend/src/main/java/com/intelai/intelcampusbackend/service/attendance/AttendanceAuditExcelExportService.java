package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;

public interface AttendanceAuditExcelExportService {

    byte[] exportStudentAuditExcel(List<AttendanceAuditView> audits);

    byte[] exportClassAuditExcel(List<AttendanceAuditView> audits);
}
