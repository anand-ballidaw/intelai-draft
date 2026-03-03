package com.intelai.intelcampusbackend.service.impl.audit;

import java.util.Set;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.exception.ExportAccessDeniedException;
import com.intelai.intelcampusbackend.service.audit.ExportAuthorizationService;

@Service
public class ExportAuthorizationServiceImpl
        implements ExportAuthorizationService {

    private static final Set<String> FINANCE_ROLES =
            Set.of("ADMIN", "FINANCE");

    private static final Set<String> ATTENDANCE_ROLES =
            Set.of("ADMIN", "ACADEMIC");

    @Override
    public void assertExportAllowed(
            String module,
            String userRole
    ) {

        if (userRole == null) {
            throw new ExportAccessDeniedException(
                    "User role is required for export"
            );
        }

        switch (module) {

            case "FINANCE":
                if (!FINANCE_ROLES.contains(userRole)) {
                    throw new ExportAccessDeniedException(
                            "Finance export not permitted for role: "
                                    + userRole
                    );
                }
                break;

            case "ATTENDANCE":
                if (!ATTENDANCE_ROLES.contains(userRole)) {
                    throw new ExportAccessDeniedException(
                            "Attendance export not permitted for role: "
                                    + userRole
                    );
                }
                break;

            default:
                throw new ExportAccessDeniedException(
                        "Unknown export module: " + module
                );
        }
    }
}
