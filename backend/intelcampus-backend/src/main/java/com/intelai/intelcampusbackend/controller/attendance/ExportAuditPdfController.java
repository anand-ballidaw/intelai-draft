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
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditPdfExportService;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditService;
import com.intelai.intelcampusbackend.service.audit.ExportAuditService;
import com.intelai.intelcampusbackend.service.audit.ExportSignatureService;

@RestController
@RequestMapping("/api/attendance/audit/export/pdf")
public class ExportAuditPdfController {

    private final AttendanceAuditService auditService;
    private final AttendanceAuditPdfExportService pdfExportService;
    private final ExportAuditService exportAuditService;
    private final ExportSignatureService signatureService;

    public ExportAuditPdfController(
            AttendanceAuditService auditService,
            AttendanceAuditPdfExportService pdfExportService,
            ExportAuditService exportAuditService,
            ExportSignatureService signatureService
    ) {
        this.auditService = auditService;
        this.pdfExportService = pdfExportService;
        this.exportAuditService = exportAuditService;
        this.signatureService = signatureService;
    }

    @GetMapping("/student")
    public ResponseEntity<byte[]> exportStudentAuditPdf(
            @RequestParam Long studentId,
            @RequestParam Long classId,
            @RequestParam String fromDate,
            @RequestParam String toDate
    ) {

        LocalDate from = LocalDate.parse(fromDate.trim());
        LocalDate to = LocalDate.parse(toDate.trim());

        List<AttendanceAuditView> audits =
                auditService.getStudentAuditLog(studentId, classId, from, to);

        byte[] pdfBytes =
                pdfExportService.exportStudentAuditPdf(audits);

        String referenceId = "student-" + studentId;

        String signature =
                signatureService.sign(
                        "attendance",
                        "pdf",
                        referenceId,
                        pdfBytes
                );

        exportAuditService.recordExport(
                "attendance",
                "pdf",
                referenceId,
                "student_attendance_audit.pdf",
                signature,
                true
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData(
                "attachment",
                "student_attendance_audit.pdf"
        );
        headers.add("X-Export-Signature", signature);

        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }

    @GetMapping("/class")
    public ResponseEntity<byte[]> exportClassAuditPdf(
            @RequestParam Long classId,
            @RequestParam Long subjectId,
            @RequestParam String fromDate,
            @RequestParam String toDate
    ) {

        LocalDate from = LocalDate.parse(fromDate.trim());
        LocalDate to = LocalDate.parse(toDate.trim());

        List<AttendanceAuditView> audits =
                auditService.getClassAuditLog(classId, subjectId, from, to);

        byte[] pdfBytes =
                pdfExportService.exportClassAuditPdf(audits);

        String referenceId = "class-" + classId + "-subject-" + subjectId;

        String signature =
                signatureService.sign(
                        "attendance",
                        "pdf",
                        referenceId,
                        pdfBytes
                );

        exportAuditService.recordExport(
                "attendance",
                "pdf",
                referenceId,
                "class_attendance_audit.pdf",
                signature,
                true
        );

        HttpHeaders headers = new HttpHeaders();
        headers.setContentType(MediaType.APPLICATION_PDF);
        headers.setContentDispositionFormData(
                "attachment",
                "class_attendance_audit.pdf"
        );
        headers.add("X-Export-Signature", signature);

        return ResponseEntity.ok()
                .headers(headers)
                .body(pdfBytes);
    }
}
