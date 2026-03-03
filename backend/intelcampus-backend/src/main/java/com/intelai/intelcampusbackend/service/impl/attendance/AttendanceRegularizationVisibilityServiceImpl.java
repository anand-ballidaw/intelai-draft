package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularization;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRegularizationRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRegularizationVisibilityService;

@Service
public class AttendanceRegularizationVisibilityServiceImpl
        implements AttendanceRegularizationVisibilityService {

    private final AttendanceRegularizationRepository repository;

    public AttendanceRegularizationVisibilityServiceImpl(
            AttendanceRegularizationRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public AttendanceRegularizationVisibility getVisibility(
            Long studentId,
            Long courseId,   // intentionally ignored (semester-scoped)
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<AttendanceRegularization> records =
                repository.findByStudent_IdAndAcademicClassSemester_Id(
                        studentId,
                        courseId // courseId is used as semesterId in current API
                );

        if (records.isEmpty()) {
            return AttendanceRegularizationVisibility.ELIGIBLE;
        }

        AttendanceRegularization latest =
                records.stream()
                       .max((a, b) -> a.getRequestedAt()
                                       .compareTo(b.getRequestedAt()))
                       .orElse(null);

        if (latest == null) {
            return AttendanceRegularizationVisibility.ELIGIBLE;
        }

        AttendanceRegularizationStatus status = latest.getStatus();

        return switch (status) {
            case APPROVED, REJECTED -> AttendanceRegularizationVisibility.NOT_ELIGIBLE;
            case PENDING -> AttendanceRegularizationVisibility.NOT_ELIGIBLE;
        };
    }
}
