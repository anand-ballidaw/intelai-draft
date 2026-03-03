package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceUpdateRequest;

public interface AttendanceMarkingService {

    /**
     * Manual attendance marking by staff for a timetable period
     *
     * @param timetablePeriodId timetable period
     * @param updates list of student attendance updates
     */
    void markAttendance(
            Long timetablePeriodId,
            List<AttendanceUpdateRequest> updates
    );
}
