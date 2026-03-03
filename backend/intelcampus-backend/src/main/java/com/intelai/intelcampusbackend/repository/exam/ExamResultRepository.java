package com.intelai.intelcampusbackend.repository.exam;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;

public interface ExamResultRepository
        extends JpaRepository<ExamResult, Long> {

    // 🔹 Base
    List<ExamResult> findByExamId(Long examId);

    // 🔹 Ranking
    List<ExamResult> findByExamIdOrderByRankPositionAsc(Long examId);

    List<ExamResult> findByExamIdAndRankPositionIsNotNull(Long examId);

    // 🔹 Student specific
    Optional<ExamResult> findByExamIdAndStudentId(
            Long examId,
            Long studentId
    );

    Optional<ExamResult> findByExamIdAndStudentIdAndResultStatus(
            Long examId,
            Long studentId,
            ResultStatus resultStatus
    );

    // 🔹 Result filtering
    List<ExamResult> findByExamIdAndResultStatus(
            Long examId,
            ResultStatus resultStatus
    );
}
