package com.intelai.intelcampusbackend.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.StudentAttendanceSummaryDto;
import com.intelai.intelcampusbackend.service.StudentAttendanceSummaryService;

@RestController
@RequestMapping("/api/attendance/summary")
public class StudentAttendanceSummaryController {

    private final StudentAttendanceSummaryService summaryService;

    public StudentAttendanceSummaryController(StudentAttendanceSummaryService summaryService) {
        this.summaryService = summaryService;
    }

    @GetMapping("/student/{studentId}")
    public StudentAttendanceSummaryDto getOverallSummary(@PathVariable Long studentId) {
        return summaryService.getOverallSummary(studentId);
    }

    @GetMapping("/student/{studentId}/course/{courseId}")
    public StudentAttendanceSummaryDto getCourseSummary(
            @PathVariable Long studentId,
            @PathVariable Long courseId
    ) {
        return summaryService.getCourseSummary(studentId, courseId);
    }
}
