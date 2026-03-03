package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyRecalculationService;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyService;

@Service
@Transactional
public class AttendancePenaltyRecalculationServiceImpl
        implements AttendancePenaltyRecalculationService {

    private final AttendancePenaltyService penaltyService;

    public AttendancePenaltyRecalculationServiceImpl(
            AttendancePenaltyService penaltyService) {
        this.penaltyService = penaltyService;
    }

    @Override
    public void recalculateForStudent(
            Long studentId,
            Long academicClassSemesterId,
            Double updatedAttendancePercentage,
            Double requiredPercentage,
            LocalDate periodStart,
            LocalDate periodEnd
    ) {

        // Only create penalty when attendance is below required threshold
        if (updatedAttendancePercentage < requiredPercentage) {

            penaltyService.createPenalty(
                    studentId,
                    null, // courseId optional at semester-level
                    academicClassSemesterId,
                    updatedAttendancePercentage,
                    requiredPercentage,
                    periodStart,
                    periodEnd
            );
        }
    }
}
