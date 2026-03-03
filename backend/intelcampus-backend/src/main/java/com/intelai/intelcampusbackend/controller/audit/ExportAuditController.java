package com.intelai.intelcampusbackend.controller.audit;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;
import com.intelai.intelcampusbackend.service.audit.ExportAuditQueryService;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.tags.Tag;

@RestController
@RequestMapping("/api/audit/export")
@Tag(name = "Export Audit")
public class ExportAuditController {

    private final ExportAuditQueryService queryService;

    public ExportAuditController(ExportAuditQueryService queryService) {
        this.queryService = queryService;
    }

    @Operation(summary = "Get all export audit records")
    @GetMapping
    public List<ExportAudit> findAll() {
        return queryService.findAll();
    }

    @Operation(summary = "Get export audit records by module")
    @GetMapping("/module/{module}")
    public List<ExportAudit> findByModule(@PathVariable String module) {
        return queryService.findByModule(module);
    }

    @Operation(summary = "Get export audit records by reference ID")
    @GetMapping("/reference/{referenceId}")
    public List<ExportAudit> findByReferenceId(@PathVariable String referenceId) {
        return queryService.findByReferenceId(referenceId);
    }

    @Operation(summary = "Get export audit records by verification status")
    @GetMapping("/verified/{verified}")
    public List<ExportAudit> findByVerified(@PathVariable boolean verified) {
        return queryService.findByVerified(verified);
    }
}
