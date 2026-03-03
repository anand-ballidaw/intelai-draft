package com.intelai.intelcampusbackend.dto.exam;

public class TopperItem {

    private Long studentId;
    private String studentName;
    private Integer marksObtained;
    private Integer rankPosition;

    public TopperItem() {}

    public TopperItem(Long studentId, String studentName, Integer marksObtained, Integer rankPosition) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.marksObtained = marksObtained;
        this.rankPosition = rankPosition;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public void setStudentName(String studentName) {
        this.studentName = studentName;
    }

    public Integer getMarksObtained() {
        return marksObtained;
    }

    public void setMarksObtained(Integer marksObtained) {
        this.marksObtained = marksObtained;
    }

    public Integer getRankPosition() {
        return rankPosition;
    }

    public void setRankPosition(Integer rankPosition) {
        this.rankPosition = rankPosition;
    }
}
