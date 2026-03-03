package com.intelai.intelcampusbackend.service.exam;

public interface ExamResultPublishService {

    void publishResults(Long examId);

    void lockResults(Long examId);

}
