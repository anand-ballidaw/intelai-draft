package com.intelai.intelcampusbackend.controller.finance;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.audit.ExportAuditService;
import com.intelai.intelcampusbackend.service.audit.ExportSignatureService;

@RestController
@RequestMapping("/api/finance/analytics/export")
public class FinanceAnalyticsExportController {

    private final ExportAuditService exportAuditService;
    private final ExportSignatureService signatureService;

    public FinanceAnalyticsExportController(
            ExportAuditService exportAuditService,
            ExportSignatureService signatureService
    ) {
        this.exportAuditService = exportAuditService;
        this.signatureService = signatureService;
    }

    @GetMapping("/excel")
    public ResponseEntity<byte[]> exportExcel() {

        byte[] bytes = "FINANCE ANALYTICS EXCEL".getBytes();

        String referenceId = "finance-analytics";

        String signature =
                signatureService.sign(
                        "finance",
                        "excel",
                        referenceId,
                        bytes
                );

        exportAuditService.recordExport(
                "finance",
                "excel",
                referenceId,
                "finance_analytics.xlsx",
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
                "finance_analytics.xlsx"
        );
        headers.add("X-Export-Signature", signature);

        return ResponseEntity.ok()
                .headers(headers)
                .body(bytes);
    }
}
