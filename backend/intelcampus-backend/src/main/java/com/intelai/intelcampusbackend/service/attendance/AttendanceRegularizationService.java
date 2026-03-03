package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRegularizationRequest;
import com.intelai.intelcampusbackend.dto.attendance.AttendanceRegularizationReviewRequest;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularization;

public interface AttendanceRegularizationService {

    AttendanceRegularization submitRequest(
            AttendanceRegularizationRequest request
    );

    List<AttendanceRegularization> getPendingRequestsForClassSemester(
            Long academicClassSemesterId
    );

    AttendanceRegularization reviewRequest(
            Long regularizationId,
            AttendanceRegularizationReviewRequest reviewRequest
    );
}
