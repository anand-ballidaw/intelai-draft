package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

public interface AttendanceExportExcelService {

    byte[] exportStudentAttendanceExcel(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );

    byte[] exportClassAttendanceExcel(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );
}
