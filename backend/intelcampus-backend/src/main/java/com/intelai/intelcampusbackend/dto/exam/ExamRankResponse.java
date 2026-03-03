package com.intelai.intelcampusbackend.dto.exam;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;

public class ExamRankResponse {

    private Long studentId;
    private Integer marks;
    private Integer rank;

    public static ExamRankResponse fromEntity(ExamResult result) {
        ExamRankResponse dto = new ExamRankResponse();
        dto.studentId = result.getStudentId();
        dto.marks = result.getMarksObtained();
        dto.rank = result.getRankPosition();
        return dto;
    }

    public Long getStudentId() {
        return studentId;
    }

    public Integer getMarks() {
        return marks;
    }

    public Integer getRank() {
        return rank;
    }
}
