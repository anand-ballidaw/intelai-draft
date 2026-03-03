package com.intelai.intelcampusbackend.util.export;

import java.io.PrintWriter;
import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceReportRecordResponse;

public final class CsvExportUtil {

    private CsvExportUtil() {
    }

    public static void writeAttendanceReport(
            PrintWriter writer,
            List<AttendanceReportRecordResponse> records) {

        writer.println(
                "AttendanceId,StudentId,CourseId,Date,Present,MarkedAutomatically");

        for (AttendanceReportRecordResponse r : records) {
            writer.printf(
                    "%d,%d,%d,%s,%s,%s%n",
                    r.getAttendanceId(),
                    r.getStudentId(),
                    r.getCourseId(),
                    r.getDate(),
                    r.isPresent(),
                    r.isMarkedAutomatically()
            );
        }

        writer.flush();
    }
}
