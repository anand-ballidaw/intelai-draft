package com.intelai.intelcampusbackend.controller.attendance;

import java.math.BigDecimal;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.attendance.AttendanceAnalyticsExportService;

@RestController
@RequestMapping("/api/attendance/analytics/export")
public class AttendanceAnalyticsExportController {

    private final AttendanceAnalyticsExportService exportService;

    public AttendanceAnalyticsExportController(
            AttendanceAnalyticsExportService exportService
    ) {
        this.exportService = exportService;
    }

    @GetMapping("/excel")
    public ResponseEntity<byte[]> exportExcel(
            @RequestParam Long invoiceId,
            @RequestParam BigDecimal expectedAmount
    ) {

        byte[] data =
                exportService.exportAnalyticsExcel(
                        invoiceId,
                        expectedAmount
                );

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=attendance_analytics.xlsx"
                )
                .contentType(
                        MediaType.parseMediaType(
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                )
                .body(data);
    }

    @GetMapping("/pdf")
    public ResponseEntity<byte[]> exportPdf(
            @RequestParam Long invoiceId,
            @RequestParam BigDecimal expectedAmount
    ) {

        byte[] data =
                exportService.exportAnalyticsPdf(
                        invoiceId,
                        expectedAmount
                );

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=attendance_analytics.pdf"
                )
                .contentType(MediaType.APPLICATION_PDF)
                .body(data);
    }
}
