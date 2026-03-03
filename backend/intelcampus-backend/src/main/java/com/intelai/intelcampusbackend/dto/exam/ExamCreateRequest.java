package com.intelai.intelcampusbackend.dto.exam;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.enums.exam.ExamType;

public class ExamCreateRequest {

    private String name;
    private Long academicClassSemesterId;
    private LocalDate examDate;
    private Integer passMarks;
    private ExamType examType;

    public String getName() {
        return name;
    }

    public Long getAcademicClassSemesterId() {
        return academicClassSemesterId;
    }

    public LocalDate getExamDate() {
        return examDate;
    }

    public Integer getPassMarks() {
        return passMarks;
    }

    public ExamType getExamType() {
        return examType;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setAcademicClassSemesterId(Long academicClassSemesterId) {
        this.academicClassSemesterId = academicClassSemesterId;
    }

    public void setExamDate(LocalDate examDate) {
        this.examDate = examDate;
    }

    public void setPassMarks(Integer passMarks) {
        this.passMarks = passMarks;
    }

    public void setExamType(ExamType examType) {
        this.examType = examType;
    }
}
