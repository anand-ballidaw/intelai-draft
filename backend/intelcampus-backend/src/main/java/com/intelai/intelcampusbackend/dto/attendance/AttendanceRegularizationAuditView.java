package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@AllArgsConstructor
@NoArgsConstructor
public class AttendanceRegularizationAuditView {

    private Long regularizationId;

    private Long studentId;

    private Long academicClassSemesterId;

    private LocalDate attendanceDate;

    private String reason;

    private AttendanceRegularizationStatus status;

    private LocalDateTime requestedAt;

    private LocalDateTime reviewedAt;

    private String reviewerRemarks;
}
