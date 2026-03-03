package com.intelai.intelcampusbackend.service;

import com.intelai.intelcampusbackend.dto.attendance.StudentAttendanceSummaryDto;

public interface StudentAttendanceSummaryService {

    StudentAttendanceSummaryDto getOverallSummary(Long studentId);

    StudentAttendanceSummaryDto getCourseSummary(Long studentId, Long courseId);
}
