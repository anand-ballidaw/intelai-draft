package com.intelai.intelcampusbackend.service.exam;

import java.util.DoubleSummaryStatistics;
import java.util.List;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;

public interface ExamRankAnalyticsService {

    List<StudentRankItem> getToppers(Long examId);

    DoubleSummaryStatistics getScoreStatistics(Long examId);
}
