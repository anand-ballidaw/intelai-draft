package com.intelai.intelcampusbackend.dto.exam;

public class ExamAnalyticsResponse {

    private Long examId;
    private Long totalStudents;
    private Long passedCount;
    private Long failedCount;
    private Double averageMarks;

    public ExamAnalyticsResponse() {
    }

    public ExamAnalyticsResponse(
            Long examId,
            Long totalStudents,
            Long passedCount,
            Long failedCount,
            Double averageMarks
    ) {
        this.examId = examId;
        this.totalStudents = totalStudents;
        this.passedCount = passedCount;
        this.failedCount = failedCount;
        this.averageMarks = averageMarks;
    }

    public Long getExamId() {
        return examId;
    }

    public Long getTotalStudents() {
        return totalStudents;
    }

    public Long getPassedCount() {
        return passedCount;
    }

    public Long getFailedCount() {
        return failedCount;
    }

    public Double getAverageMarks() {
        return averageMarks;
    }
}
