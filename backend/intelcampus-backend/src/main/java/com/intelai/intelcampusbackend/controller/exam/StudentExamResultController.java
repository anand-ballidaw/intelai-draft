package com.intelai.intelcampusbackend.controller.exam;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.service.exam.ExamResultService;

@RestController
@RequestMapping("/api/student/exams")
public class StudentExamResultController {

    private final ExamResultService examResultService;

    public StudentExamResultController(ExamResultService examResultService) {
        this.examResultService = examResultService;
    }

    // ---------------- STUDENT VIEW RESULT ----------------

    @GetMapping("/{examId}/result/{studentId}")
    public ResponseEntity<ExamResult> getPublishedResult(
            @PathVariable Long examId,
            @PathVariable Long studentId
    ) {
        ExamResult result =
                examResultService.getPublishedResultForStudent(examId, studentId);
        return ResponseEntity.ok(result);
    }
}
