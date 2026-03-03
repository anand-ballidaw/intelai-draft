package com.intelai.intelcampusbackend.service.attendance;

import java.time.LocalDate;
import java.util.List;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;

public interface AttendanceAuditService {

    List<AttendanceAuditView> getStudentAuditLog(
            Long studentId,
            Long classId,
            LocalDate fromDate,
            LocalDate toDate
    );

    List<AttendanceAuditView> getClassAuditLog(
            Long classId,
            Long subjectId,
            LocalDate fromDate,
            LocalDate toDate
    );
}
