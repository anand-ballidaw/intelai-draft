package com.intelai.intelcampusbackend.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.AttendanceAutoService;

@RestController
@RequestMapping("/api/attendance/auto")
public class AttendanceAutoController {

    private final AttendanceAutoService attendanceAutoService;

    public AttendanceAutoController(
            AttendanceAutoService attendanceAutoService
    ) {
        this.attendanceAutoService = attendanceAutoService;
    }

    @PostMapping("/period/{timetablePeriodId}")
    public ResponseEntity<Void> generateForPeriod(
            @PathVariable Long timetablePeriodId
    ) {
        attendanceAutoService.generateAttendanceForPeriod(
                timetablePeriodId
        );
        return ResponseEntity.ok().build();
    }
}
