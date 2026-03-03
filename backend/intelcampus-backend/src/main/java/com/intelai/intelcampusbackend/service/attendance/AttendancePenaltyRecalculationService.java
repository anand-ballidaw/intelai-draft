package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

public interface AttendancePenaltyRecalculationService {

    void recalculateForStudent(
            Long studentId,
            Long academicClassSemesterId,
            Double updatedAttendancePercentage,
            Double requiredPercentage,
            LocalDate periodStart,
            LocalDate periodEnd
    );
}
