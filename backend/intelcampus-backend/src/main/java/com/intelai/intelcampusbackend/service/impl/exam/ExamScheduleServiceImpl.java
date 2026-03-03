package com.intelai.intelcampusbackend.service.impl.exam;

import com.intelai.intelcampusbackend.dto.exam.ExamScheduleRequest;
import com.intelai.intelcampusbackend.dto.exam.ExamScheduleResponse;
import com.intelai.intelcampusbackend.model.entity.exam.Exam;
import com.intelai.intelcampusbackend.model.entity.exam.ExamSchedule;
import com.intelai.intelcampusbackend.repository.exam.ExamRepository;
import com.intelai.intelcampusbackend.repository.exam.ExamScheduleRepository;
import com.intelai.intelcampusbackend.service.exam.ExamScheduleService;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ExamScheduleServiceImpl implements ExamScheduleService {

    private final ExamScheduleRepository scheduleRepository;
    private final ExamRepository examRepository;

    public ExamScheduleServiceImpl(
            ExamScheduleRepository scheduleRepository,
            ExamRepository examRepository
    ) {
        this.scheduleRepository = scheduleRepository;
        this.examRepository = examRepository;
    }

    @Override
    public ExamScheduleResponse createSchedule(ExamScheduleRequest request) {

        Exam exam = examRepository.findById(request.getExamId())
                .orElseThrow(() -> new RuntimeException("Exam not found"));

        ExamSchedule schedule = new ExamSchedule();
        schedule.setExam(exam);
        schedule.setStartTime(request.getStartTime());
        schedule.setEndTime(request.getEndTime());
        schedule.setVenue(request.getVenue());

        ExamSchedule saved = scheduleRepository.save(schedule);

        return new ExamScheduleResponse(
                saved.getId(),
                exam.getId(),
                saved.getStartTime(),
                saved.getEndTime(),
                saved.getVenue()
        );
    }

    @Override
    public List<ExamScheduleResponse> getSchedule(Long examId) {
        return scheduleRepository.findByExamId(examId)
                .stream()
                .map(s -> new ExamScheduleResponse(
                        s.getId(),
                        s.getExam().getId(),
                        s.getStartTime(),
                        s.getEndTime(),
                        s.getVenue()
                ))
                .toList();
    }
}
