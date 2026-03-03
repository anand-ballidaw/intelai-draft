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

import com.intelai.intelcampusbackend.service.attendance.AttendanceExportExcelService;

@RestController
@RequestMapping("/api/attendance/export/excel")
public class AttendanceExportExcelController {

    private final AttendanceExportExcelService excelService;

    public AttendanceExportExcelController(
            AttendanceExportExcelService excelService
    ) {
        this.excelService = excelService;
    }

    @GetMapping("/student")
    public ResponseEntity<byte[]> exportStudentExcel(
            @RequestParam Long studentId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        byte[] data =
                excelService.exportStudentAttendanceExcel(
                        studentId,
                        startDate,
                        endDate
                );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=student-attendance.xlsx")
                .contentType(
                        MediaType.parseMediaType(
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                )
                .body(data);
    }

    @GetMapping("/class")
    public ResponseEntity<byte[]> exportClassExcel(
            @RequestParam Long academicClassId,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate startDate,
            @RequestParam
            @DateTimeFormat(iso = DateTimeFormat.ISO.DATE)
            LocalDate endDate
    ) {

        byte[] data =
                excelService.exportClassAttendanceExcel(
                        academicClassId,
                        startDate,
                        endDate
                );

        return ResponseEntity.ok()
                .header(HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=class-attendance.xlsx")
                .contentType(
                        MediaType.parseMediaType(
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                )
                .body(data);
    }
}
