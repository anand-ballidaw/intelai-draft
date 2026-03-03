package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceGraceVisibilityResponse;
import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.service.attendance.AttendanceGraceVisibilityService;

@RestController
public class AttendanceGraceVisibilityController {

    private final AttendanceGraceVisibilityService service;

    public AttendanceGraceVisibilityController(
            AttendanceGraceVisibilityService service
    ) {
        this.service = service;
    }

    @GetMapping("/api/attendance/grace/visibility")
    public AttendanceGraceVisibilityResponse getGraceVisibility(
            @RequestParam Long studentId,
            @RequestParam Long courseId,
            @RequestParam LocalDate startDate,
            @RequestParam LocalDate endDate
    ) {

        AttendanceGraceVisibility visibility =
                service.getVisibility(studentId, courseId, startDate, endDate);

        return new AttendanceGraceVisibilityResponse(
                studentId,
                courseId,
                visibility,
                0L
        );
    }
}
