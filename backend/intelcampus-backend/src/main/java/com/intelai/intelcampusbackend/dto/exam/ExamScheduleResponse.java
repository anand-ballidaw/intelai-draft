package com.intelai.intelcampusbackend.dto.exam;

import java.time.LocalDateTime;

public class ExamScheduleResponse {

    private Long id;
    private Long examId;
    private LocalDateTime startTime;
    private LocalDateTime endTime;
    private String venue;

    public ExamScheduleResponse(
            Long id,
            Long examId,
            LocalDateTime startTime,
            LocalDateTime endTime,
            String venue
    ) {
        this.id = id;
        this.examId = examId;
        this.startTime = startTime;
        this.endTime = endTime;
        this.venue = venue;
    }

    public Long getId() {
        return id;
    }

    public Long getExamId() {
        return examId;
    }

    public LocalDateTime getStartTime() {
        return startTime;
    }

    public LocalDateTime getEndTime() {
        return endTime;
    }

    public String getVenue() {
        return venue;
    }
}
