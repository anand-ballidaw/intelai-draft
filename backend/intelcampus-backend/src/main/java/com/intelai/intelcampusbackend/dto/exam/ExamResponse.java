package com.intelai.intelcampusbackend.dto.exam;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.enums.exam.ExamStatus;
import com.intelai.intelcampusbackend.model.enums.exam.ExamType;

public class ExamResponse {

    private final Long id;
    private final String name;
    private final Long classId;
    private final LocalDate examDate;
    private final Integer totalMarks;
    private final ExamType examType;
    private final ExamStatus status;

    public ExamResponse(Long id,
                        String name,
                        Long classId,
                        LocalDate examDate,
                        Integer totalMarks,
                        ExamType examType,
                        ExamStatus status) {
        this.id = id;
        this.name = name;
        this.classId = classId;
        this.examDate = examDate;
        this.totalMarks = totalMarks;
        this.examType = examType;
        this.status = status;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public Long getClassId() {
        return classId;
    }

    public LocalDate getExamDate() {
        return examDate;
    }

    public Integer getTotalMarks() {
        return totalMarks;
    }

    public ExamType getExamType() {
        return examType;
    }

    public ExamStatus getStatus() {
        return status;
    }
}
