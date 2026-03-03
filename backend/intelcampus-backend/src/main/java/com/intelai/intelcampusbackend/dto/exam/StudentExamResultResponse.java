package com.intelai.intelcampusbackend.dto.exam;

import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;

public class StudentExamResultResponse {

    private Long examId;
    private Long studentId;
    private Integer marksObtained;
    private Boolean passed;
    private Integer rankPosition;
    private ResultStatus resultStatus;

    public StudentExamResultResponse() {
    }

    public StudentExamResultResponse(
            Long examId,
            Long studentId,
            Integer marksObtained,
            Boolean passed,
            Integer rankPosition,
            ResultStatus resultStatus
    ) {
        this.examId = examId;
        this.studentId = studentId;
        this.marksObtained = marksObtained;
        this.passed = passed;
        this.rankPosition = rankPosition;
        this.resultStatus = resultStatus;
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

    public Integer getRankPosition() {
        return rankPosition;
    }

    public ResultStatus getResultStatus() {
        return resultStatus;
    }
}
