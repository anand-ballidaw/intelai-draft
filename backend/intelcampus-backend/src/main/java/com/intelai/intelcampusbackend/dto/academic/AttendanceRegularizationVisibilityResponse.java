package com.intelai.intelcampusbackend.dto.academic;

import com.intelai.intelcampusbackend.model.attendance.AttendanceColorStatus;
import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AttendanceRegularizationVisibilityResponse {

    private Long studentId;
    private AttendanceColorStatus colorStatus;
    private AttendanceRegularizationVisibility regularizationVisibility;
    private AttendanceGraceVisibility graceVisibility;
}
