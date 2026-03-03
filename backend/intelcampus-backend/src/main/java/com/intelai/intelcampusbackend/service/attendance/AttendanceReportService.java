package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;
import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceReportRecordResponse;

public interface AttendanceReportService {

    List<AttendanceReportRecordResponse> getStudentReport(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );

    List<AttendanceReportRecordResponse> getClassReport(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );
}
