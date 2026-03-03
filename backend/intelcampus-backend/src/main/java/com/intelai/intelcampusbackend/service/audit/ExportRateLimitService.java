package com.intelai.intelcampusbackend.service.audit;

public interface ExportRateLimitService {

    void assertWithinLimit(String userId, String module);
}
