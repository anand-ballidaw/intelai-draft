package com.intelai.intelcampusbackend.dto.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceColorStatus;
import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class StudentAttendanceDashboardResponse {

    private Long studentId;
    private double attendancePercentage;
    private AttendanceColorStatus colorStatus;
    private AttendancePenaltyVisibility penaltyVisibility;
    private AttendanceRegularizationVisibility regularizationVisibility;
    private AttendanceGraceVisibility graceVisibility;
}
