package com.intelai.intelcampusbackend.service.exam;

import java.util.List;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;

public interface ExamResultService {

    // ---------------- ADMIN ----------------

    void lockMarks(Long examId);

    void publishResults(Long examId);

    List<ExamResult> getResultsByExam(Long examId);

    ExamResult getResult(Long examId, Long studentId);

    // ---------------- STUDENT (READ ONLY) ----------------

    ExamResult getPublishedResultForStudent(Long examId, Long studentId);

    List<ExamResult> getPublishedResultsForExam(Long examId);
}
