package com.intelai.intelcampusbackend.service.impl.attendance;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;
import com.intelai.intelcampusbackend.repository.attendance.AttendancePenaltyRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyAuditService;

@Service
public class AttendancePenaltyAuditServiceImpl
        implements AttendancePenaltyAuditService {

    private final AttendancePenaltyRepository repository;

    public AttendancePenaltyAuditServiceImpl(
            AttendancePenaltyRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public List<AttendancePenalty> getPenaltyHistory(
            Long studentId,
            Long academicClassSemesterId
    ) {
        return repository.findByStudentIdAndAcademicClassSemesterId(
                studentId,
                academicClassSemesterId
        );
    }
}
