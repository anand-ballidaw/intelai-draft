package com.intelai.intelcampusbackend.dto.exam;

import java.util.List;
import java.util.Map;

public class RankAnalyticsResponse {

    private Long totalStudents;
    private Long passedCount;
    private Long failedCount;
    private Double passPercentage;
    private List<RankHistogramItem> histogram;
    private Map<Long, Double> percentiles;

    public Long getTotalStudents() {
        return totalStudents;
    }

    public void setTotalStudents(Long totalStudents) {
        this.totalStudents = totalStudents;
    }

    public Long getPassedCount() {
        return passedCount;
    }

    public void setPassedCount(Long passedCount) {
        this.passedCount = passedCount;
    }

    public Long getFailedCount() {
        return failedCount;
    }

    public void setFailedCount(Long failedCount) {
        this.failedCount = failedCount;
    }

    public Double getPassPercentage() {
        return passPercentage;
    }

    public void setPassPercentage(Double passPercentage) {
        this.passPercentage = passPercentage;
    }

    public List<RankHistogramItem> getHistogram() {
        return histogram;
    }

    public void setHistogram(List<RankHistogramItem> histogram) {
        this.histogram = histogram;
    }

    public Map<Long, Double> getPercentiles() {
        return percentiles;
    }

    public void setPercentiles(Map<Long, Double> percentiles) {
        this.percentiles = percentiles;
    }
}
