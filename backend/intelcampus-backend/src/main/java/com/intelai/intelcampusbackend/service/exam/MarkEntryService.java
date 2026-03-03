package com.intelai.intelcampusbackend.service.exam;

import com.intelai.intelcampusbackend.dto.exam.ExamMarksEntryRequest;
import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;

public interface MarkEntryService {

    // Teacher enters marks
    ExamResult enterMarks(ExamMarksEntryRequest request);

    // Admin locks exam marks
    void lockExam(Long examId);
}
