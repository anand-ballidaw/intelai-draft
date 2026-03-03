package com.intelai.intelcampusbackend.exception.exam;

public class ExamNotFoundException extends RuntimeException {

    public ExamNotFoundException(Long examId) {
        super("Exam not found with id: " + examId);
    }
}
