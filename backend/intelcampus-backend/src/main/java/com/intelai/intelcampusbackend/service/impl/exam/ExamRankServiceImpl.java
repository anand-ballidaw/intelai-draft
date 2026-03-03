package com.intelai.intelcampusbackend.service.impl.exam;

import java.util.List;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;
import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamRankService;

@Service
@Transactional
public class ExamRankServiceImpl implements ExamRankService {

    private final ExamResultRepository examResultRepository;

    public ExamRankServiceImpl(ExamResultRepository examResultRepository) {
        this.examResultRepository = examResultRepository;
    }

    @Override
    @Transactional(readOnly = true)
    public List<StudentRankItem> getExamRanks(Long examId) {

        return examResultRepository
                .findByExamIdOrderByRankPositionAsc(examId)
                .stream()
                .filter(r -> r.getRankPosition() != null)
                .map(r -> new StudentRankItem(
                        r.getStudentId(),
                        r.getMarksObtained(),
                        r.getRankPosition()
                ))
                .toList();
    }

    @Override
    @Transactional(readOnly = true)
    public StudentRankItem getStudentRank(Long examId, Long studentId) {

        return examResultRepository
                .findByExamIdAndStudentId(examId, studentId)
                .filter(r -> r.getRankPosition() != null)
                .map(r -> new StudentRankItem(
                        r.getStudentId(),
                        r.getMarksObtained(),
                        r.getRankPosition()
                ))
                .orElse(null);
    }

    @Override
    public void calculateAndAssignRanks(Long examId) {

        List<ExamResult> results =
                examResultRepository.findByExamIdOrderByRankPositionAsc(examId);

        AtomicInteger rank = new AtomicInteger(1);

        results.stream()
                .sorted((a, b) ->
                        Integer.compare(
                                b.getMarksObtained(),
                                a.getMarksObtained()
                        )
                )
                .forEach(result -> {
                    result.setRankPosition(rank.getAndIncrement());
                    examResultRepository.save(result);
                });
    }
}
