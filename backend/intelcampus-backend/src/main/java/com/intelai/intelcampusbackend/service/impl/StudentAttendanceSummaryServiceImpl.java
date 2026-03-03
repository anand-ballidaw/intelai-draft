package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.StudentAttendanceSummaryDto;
import com.intelai.intelcampusbackend.service.StudentAttendanceSummaryService;

@Service
public class StudentAttendanceSummaryServiceImpl implements StudentAttendanceSummaryService {

    @Override
    public StudentAttendanceSummaryDto getOverallSummary(Long studentId) {
        StudentAttendanceSummaryDto dto = new StudentAttendanceSummaryDto();
        dto.setStudentId(studentId);
        return dto;
    }

    @Override
    public StudentAttendanceSummaryDto getCourseSummary(Long studentId, Long courseId) {
        StudentAttendanceSummaryDto dto = new StudentAttendanceSummaryDto();
        dto.setStudentId(studentId);
        return dto;
    }
}
