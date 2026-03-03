package com.intelai.intelcampusbackend.controller.exam;

import java.util.DoubleSummaryStatistics;
import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;
import com.intelai.intelcampusbackend.service.exam.ExamRankAnalyticsService;

@RestController
@RequestMapping("/api/exams")
public class ExamRankAnalyticsController {

    private final ExamRankAnalyticsService analyticsService;

    public ExamRankAnalyticsController(
            ExamRankAnalyticsService analyticsService
    ) {
        this.analyticsService = analyticsService;
    }

    @GetMapping("/{examId}/rank/toppers")
    public List<StudentRankItem> getToppers(
            @PathVariable Long examId
    ) {
        return analyticsService.getToppers(examId);
    }

    @GetMapping("/{examId}/rank/statistics")
    public DoubleSummaryStatistics getStatistics(
            @PathVariable Long examId
    ) {
        return analyticsService.getScoreStatistics(examId);
    }
}
