package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

public interface AttendanceExportCsvService {

    byte[] exportStudentAttendanceCsv(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );

    byte[] exportClassAttendanceCsv(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );
}
