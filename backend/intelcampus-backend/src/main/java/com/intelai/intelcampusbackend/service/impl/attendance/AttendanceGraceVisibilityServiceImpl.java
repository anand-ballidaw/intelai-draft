package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceGraceVisibilityService;

@Service
public class AttendanceGraceVisibilityServiceImpl
        implements AttendanceGraceVisibilityService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceGraceVisibilityServiceImpl(
            AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public AttendanceGraceVisibility getVisibility(
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
            return AttendanceGraceVisibility.NOT_REQUIRED;
        }

        if (absentCount <= 3) {
            return AttendanceGraceVisibility.ELIGIBLE;
        }

        return AttendanceGraceVisibility.NOT_ELIGIBLE;
    }
}
