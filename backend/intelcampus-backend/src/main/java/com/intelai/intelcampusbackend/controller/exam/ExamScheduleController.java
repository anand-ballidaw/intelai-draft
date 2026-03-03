package com.intelai.intelcampusbackend.controller.exam;

import com.intelai.intelcampusbackend.dto.exam.ExamScheduleRequest;
import com.intelai.intelcampusbackend.dto.exam.ExamScheduleResponse;
import com.intelai.intelcampusbackend.service.exam.ExamScheduleService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/exams/schedule")
public class ExamScheduleController {

    private final ExamScheduleService service;

    public ExamScheduleController(ExamScheduleService service) {
        this.service = service;
    }

    @PostMapping
    public ExamScheduleResponse create(@RequestBody ExamScheduleRequest request) {
        return service.createSchedule(request);
    }

    @GetMapping("/{examId}")
    public List<ExamScheduleResponse> get(@PathVariable Long examId) {
        return service.getSchedule(examId);
    }
}
