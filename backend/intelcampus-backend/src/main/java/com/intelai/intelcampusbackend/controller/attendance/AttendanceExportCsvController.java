package com.intelai.intelcampusbackend.controller.attendance;

import java.time.LocalDate;

import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.attendance.AttendanceExportCsvService;

@RestController
@RequestMapping("/api/attendance/export/csv")
public class AttendanceExportCsvController {

    private final AttendanceExportCsvService csvService;

    public AttendanceExportCsvController(
            AttendanceExportCsvService csvService
    ) {
        this.csvService = csvService;
    }

    @GetMapping("/student")
    public ResponseEntity<byte[]> exportStudentCsv(
            @RequestParam Long studentId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        byte[] data =
                csvService.exportStudentAttendanceCsv(
                        studentId,
                        startDate,
                        endDate
                );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=student-attendance.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(data);
    }

    @GetMapping("/class")
    public ResponseEntity<byte[]> exportClassCsv(
            @RequestParam Long academicClassId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        byte[] data =
                csvService.exportClassAttendanceCsv(
                        academicClassId,
                        startDate,
                        endDate
                );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=class-attendance.csv")
                .contentType(MediaType.TEXT_PLAIN)
                .body(data);
    }
}
