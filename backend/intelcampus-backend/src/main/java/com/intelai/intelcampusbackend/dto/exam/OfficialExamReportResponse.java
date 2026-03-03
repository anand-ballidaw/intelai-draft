package com.intelai.intelcampusbackend.dto.exam;

public class OfficialExamReportResponse {

    private Long examId;
    private long totalStudents;
    private long passed;
    private long failed;
    private double passPercentage;

    public OfficialExamReportResponse(
            Long examId,
            long totalStudents,
            long passed,
            long failed,
            double passPercentage
    ) {
        this.examId = examId;
        this.totalStudents = totalStudents;
        this.passed = passed;
        this.failed = failed;
        this.passPercentage = passPercentage;
    }

    public Long getExamId() {
        return examId;
    }

    public long getTotalStudents() {
        return totalStudents;
    }

    public long getPassed() {
        return passed;
    }

    public long getFailed() {
        return failed;
    }

    public double getPassPercentage() {
        return passPercentage;
    }
}
