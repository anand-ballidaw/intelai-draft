package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyVisibilityService;

@RestController
public class AttendancePenaltyVisibilityController {

    private final AttendancePenaltyVisibilityService service;

    public AttendancePenaltyVisibilityController(
            AttendancePenaltyVisibilityService service
    ) {
        this.service = service;
    }

    @GetMapping("/api/attendance/penalty/visibility")
    public AttendancePenaltyVisibility getPenaltyVisibility(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        return service.getVisibilityForStudent(
                studentId,
                courseId,
                startDate,
                endDate
        );
    }
}
