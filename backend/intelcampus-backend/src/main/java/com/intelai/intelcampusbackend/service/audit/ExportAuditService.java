package com.intelai.intelcampusbackend.service.audit;

public interface ExportAuditService {

    void recordExport(
            String module,
            String exportType,
            String referenceId,
            String fileName,
            String signature,
            boolean verified
    );
}
