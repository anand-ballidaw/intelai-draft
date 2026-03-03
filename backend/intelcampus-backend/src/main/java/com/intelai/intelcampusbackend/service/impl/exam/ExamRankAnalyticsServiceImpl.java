package com.intelai.intelcampusbackend.service.impl.exam;

import java.util.DoubleSummaryStatistics;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;
import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamRankAnalyticsService;

@Service
@Transactional(readOnly = true)
public class ExamRankAnalyticsServiceImpl
        implements ExamRankAnalyticsService {

    private final ExamResultRepository examResultRepository;

    public ExamRankAnalyticsServiceImpl(
            ExamResultRepository examResultRepository
    ) {
        this.examResultRepository = examResultRepository;
    }

    @Override
    public List<StudentRankItem> getToppers(Long examId) {
        return examResultRepository
                .findByExamIdOrderByRankPositionAsc(examId)
                .stream()
                .filter(r -> r.getRankPosition() != null)
                .limit(3)
                .map(r -> new StudentRankItem(
                        r.getStudentId(),
                        r.getMarksObtained(),
                        r.getRankPosition()
                ))
                .toList();
    }

    @Override
    public DoubleSummaryStatistics getScoreStatistics(Long examId) {
        return examResultRepository
                .findByExamId(examId)
                .stream()
                .mapToDouble(ExamResult::getMarksObtained)
                .summaryStatistics();
    }
}
