package com.intelai.intelcampusbackend.service.impl.exam;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.enums.exam.ResultStatus;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamPublishService;

@Service
public class ExamPublishServiceImpl implements ExamPublishService {

    private final ExamResultRepository resultRepository;

    public ExamPublishServiceImpl(ExamResultRepository resultRepository) {
        this.resultRepository = resultRepository;
    }

    @Override
    public void publishExam(Long examId) {
        resultRepository.findByExamId(examId).forEach(result -> {
            result.setResultStatus(ResultStatus.PUBLISHED);
        });
    }
}
