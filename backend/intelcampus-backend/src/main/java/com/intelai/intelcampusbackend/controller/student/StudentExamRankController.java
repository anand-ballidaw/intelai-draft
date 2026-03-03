package com.intelai.intelcampusbackend.controller.student;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;
import com.intelai.intelcampusbackend.service.exam.ExamRankService;

@RestController
@RequestMapping("/api/student/exams")
public class StudentExamRankController {

    private final ExamRankService examRankService;

    public StudentExamRankController(ExamRankService examRankService) {
        this.examRankService = examRankService;
    }

    /**
     * Student views their OWN rank & result
     * Result must be PUBLISHED
     * Rank must be calculated
     *
     * NOTE:
     * For now, studentId is passed directly.
     * Later this will be derived from JWT / SecurityContext.
     */
    @GetMapping("/{examId}/rank/{studentId}")
    public ResponseEntity<StudentRankItem> getMyRank(
            @PathVariable Long examId,
            @PathVariable Long studentId
    ) {
        StudentRankItem rank =
                examRankService.getStudentRank(examId, studentId);

        return ResponseEntity.ok(rank);
    }
}
