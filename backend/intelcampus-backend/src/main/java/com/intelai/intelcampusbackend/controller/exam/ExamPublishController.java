package com.intelai.intelcampusbackend.controller.exam;

import com.intelai.intelcampusbackend.service.exam.ExamPublishService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/exams")
@RequiredArgsConstructor
public class ExamPublishController {

    private final ExamPublishService examPublishService;

    @PostMapping("/{examId}/publish")
    public ResponseEntity<Void> publishExam(@PathVariable Long examId) {
        examPublishService.publishExam(examId);
        return ResponseEntity.ok().build();
    }
}
