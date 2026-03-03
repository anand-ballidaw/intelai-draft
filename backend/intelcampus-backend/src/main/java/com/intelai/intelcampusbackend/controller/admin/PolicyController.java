package com.intelai.intelcampusbackend.controller.admin;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.config.FinanceAttendancePolicyProperties;

@RestController
@RequestMapping("/api/admin/policies")
public class PolicyController {

    private final FinanceAttendancePolicyProperties policyProperties;

    public PolicyController(
            FinanceAttendancePolicyProperties policyProperties
    ) {
        this.policyProperties = policyProperties;
    }

    @GetMapping("/finance-attendance")
    public FinanceAttendancePolicyProperties getFinanceAttendancePolicy() {
        return policyProperties;
    }
}
