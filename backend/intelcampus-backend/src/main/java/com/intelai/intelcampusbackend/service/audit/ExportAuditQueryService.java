package com.intelai.intelcampusbackend.service.audit;

import java.util.List;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;

public interface ExportAuditQueryService {

    List<ExportAudit> findAll();

    List<ExportAudit> findByModule(String module);

    List<ExportAudit> findByExportType(String exportType);

    List<ExportAudit> findByReferenceId(String referenceId);

    List<ExportAudit> findByVerified(boolean verified);
}
