package com.intelai.intelcampusbackend.service.impl.attendance;

import java.nio.charset.StandardCharsets;
import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceExportCsvService;

@Service
public class AttendanceExportCsvServiceImpl
        implements AttendanceExportCsvService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceExportCsvServiceImpl(
            AttendanceRepository attendanceRepository
    ) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public byte[] exportStudentAttendanceCsv(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<Attendance> records =
                attendanceRepository.findByStudent_IdAndAttendanceDateBetween(
                        studentId,
                        startDate,
                        endDate
                );

        StringBuilder csv = new StringBuilder();
        csv.append("AttendanceId,StudentId,CourseId,Date,Status,MarkedAutomatically\n");

        for (Attendance a : records) {
            csv.append(a.getId()).append(",")
               .append(a.getStudent().getId()).append(",")
               .append(a.getTimetablePeriod().getCourse().getId()).append(",")
               .append(a.getAttendanceDate()).append(",")
               .append(a.getStatus()).append(",")
               .append(a.isMarkedAutomatically()).append("\n");
        }

        return csv.toString().getBytes(StandardCharsets.UTF_8);
    }

    @Override
    public byte[] exportClassAttendanceCsv(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<Attendance> records =
                attendanceRepository.findByStudent_AcademicClass_IdAndAttendanceDateBetween(
                        academicClassId,
                        startDate,
                        endDate
                );

        StringBuilder csv = new StringBuilder();
        csv.append("AttendanceId,StudentId,CourseId,Date,Status,MarkedAutomatically\n");

        for (Attendance a : records) {
            csv.append(a.getId()).append(",")
               .append(a.getStudent().getId()).append(",")
               .append(a.getTimetablePeriod().getCourse().getId()).append(",")
               .append(a.getAttendanceDate()).append(",")
               .append(a.getStatus()).append(",")
               .append(a.isMarkedAutomatically()).append("\n");
        }

        return csv.toString().getBytes(StandardCharsets.UTF_8);
    }
}
