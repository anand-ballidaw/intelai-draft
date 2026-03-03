package com.intelai.intelcampusbackend.service.exam;

public interface ExamResultAdminService {

    void lockExam(Long examId);

    void unlockExam(Long examId);

    void publishExam(Long examId);
}
