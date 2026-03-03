package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceUpdateRequest;
import com.intelai.intelcampusbackend.service.AttendanceMarkingService;

@RestController
@RequestMapping("/api/attendance")
public class AttendanceMarkingController {

    private final AttendanceMarkingService attendanceMarkingService;

    public AttendanceMarkingController(AttendanceMarkingService attendanceMarkingService) {
        this.attendanceMarkingService = attendanceMarkingService;
    }

    @PostMapping("/mark")
    public void markAttendance(
            @RequestParam Long staffId,
            @RequestBody List<AttendanceUpdateRequest> updates
    ) {
        attendanceMarkingService.markAttendance(staffId, updates);
    }
}
