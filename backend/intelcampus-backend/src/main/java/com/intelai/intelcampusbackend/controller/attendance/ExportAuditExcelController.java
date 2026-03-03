package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditExcelExportService;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditService;
import com.intelai.intelcampusbackend.service.audit.ExportAuditService;
import com.intelai.intelcampusbackend.service.audit.ExportSignatureService;

@RestController
@RequestMapping("/api/attendance/audit/export/excel")
public class ExportAuditExcelController {

    private final AttendanceAuditService auditService;
    private final AttendanceAuditExcelExportService excelExportService;
    private final ExportAuditService exportAuditService;
    private final ExportSignatureService signatureService;

    public ExportAuditExcelController(
            AttendanceAuditService auditService,
            AttendanceAuditExcelExportService excelExportService,
            ExportAuditService exportAuditService,
            ExportSignatureService signatureService
    ) {
        this.auditService = auditService;
        this.excelExportService = excelExportService;
        this.exportAuditService = exportAuditService;
        this.signatureService = signatureService;
    }

    @GetMapping("/student")
    public ResponseEntity<byte[]> exportStudentAuditExcel(
            @RequestParam Long studentId,
            @RequestParam Long classId,
            @RequestParam String fromDate,
            @RequestParam String toDate
    ) {

        LocalDate from = LocalDate.parse(fromDate.trim());
        LocalDate to = LocalDate.parse(toDate.trim());

        List<AttendanceAuditView> audits =
                auditService.getStudentAuditLog(studentId, classId, from, to);

        byte[] excelBytes =
                excelExportService.exportStudentAuditExcel(audits);

        String referenceId = "student-" + studentId;

        String signature =
                signatureService.sign(
                        "attendance",
                        "excel",
                        referenceId,
                        excelBytes
                );

        exportAuditService.recordExport(
                "attendance",
                "excel",
                referenceId,
                "student_attendance_audit.xlsx",
                signature,
                true
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(
                MediaType.parseMediaType(
                        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                )
        );
        headers.setContentDispositionFormData(
                "attachment",
                "student_attendance_audit.xlsx"
        );
        headers.add("X-Export-Signature", signature);
        headers.add("Access-Control-Expose-Headers", "X-Export-Signature");

        return ResponseEntity.ok()
                .headers(headers)
                .body(excelBytes);
    }
}
