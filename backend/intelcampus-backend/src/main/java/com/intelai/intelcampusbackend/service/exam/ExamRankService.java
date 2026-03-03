package com.intelai.intelcampusbackend.service.exam;

import java.util.List;

import com.intelai.intelcampusbackend.dto.exam.StudentRankItem;

public interface ExamRankService {

    List<StudentRankItem> getExamRanks(Long examId);

    StudentRankItem getStudentRank(Long examId, Long studentId);

    void calculateAndAssignRanks(Long examId);
}
