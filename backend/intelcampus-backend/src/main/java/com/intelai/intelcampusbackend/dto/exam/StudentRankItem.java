package com.intelai.intelcampusbackend.dto.exam;

public class StudentRankItem {

    private Long studentId;
    private Integer marks;
    private Integer rank;

    public StudentRankItem(
            Long studentId,
            Integer marks,
            Integer rank
    ) {
        this.studentId = studentId;
        this.marks = marks;
        this.rank = rank;
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
