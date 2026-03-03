package com.intelai.intelcampusbackend.dto.exam;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class ClassExamSummaryResponse {

    private Long examId;
    private long totalStudents;
    private long appearedStudents;
    private long passedStudents;
    private double passPercentage;
}
