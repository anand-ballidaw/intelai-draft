package com.intelai.intelcampusbackend.controller.audit;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;
import com.intelai.intelcampusbackend.service.audit.ExportAuditQueryService;

import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/audit/exports")
@Tag(
        name = "Export Audit Dashboard",
        description = "Unified export audit listing APIs"
)
public class ExportAuditDashboardController {

    private final ExportAuditQueryService queryService;

    public ExportAuditDashboardController(
            ExportAuditQueryService queryService
    ) {
        this.queryService = queryService;
    }

    @GetMapping
    public List<ExportAudit> findAll(
            @RequestParam(required = false) String module,
            @RequestParam(required = false) String exportType,
            @RequestParam(required = false) String referenceId,
            @RequestParam(required = false) Boolean verified
    ) {

        if (module != null) {
            return queryService.findByModule(module);
        }

        if (exportType != null) {
            return queryService.findByExportType(exportType);
        }

        if (referenceId != null) {
            return queryService.findByReferenceId(referenceId);
        }

        if (verified != null) {
            return queryService.findByVerified(verified);
        }

        return queryService.findAll();
    }
}
