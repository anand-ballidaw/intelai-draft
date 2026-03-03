package com.intelai.intelcampusbackend.dto.attendance;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class ClassAttendanceDashboardResponse {

    private Long classId;
    private long totalStudents;
    private long greenCount;
    private long yellowCount;
    private long redCount;
}
