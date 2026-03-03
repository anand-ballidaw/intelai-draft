package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceReportRecordResponse;
import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceReportService;

@Service
public class AttendanceReportServiceImpl implements AttendanceReportService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceReportServiceImpl(
            AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public List<AttendanceReportRecordResponse> getStudentReport(
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

        return records.stream()
                .map(attendance -> {

                    boolean present =
                            attendance.getStatus() != AttendanceStatus.ABSENT;

                    return new AttendanceReportRecordResponse(
                            attendance.getId(),
                            attendance.getStudent().getId(),
                            attendance.getTimetablePeriod()
                                    .getCourse().getId(),
                            attendance.getAttendanceDate(),
                            present,
                            attendance.isMarkedAutomatically()
                    );
                })
                .collect(Collectors.toList());
    }

    @Override
    public List<AttendanceReportRecordResponse> getClassReport(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<Attendance> records =
                attendanceRepository
                        .findByStudent_AcademicClass_IdAndAttendanceDateBetween(
                                academicClassId,
                                startDate,
                                endDate
                        );

        return records.stream()
                .map(attendance -> {

                    boolean present =
                            attendance.getStatus() != AttendanceStatus.ABSENT;

                    return new AttendanceReportRecordResponse(
                            attendance.getId(),
                            attendance.getStudent().getId(),
                            attendance.getTimetablePeriod()
                                    .getCourse().getId(),
                            attendance.getAttendanceDate(),
                            present,
                            attendance.isMarkedAutomatically()
                    );
                })
                .collect(Collectors.toList());
    }
}
