package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;
import java.util.List;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;

public interface AttendancePenaltyService {

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
            Long academicClassSemesterId
    );

    void waivePenalty(
            Long penaltyId,
            String waivedBy,
            String remarks
    );
}
