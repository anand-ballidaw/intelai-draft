package com.intelai.intelcampusbackend.model.entity.exam;

import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;
import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.EnumType;
import jakarta.persistence.Enumerated;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.Table;

@Entity
@Table(name = "exam_results")
public class ExamResult {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    // ---------------- RELATIONS ----------------

    @ManyToOne(optional = false)
    @JoinColumn(name = "exam_id")
    private Exam exam;

    @Column(name = "student_id", nullable = false)
    private Long studentId;

    // ---------------- MARK DATA ----------------

    @Column(name = "marks_obtained", nullable = false)
    private Integer marksObtained;

    @Column(nullable = false)
    private Boolean passed;

    @Column(name = "rank_position")
    private Integer rankPosition;

    // ---------------- STATUS ----------------

    @Enumerated(EnumType.STRING)
    @Column(name = "mark_status", nullable = false)
    private MarkStatus markStatus;

    @Enumerated(EnumType.STRING)
    @Column(name = "result_status", nullable = false)
    private ResultStatus resultStatus;

    // ---------------- GETTERS / SETTERS ----------------

    public Long getId() {
        return id;
    }

    public Exam getExam() {
        return exam;
    }

    public void setExam(Exam exam) {
        this.exam = exam;
    }

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public Integer getMarksObtained() {
        return marksObtained;
    }

    public void setMarksObtained(Integer marksObtained) {
        this.marksObtained = marksObtained;
    }

    public Boolean getPassed() {
        return passed;
    }

    public void setPassed(Boolean passed) {
        this.passed = passed;
    }

    public Integer getRankPosition() {
        return rankPosition;
    }

    public void setRankPosition(Integer rankPosition) {
        this.rankPosition = rankPosition;
    }

    public MarkStatus getMarkStatus() {
        return markStatus;
    }

    public void setMarkStatus(MarkStatus markStatus) {
        this.markStatus = markStatus;
    }

    public ResultStatus getResultStatus() {
        return resultStatus;
    }

    public void setResultStatus(ResultStatus resultStatus) {
        this.resultStatus = resultStatus;
    }
}
