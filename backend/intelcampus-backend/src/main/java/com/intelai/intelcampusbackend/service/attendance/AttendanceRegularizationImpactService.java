package com.intelai.intelcampusbackend.service.attendance;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularization;

public interface AttendanceRegularizationImpactService {

    void applyIfApproved(AttendanceRegularization regularization);
}
