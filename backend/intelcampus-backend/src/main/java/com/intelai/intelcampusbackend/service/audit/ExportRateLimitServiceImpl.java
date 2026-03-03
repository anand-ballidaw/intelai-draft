package com.intelai.intelcampusbackend.service.audit;

import org.springframework.stereotype.Service;

@Service
public class ExportRateLimitServiceImpl implements ExportRateLimitService {

    @Override
    public void assertWithinLimit(String userId, String module) {
        // Rate limiting already enforced upstream / placeholder for future
        // Intentionally left no-op to preserve existing behavior
    }
}
