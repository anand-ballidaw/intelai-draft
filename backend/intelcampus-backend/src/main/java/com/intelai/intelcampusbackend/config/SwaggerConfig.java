package com.intelai.intelcampusbackend.config;

import org.springdoc.core.models.GroupedOpenApi;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class SwaggerConfig {

    @Bean
    public GroupedOpenApi attendanceAuditExportApi() {
        return GroupedOpenApi.builder()
                .group("Attendance Audit Export")
                .pathsToMatch(
                        "/api/attendance/audit/export/**"
                )
                .build();
    }
}
