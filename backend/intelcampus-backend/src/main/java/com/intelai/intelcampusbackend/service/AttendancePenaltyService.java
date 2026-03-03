package com.intelai.intelcampusbackend.service;

import java.time.LocalDate;
import java.util.List;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;

public interface AttendancePenaltyService {

    /* ============================================================
       CREATE / FETCH
       ============================================================ */

    AttendancePenalty createPenalty(
            Long studentId,
            Long courseId,
            Long academicClassSemesterId,
            Double attendancePercentage,
            Double requiredPercentage,
            LocalDate periodStart,
            LocalDate periodEnd
    );

    List<AttendancePenalty> getActivePenaltiesForStudent(
            Long studentId,
            Long courseId,
            Long academicClassSemesterId
    );

    /* ============================================================
       LIFECYCLE ACTIONS
       ============================================================ */

    AttendancePenalty waivePenalty(
            Long penaltyId,
            String waivedBy,
            String remarks
    );

    AttendancePenalty revokePenalty(
            Long penaltyId,
            String revokedBy,
            String remarks
    );
}
