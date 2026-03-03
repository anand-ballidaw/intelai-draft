package com.intelai.intelcampusbackend.repository.audit;

import java.util.List;

import org.springframework.data.repository.ListCrudRepository;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;

public interface ExportAuditRepository
        extends ListCrudRepository<ExportAudit, Long> {

    List<ExportAudit> findByModule(String module);

    List<ExportAudit> findByExportType(String exportType);

    List<ExportAudit> findByReferenceId(String referenceId);

    List<ExportAudit> findByVerified(boolean verified);
}
