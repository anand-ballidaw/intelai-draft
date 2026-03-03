package com.intelai.intelcampusbackend.dto.exam;

import java.util.List;

public class StudentTranscriptResponse {

    private Long studentId;
    private String studentName;
    private List<String> subjectGrades;
    private double cgpa;

    public StudentTranscriptResponse(
            Long studentId,
            String studentName,
            List<String> subjectGrades,
            double cgpa
    ) {
        this.studentId = studentId;
        this.studentName = studentName;
        this.subjectGrades = subjectGrades;
        this.cgpa = cgpa;
    }

    public Long getStudentId() {
        return studentId;
    }

    public String getStudentName() {
        return studentName;
    }

    public List<String> getSubjectGrades() {
        return subjectGrades;
    }

    public double getCgpa() {
        return cgpa;
    }
}
