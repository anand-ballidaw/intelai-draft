package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAdminClassSummaryResponse;
import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAdminDashboardService;

@Service
public class AttendanceAdminDashboardServiceImpl
        implements AttendanceAdminDashboardService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceAdminDashboardServiceImpl(
            AttendanceRepository attendanceRepository
    ) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendanceAdminClassSummaryResponse getClassSummary(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        long totalStudents =
                attendanceRepository
                        .countDistinctStudent_IdByStudent_AcademicClass_Id(
                                academicClassId
                        );

        long totalSessions =
                attendanceRepository
                        .countByStudent_AcademicClass_IdAndAttendanceDateBetween(
                                academicClassId,
                                startDate,
                                endDate
                        );

        long presentCount =
                attendanceRepository
                        .countByStudent_IdAndStatusAndAttendanceDateBetween(
                                academicClassId,
                                AttendanceStatus.PRESENT,
                                startDate,
                                endDate
                        );

        long absentCount =
                attendanceRepository
                        .countByStudent_IdAndStatusAndAttendanceDateBetween(
                                academicClassId,
                                AttendanceStatus.ABSENT,
                                startDate,
                                endDate
                        );

        return new AttendanceAdminClassSummaryResponse(
                academicClassId,
                totalStudents,
                totalSessions,
                presentCount,
                absentCount
        );
    }
}
