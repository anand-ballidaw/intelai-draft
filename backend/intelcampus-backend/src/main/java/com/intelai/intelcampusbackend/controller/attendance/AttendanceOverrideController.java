package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDateTime;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.attendance.AttendanceOverride;
import com.intelai.intelcampusbackend.service.attendance.AttendanceOverrideService;

@RestController
@RequestMapping("/api/admin/attendance/overrides")
public class AttendanceOverrideController {

    private final AttendanceOverrideService overrideService;

    public AttendanceOverrideController(
            AttendanceOverrideService overrideService
    ) {
        this.overrideService = overrideService;
    }

    @PostMapping
    public AttendanceOverride createOverride(
            @RequestParam Long invoiceId,
            @RequestParam String reason,
            @RequestParam String approvedBy,
            @RequestParam(required = false) LocalDateTime validUntil
    ) {
        return overrideService.createOverride(
                invoiceId,
                reason,
                approvedBy,
                validUntil
        );
    }
}
