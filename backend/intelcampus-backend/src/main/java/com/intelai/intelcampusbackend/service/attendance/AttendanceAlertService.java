package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;

public interface AttendanceAlertService {

    void evaluateAndTriggerAlerts(
            Long studentId,
            Long academicClassId,
            LocalDate fromDate,
            LocalDate toDate
    );
}
