package com.intelai.intelcampusbackend.service.impl.audit;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;
import com.intelai.intelcampusbackend.repository.audit.ExportAuditRepository;
import com.intelai.intelcampusbackend.service.audit.ExportAuditQueryService;

@Service
public class ExportAuditQueryServiceImpl
        implements ExportAuditQueryService {

    private final ExportAuditRepository repository;

    public ExportAuditQueryServiceImpl(
            ExportAuditRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public List<ExportAudit> findAll() {
        return repository.findAll();
    }

    @Override
    public List<ExportAudit> findByModule(String module) {
        return repository.findByModule(module);
    }

    @Override
    public List<ExportAudit> findByExportType(String exportType) {
        return repository.findByExportType(exportType);
    }

    @Override
    public List<ExportAudit> findByReferenceId(String referenceId) {
        return repository.findByReferenceId(referenceId);
    }

    @Override
    public List<ExportAudit> findByVerified(boolean verified) {
        return repository.findByVerified(verified);
    }
}
