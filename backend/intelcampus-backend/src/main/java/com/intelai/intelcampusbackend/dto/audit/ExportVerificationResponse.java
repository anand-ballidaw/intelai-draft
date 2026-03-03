package com.intelai.intelcampusbackend.dto.audit;

import java.time.Instant;

public class ExportVerificationResponse {

    private boolean valid;
    private String module;
    private String exportType;
    private String referenceId;
    private String message;
    private Instant verifiedAt;

    public ExportVerificationResponse() {
    }

    public ExportVerificationResponse(
            boolean valid,
            String module,
            String exportType,
            String referenceId,
            String message
    ) {
        this.valid = valid;
        this.module = module;
        this.exportType = exportType;
        this.referenceId = referenceId;
        this.message = message;
        this.verifiedAt = Instant.now();
    }

    public boolean isValid() {
        return valid;
    }

    public String getModule() {
        return module;
    }

    public String getExportType() {
        return exportType;
    }

    public String getReferenceId() {
        return referenceId;
    }

    public String getMessage() {
        return message;
    }

    public Instant getVerifiedAt() {
        return verifiedAt;
    }
}
