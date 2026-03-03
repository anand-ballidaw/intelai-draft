package com.intelai.intelcampusbackend.service.audit;

public interface ExportAuthorizationService {

    void assertExportAllowed(
            String module,
            String userRole
    );
}
