package com.intelai.intelcampusbackend.service.impl.exam;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.service.exam.ExamResultPublishService;

@Service
public class ExamResultPublishServiceImpl implements ExamResultPublishService {

    @Override
    public void publishResults(Long examId) {
        // TODO: publish logic will be added later
    }

    @Override
    public void lockResults(Long examId) {
        // TODO: lock logic will be added later
    }
}
