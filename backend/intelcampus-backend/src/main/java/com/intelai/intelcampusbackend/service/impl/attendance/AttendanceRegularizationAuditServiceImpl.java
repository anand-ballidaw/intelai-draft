package com.intelai.intelcampusbackend.service.impl.attendance;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceRegularizationAuditView;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularization;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRegularizationRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRegularizationAuditService;

@Service
public class AttendanceRegularizationAuditServiceImpl
        implements AttendanceRegularizationAuditService {

    private final AttendanceRegularizationRepository repository;

    public AttendanceRegularizationAuditServiceImpl(
            AttendanceRegularizationRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public List<AttendanceRegularizationAuditView> getStudentRegularizations(
            Long studentId,
            Long academicClassSemesterId
    ) {
        return repository
                .findByStudent_IdAndAcademicClassSemester_Id(
                        studentId,
                        academicClassSemesterId
                )
                .stream()
                .map(this::toAuditView)
                .collect(Collectors.toList());
    }

    @Override
    public List<AttendanceRegularizationAuditView> getRegularizationsByStatus(
            Long academicClassSemesterId,
            AttendanceRegularizationStatus status
    ) {
        return repository
                .findByAcademicClassSemester_IdAndStatus(
                        academicClassSemesterId,
                        status
                )
                .stream()
                .map(this::toAuditView)
                .collect(Collectors.toList());
    }

    private AttendanceRegularizationAuditView toAuditView(
            AttendanceRegularization ar
    ) {
        return new AttendanceRegularizationAuditView(
                ar.getId(),
                ar.getStudent().getId(),
                ar.getAcademicClassSemester().getId(),
                ar.getAttendanceDate(),
                ar.getReason(),
                ar.getStatus(),
                ar.getRequestedAt(),
                ar.getReviewedAt(),
                ar.getReviewerRemarks()
        );
    }
}
