package com.intelai.intelcampusbackend.exception.exam;

public class ExamAlreadyPublishedException extends RuntimeException {

    public ExamAlreadyPublishedException(Long examId) {
        super("Exam already published. examId=" + examId);
    }
}
