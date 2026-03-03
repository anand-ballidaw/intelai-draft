package com.intelai.intelcampusbackend.dto.exam;

import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;

public class MarkEntryResponse {

    private Long examId;
    private Long studentId;
    private Integer marksObtained;
    private Boolean passed;
    private MarkStatus status;

    public MarkEntryResponse(
            Long examId,
            Long studentId,
            Integer marksObtained,
            Boolean passed,
            MarkStatus status
    ) {
        this.examId = examId;
        this.studentId = studentId;
        this.marksObtained = marksObtained;
        this.passed = passed;
        this.status = status;
    }

    public Long getExamId() {
        return examId;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Integer getMarksObtained() {
        return marksObtained;
    }

    public Boolean getPassed() {
        return passed;
    }

    public MarkStatus getStatus() {
        return status;
    }
}
