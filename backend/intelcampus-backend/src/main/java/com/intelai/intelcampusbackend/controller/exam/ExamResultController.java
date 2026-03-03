package com.intelai.intelcampusbackend.controller.exam;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.service.exam.ExamResultService;

@RestController
@RequestMapping("/api/exam-results")
public class ExamResultController {

    private final ExamResultService examResultService;

    public ExamResultController(ExamResultService examResultService) {
        this.examResultService = examResultService;
    }

    // 🎓 STUDENT – VIEW PUBLISHED RESULTS
    @GetMapping("/{examId}")
    public List<ExamResult> getPublishedResults(@PathVariable Long examId) {
        return examResultService.getPublishedResultsForExam(examId);
    }
}
