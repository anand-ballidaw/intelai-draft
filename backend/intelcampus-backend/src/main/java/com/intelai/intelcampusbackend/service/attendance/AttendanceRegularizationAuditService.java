package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRegularizationAuditView;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;

public interface AttendanceRegularizationAuditService {

    List<AttendanceRegularizationAuditView> getStudentRegularizations(
            Long studentId,
            Long academicClassSemesterId
    );

    List<AttendanceRegularizationAuditView> getRegularizationsByStatus(
            Long academicClassSemesterId,
            AttendanceRegularizationStatus status
    );
}
