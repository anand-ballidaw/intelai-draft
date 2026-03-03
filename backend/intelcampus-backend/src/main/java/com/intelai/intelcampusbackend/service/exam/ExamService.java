package com.intelai.intelcampusbackend.service.exam;

import java.util.List;

import com.intelai.intelcampusbackend.dto.exam.ExamRequest;
import com.intelai.intelcampusbackend.dto.exam.ExamResponse;

public interface ExamService {

    ExamResponse createExam(ExamRequest request);

    ExamResponse getExamById(Long examId);

    List<ExamResponse> getExamsByClass(Long classId);

    void publishExam(Long examId);

    void closeExam(Long examId);
}
