package com.intelai.intelcampusbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.intelai.intelcampusbackend.service.TimetableAssignmentService;

@RestController
@RequestMapping("/api/timetable/assignments")
public class TimetableAssignmentController {

    private final TimetableAssignmentService timetableAssignmentService;

    public TimetableAssignmentController(TimetableAssignmentService timetableAssignmentService) {
        this.timetableAssignmentService = timetableAssignmentService;
    }

    /* =========================================================
       ASSIGN STAFF TO A TIMETABLE PERIOD
       ========================================================= */
    @PostMapping("/staff")
    public ResponseEntity<Void> assignStaff(
            @RequestParam Long timetablePeriodId,
            @RequestParam Long staffId) {

        timetableAssignmentService.assignStaff(timetablePeriodId, staffId);
        return ResponseEntity.ok().build();
    }

    /* =========================================================
       ASSIGN COURSE TO A TIMETABLE PERIOD
       ========================================================= */
    @PostMapping("/course")
    public ResponseEntity<Void> assignCourse(
            @RequestParam Long timetablePeriodId,
            @RequestParam Long courseId) {

        timetableAssignmentService.assignCourse(timetablePeriodId, courseId);
        return ResponseEntity.ok().build();
    }
}
