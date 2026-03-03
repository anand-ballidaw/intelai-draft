package com.intelai.intelcampusbackend.service.impl.exam;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.entity.exam.ExamRevaluationRequest;
import com.intelai.intelcampusbackend.model.enums.exam.RevaluationStatus;
import com.intelai.intelcampusbackend.repository.exam.ExamRevaluationRepository;
import com.intelai.intelcampusbackend.service.exam.ExamRevaluationService;

@Service
public class ExamRevaluationServiceImpl implements ExamRevaluationService {

    private final ExamRevaluationRepository repository;

    public ExamRevaluationServiceImpl(ExamRevaluationRepository repository) {
        this.repository = repository;
    }

    @Override
    public ExamRevaluationRequest requestRevaluation(
            Long studentId,
            Long examResultId,
            String reason
    ) {
        ExamRevaluationRequest req = new ExamRevaluationRequest();
        req.setStudentId(studentId);
        req.setReason(reason);
        req.setStatus(RevaluationStatus.REQUESTED);
        req.setRequestedAt(LocalDateTime.now());

        return repository.save(req);
    }

    @Override
    public ExamRevaluationRequest approveRevaluation(
            Long requestId,
            Integer revisedMarks,
            String reviewedBy
    ) {
        ExamRevaluationRequest req = repository.findById(requestId)
                .orElseThrow(() -> new RuntimeException("Revaluation request not found"));

        req.setRevisedMarks(revisedMarks);
        req.setReviewedBy(reviewedBy);
        req.setReviewedAt(LocalDateTime.now());
        req.setStatus(RevaluationStatus.APPROVED);

        return repository.save(req);
    }

    @Override
    public List<ExamRevaluationRequest> getStudentRequests(Long studentId) {
        return repository.findByStudentId(studentId);
    }
}
