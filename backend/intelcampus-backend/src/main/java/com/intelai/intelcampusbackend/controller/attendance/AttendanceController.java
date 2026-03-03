package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRegularizationVisibilityService;

@RestController
public class AttendanceController {

    private final AttendanceRegularizationVisibilityService regularizationVisibilityService;

    public AttendanceController(
            AttendanceRegularizationVisibilityService regularizationVisibilityService
    ) {
        this.regularizationVisibilityService = regularizationVisibilityService;
    }

    @GetMapping("/api/attendance/regularization/visibility")
    public AttendanceRegularizationVisibility getRegularizationVisibility(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate
    ) {
        return regularizationVisibilityService.getVisibility(
                studentId,
                courseId,
                startDate,
                endDate
        );
    }
}
