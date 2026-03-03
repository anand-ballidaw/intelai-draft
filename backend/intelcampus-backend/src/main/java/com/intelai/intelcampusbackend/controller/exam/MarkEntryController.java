package com.intelai.intelcampusbackend.controller.exam;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.exam.ExamMarksEntryRequest;
import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.service.exam.MarkEntryService;

@RestController
@RequestMapping("/api/mark-entry")
public class MarkEntryController {

    private final MarkEntryService markEntryService;

    public MarkEntryController(MarkEntryService markEntryService) {
        this.markEntryService = markEntryService;
    }

    /**
     * ENTER MARKS FOR A STUDENT
     * Creates or updates exam_results row
     */
    @PostMapping("/enter")
    public ResponseEntity<ExamResult> enterMarks(
            @RequestBody ExamMarksEntryRequest request
    ) {
        ExamResult result = markEntryService.enterMarks(request);
        return ResponseEntity.ok(result);
    }

    /**
     * LOCK MARK ENTRY FOR AN EXAM
     */
    @PostMapping("/{examId}/lock")
    public ResponseEntity<?> lockExam(@PathVariable Long examId) {
        markEntryService.lockExam(examId);
        return ResponseEntity.ok("Exam marks locked successfully");
    }
}
