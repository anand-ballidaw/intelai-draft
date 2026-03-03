package com.intelai.intelcampusbackend.service.exam;

import java.util.List;

import com.intelai.intelcampusbackend.model.entity.exam.ExamRevaluationRequest;

public interface ExamRevaluationService {

    ExamRevaluationRequest requestRevaluation(Long studentId, Long examResultId, String reason);

    ExamRevaluationRequest approveRevaluation(Long requestId, Integer revisedMarks, String remarks);

    List<ExamRevaluationRequest> getStudentRequests(Long studentId);
}
