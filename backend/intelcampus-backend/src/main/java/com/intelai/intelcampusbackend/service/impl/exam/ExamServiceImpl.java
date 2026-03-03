package com.intelai.intelcampusbackend.service.impl.exam;

import com.intelai.intelcampusbackend.dto.exam.ExamRequest;
import com.intelai.intelcampusbackend.dto.exam.ExamResponse;
import com.intelai.intelcampusbackend.model.entity.exam.Exam;
import com.intelai.intelcampusbackend.repository.exam.ExamRepository;
import com.intelai.intelcampusbackend.service.exam.ExamService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamServiceImpl implements ExamService {

    private final ExamRepository examRepository;

    public ExamServiceImpl(ExamRepository examRepository) {
        this.examRepository = examRepository;
    }

    @Override
    public ExamResponse createExam(ExamRequest request) {

        Exam exam = new Exam();
        exam.setName(request.getName());
        exam.setClassId(request.getClassId());
        exam.setExamDate(request.getExamDate());
        exam.setTotalMarks(request.getTotalMarks());
        exam.setPassMarks(request.getPassMarks());
        exam.setExamType(request.getExamType());

        Exam saved = examRepository.save(exam);
        return map(saved);
    }

    @Override
    public ExamResponse getExamById(Long examId) {
        return map(
                examRepository.findById(examId)
                        .orElseThrow(() -> new RuntimeException("Exam not found"))
        );
    }

    @Override
    public List<ExamResponse> getExamsByClass(Long classId) {
        return examRepository.findByClassId(classId)
                .stream()
                .map(this::map)
                .toList();
    }

    @Override
    public void publishExam(Long examId) {
        examRepository.findById(examId)
                .orElseThrow(() -> new RuntimeException("Exam not found"));
        // publishing handled via result services
    }

    @Override
    public void closeExam(Long examId) {
        examRepository.findById(examId)
                .orElseThrow(() -> new RuntimeException("Exam not found"));
    }

    private ExamResponse map(Exam e) {
        return new ExamResponse(
                e.getId(),
                e.getName(),
                e.getClassId(),
                e.getExamDate(),
                e.getTotalMarks(),
                e.getExamType(),
                null
        );
    }
}
