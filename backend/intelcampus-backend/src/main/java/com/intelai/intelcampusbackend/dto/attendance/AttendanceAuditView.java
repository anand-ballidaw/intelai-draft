package com.intelai.intelcampusbackend.dto.attendance;

import java.time.LocalDateTime;

import lombok.AllArgsConstructor;
import lombok.Getter;

@Getter
@AllArgsConstructor
public class AttendanceAuditView {

    private Long attendanceId;
    private Long studentId;
    private String action;              // MARKED_MANUAL, MARKED_AUTO, OVERRIDE, etc.
    private String performedBy;         // STAFF / SYSTEM / ADMIN
    private LocalDateTime performedAt;
    private String remarks;
}
