package com.intelai.intelcampusbackend.service.impl.exam;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.model.enums.exam.MarkStatus;
import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamResultAdminService;

@Service
public class ExamResultAdminServiceImpl implements ExamResultAdminService {

    private final ExamResultRepository examResultRepository;

    public ExamResultAdminServiceImpl(ExamResultRepository examResultRepository) {
        this.examResultRepository = examResultRepository;
    }

    // ---------------- LOCK MARKS ----------------

    @Override
    public void lockExam(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult result : results) {
            result.setMarkStatus(MarkStatus.LOCKED);
        }

        examResultRepository.saveAll(results);
    }

    // ---------------- UNLOCK MARKS ----------------

    @Override
    public void unlockExam(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult result : results) {
            result.setMarkStatus(MarkStatus.ENTERED);
        }

        examResultRepository.saveAll(results);
    }

    // ---------------- PUBLISH RESULTS ----------------

    @Override
    public void publishExam(Long examId) {
        List<ExamResult> results = examResultRepository.findByExamId(examId);

        for (ExamResult result : results) {
            result.setResultStatus(ResultStatus.PUBLISHED);
        }

        examResultRepository.saveAll(results);
    }
}
