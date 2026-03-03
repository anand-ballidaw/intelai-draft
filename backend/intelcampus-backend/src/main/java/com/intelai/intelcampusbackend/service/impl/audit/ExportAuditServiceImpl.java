package com.intelai.intelcampusbackend.service.impl.audit;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.entity.audit.ExportAudit;
import com.intelai.intelcampusbackend.repository.audit.ExportAuditRepository;
import com.intelai.intelcampusbackend.service.audit.ExportAuditService;

@Service
public class ExportAuditServiceImpl implements ExportAuditService {

    private final ExportAuditRepository repository;

    public ExportAuditServiceImpl(ExportAuditRepository repository) {
        this.repository = repository;
    }

    @Override
    public void recordExport(
            String module,
            String exportType,
            String referenceId,
            String fileName,
            String signature,
            boolean verified
    ) {

        ExportAudit audit = new ExportAudit();

        audit.setModule(module);
        audit.setExportType(exportType);
        audit.setReferenceId(referenceId);
        audit.setFileName(fileName);
        audit.setSignature(signature);
        audit.setVerified(verified);
        audit.setCreatedBy("system");

        repository.save(audit);
    }
}
