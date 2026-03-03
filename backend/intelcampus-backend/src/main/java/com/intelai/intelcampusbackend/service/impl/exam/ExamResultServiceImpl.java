package com.intelai.intelcampusbackend.service.impl.exam;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;
import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamResultService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamResultServiceImpl implements ExamResultService {

    private final ExamResultRepository examResultRepository;

    public ExamResultServiceImpl(ExamResultRepository examResultRepository) {
        this.examResultRepository = examResultRepository;
    }

    // ---------------- ADMIN ----------------

    @Override
    public void lockMarks(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult result : results) {
            result.setMarkStatus(MarkStatus.LOCKED);
        }

        examResultRepository.saveAll(results);
    }

    @Override
    public void publishResults(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult result : results) {
            result.setResultStatus(ResultStatus.PUBLISHED);
        }

        examResultRepository.saveAll(results);
    }

    @Override
    public List<ExamResult> getResultsByExam(Long examId) {
        return examResultRepository.findByExamId(examId);
    }

    @Override
    public ExamResult getResult(Long examId, Long studentId) {
        return examResultRepository
                .findByExamIdAndStudentId(examId, studentId)
                .orElseThrow(() -> new RuntimeException("Result not found"));
    }

    // ---------------- STUDENT ----------------

    @Override
    public ExamResult getPublishedResultForStudent(Long examId, Long studentId) {
        return examResultRepository
                .findByExamIdAndStudentIdAndResultStatus(
                        examId,
                        studentId,
                        ResultStatus.PUBLISHED
                )
                .orElseThrow(() -> new RuntimeException("Published result not found"));
    }

    @Override
    public List<ExamResult> getPublishedResultsForExam(Long examId) {
        return examResultRepository.findByExamIdAndResultStatus(
                examId,
                ResultStatus.PUBLISHED
        );
    }
}
