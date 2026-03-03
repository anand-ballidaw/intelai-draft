package com.intelai.intelcampusbackend.service.impl.exam;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.dto.exam.ExamMarksEntryRequest;
import com.intelai.intelcampusbackend.model.entity.exam.Exam;
import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;
import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;
import com.intelai.intelcampusbackend.repository.exam.ExamRepository;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.MarkEntryService;

@Service
@Transactional
public class MarkEntryServiceImpl implements MarkEntryService {

    private final ExamRepository examRepository;
    private final ExamResultRepository examResultRepository;

    public MarkEntryServiceImpl(
            ExamRepository examRepository,
            ExamResultRepository examResultRepository
    ) {
        this.examRepository = examRepository;
        this.examResultRepository = examResultRepository;
    }

    // ---------------- TEACHER MARK ENTRY ----------------

    @Override
    public ExamResult enterMarks(ExamMarksEntryRequest request) {

        Exam exam = examRepository.findById(request.getExamId())
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        boolean passed = request.getMarksObtained() >= exam.getPassMarks();

        ExamResult result = new ExamResult();
        result.setExam(exam);
        result.setStudentId(request.getStudentId());
        result.setMarksObtained(request.getMarksObtained());
        result.setPassed(passed);

        result.setMarkStatus(MarkStatus.ENTERED);
        result.setResultStatus(ResultStatus.DRAFT);

        return examResultRepository.save(result);
    }

    // ---------------- ADMIN LOCK ----------------

    @Override
    public void lockExam(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult r : results) {
            r.setMarkStatus(MarkStatus.LOCKED);
        }

        examResultRepository.saveAll(results);
    }
}
