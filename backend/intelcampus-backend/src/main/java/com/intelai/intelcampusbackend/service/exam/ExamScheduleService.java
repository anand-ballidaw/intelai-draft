package com.intelai.intelcampusbackend.service.exam;

import java.util.List;

import com.intelai.intelcampusbackend.dto.exam.ExamScheduleRequest;
import com.intelai.intelcampusbackend.dto.exam.ExamScheduleResponse;

public interface ExamScheduleService {

    ExamScheduleResponse createSchedule(ExamScheduleRequest request);

    List<ExamScheduleResponse> getSchedule(Long examId);
}
