package com.intelai.intelcampusbackend.service;

import com.intelai.intelcampusbackend.model.attendance.AttendanceColorStatus;

public interface AttendanceRuleEvaluationService {

    AttendanceColorStatus evaluateColor(Double attendancePercentage);

    boolean shouldTriggerPenalty(Double attendancePercentage);
}
