package com.intelai.intelcampusbackend.dto.exam;

import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;

public class ExamResultResponse {

    private Long examId;
    private Long studentId;
    private Integer marks;
    private MarkStatus markStatus;

    public Long getExamId() {
        return examId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Integer getMarks() {
        return marks;
    }

    public MarkStatus getMarkStatus() {
        return markStatus;
    }

    public void setExamId(Long examId) {
        this.examId = examId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }

    public void setMarkStatus(MarkStatus markStatus) {
        this.markStatus = markStatus;
    }
}
