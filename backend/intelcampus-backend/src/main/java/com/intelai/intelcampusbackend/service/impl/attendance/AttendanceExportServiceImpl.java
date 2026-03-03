package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRecordResponse;
import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceExportService;

@Service
public class AttendanceExportServiceImpl implements AttendanceExportService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceExportServiceImpl(
            AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public List<AttendanceRecordResponse> exportStudentAttendance(
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

                    AttendanceStatus status = attendance.getStatus();
                    boolean present =
                            status != AttendanceStatus.ABSENT;

                    return new AttendanceRecordResponse(
                            attendance.getId(),
                            attendance.getStudent().getId(),
                            attendance.getTimetablePeriod()
                                    .getCourse().getId(),
                            attendance.getAttendanceDate(),
                            status,
                            present
                    );
                })
                .collect(Collectors.toList());
    }
}
