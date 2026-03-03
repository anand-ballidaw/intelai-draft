package com.intelai.intelcampusbackend.dto.exam;

public class MarkEntryItem {

    private Long studentId;
    private Integer marks;

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Integer getMarks() {
        return marks;
    }

    public void setMarks(Integer marks) {
        this.marks = marks;
    }
}
