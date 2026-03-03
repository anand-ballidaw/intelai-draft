package com.intelai.intelcampusbackend.util.exam;

import java.util.List;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;

public final class ExamRankLockValidator {

    private ExamRankLockValidator() {}

    public static void ensureNotRanked(List<ExamResult> results) {
        boolean locked = results.stream()
                .anyMatch(r -> r.getRankPosition() != null);

        if (locked) {
            throw new IllegalStateException(
                    "Operation forbidden: Exam ranks are already published and locked"
            );
        }
    }
}
