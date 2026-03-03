package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;
import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRecordResponse;

public interface AttendanceExportService {

    List<AttendanceRecordResponse> exportStudentAttendance(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );
}
