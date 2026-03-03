package com.intelai.intelcampusbackend.controller.exam;

import com.intelai.intelcampusbackend.model.entity.exam.ExamRevaluationRequest;
import com.intelai.intelcampusbackend.service.exam.ExamRevaluationService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams/revaluation")
public class ExamRevaluationController {

    private final ExamRevaluationService service;

    public ExamRevaluationController(ExamRevaluationService service) {
        this.service = service;
    }

    @PostMapping("/request")
    public ExamRevaluationRequest request(
            @RequestParam Long studentId,
            @RequestParam Long examResultId,
            @RequestParam String reason
    ) {
        return service.requestRevaluation(studentId, examResultId, reason);
    }

    @GetMapping("/student/{studentId}")
    public List<ExamRevaluationRequest> studentRequests(@PathVariable Long studentId) {
        return service.getStudentRequests(studentId);
    }
}
