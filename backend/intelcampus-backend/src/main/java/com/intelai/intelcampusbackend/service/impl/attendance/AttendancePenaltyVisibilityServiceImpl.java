package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyVisibilityService;

@Service
public class AttendancePenaltyVisibilityServiceImpl
        implements AttendancePenaltyVisibilityService {

    private final AttendanceRepository attendanceRepository;

    public AttendancePenaltyVisibilityServiceImpl(
            AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendancePenaltyVisibility getVisibilityForStudent(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate) {

        long absentCount =
                attendanceRepository
                        .countAbsentForStudentAndCourseBetweenDates(
                                studentId,
                                courseId,
                                startDate,
                                endDate
                        );

        if (absentCount == 0) {
            return AttendancePenaltyVisibility.NOT_REQUIRED;
        }

        if (absentCount < 5) {
            return AttendancePenaltyVisibility.WARNING;
        }

        return AttendancePenaltyVisibility.REQUIRED;
    }
}
