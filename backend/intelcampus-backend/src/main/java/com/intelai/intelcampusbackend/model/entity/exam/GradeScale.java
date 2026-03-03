package com.intelai.intelcampusbackend.model.entity.exam;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "grade_scales")
public class GradeScale {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    private Integer minMarks;

    private Integer maxMarks;

    private String grade;

    public Long getId() {
        return id;
    }

    public Integer getMinMarks() {
        return minMarks;
    }

    public Integer getMaxMarks() {
        return maxMarks;
    }

    public String getGrade() {
        return grade;
    }

    public void setMinMarks(Integer minMarks) {
        this.minMarks = minMarks;
    }

    public void setMaxMarks(Integer maxMarks) {
        this.maxMarks = maxMarks;
    }

    public void setGrade(String grade) {
        this.grade = grade;
    }
}
