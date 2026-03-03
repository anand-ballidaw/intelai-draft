package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AttendanceRecordView {

    private Long studentId;
    private LocalDate date;
    private String status;
}
