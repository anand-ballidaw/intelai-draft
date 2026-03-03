package com.intelai.intelcampusbackend.controller.exam;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.exam.ExamResultPublishService;

@RestController
@RequestMapping("/api/admin/exams/results")
public class ExamResultPublishController {

    private final ExamResultPublishService publishService;

    public ExamResultPublishController(
            ExamResultPublishService publishService
    ) {
        this.publishService = publishService;
    }

    @PostMapping("/{examId}/publish")
    public void publishResults(@PathVariable Long examId) {
        publishService.publishResults(examId);
    }

    @PostMapping("/{examId}/lock")
    public void lockResults(@PathVariable Long examId) {
        publishService.lockResults(examId);
    }
}
