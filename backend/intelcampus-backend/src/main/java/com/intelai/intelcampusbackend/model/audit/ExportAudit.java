package com.intelai.intelcampusbackend.model.audit;

import java.time.LocalDateTime;

/**
 * This is a pure MODEL / DTO class.
 * It is NOT a JPA entity.
 * The real entity is: com.intelai.intelcampusbackend.entity.audit.ExportAudit
 */
public class ExportAudit {

    private Long id;

    private String module;

    private String referenceId;

    private String fileType;

    private boolean verified;

    private LocalDateTime createdAt;

    public ExportAudit() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getModule() {
        return module;
    }

    public void setModule(String module) {
        this.module = module;
    }

    public String getReferenceId() {
        return referenceId;
    }

    public void setReferenceId(String referenceId) {
        this.referenceId = referenceId;
    }

    public String getFileType() {
        return fileType;
    }

    public void setFileType(String fileType) {
        this.fileType = fileType;
    }

    public boolean isVerified() {
        return verified;
    }

    public void setVerified(boolean verified) {
        this.verified = verified;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
