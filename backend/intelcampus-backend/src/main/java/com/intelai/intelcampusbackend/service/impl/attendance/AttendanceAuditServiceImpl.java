package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.stream.Collectors;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;
import com.intelai.intelcampusbackend.entity.attendance.AttendanceAudit;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceAuditRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditService;

@Service
public class AttendanceAuditServiceImpl implements AttendanceAuditService {

    private final AttendanceAuditRepository repository;

    public AttendanceAuditServiceImpl(AttendanceAuditRepository repository) {
        this.repository = repository;
    }

    @Override
    public List<AttendanceAuditView> getStudentAuditLog(
            Long studentId,
            Long classId,
            LocalDate fromDate,
            LocalDate toDate
    ) {
        LocalDateTime fromDateTime = fromDate.atStartOfDay();
        LocalDateTime toDateTime = toDate.atTime(LocalTime.MAX);

        List<AttendanceAudit> audits =
                repository.findStudentAuditBetweenDates(
                        studentId,
                        classId,
                        fromDateTime,
                        toDateTime
                );

        return audits.stream()
                .map(this::toView)
                .collect(Collectors.toList());
    }

    @Override
    public List<AttendanceAuditView> getClassAuditLog(
            Long classId,
            Long subjectId,
            LocalDate fromDate,
            LocalDate toDate
    ) {
        LocalDateTime fromDateTime = fromDate.atStartOfDay();
        LocalDateTime toDateTime = toDate.atTime(LocalTime.MAX);

        List<AttendanceAudit> audits =
                repository.findClassAuditBetweenDates(
                        classId,
                        subjectId,
                        fromDateTime,
                        toDateTime
                );

        return audits.stream()
                .map(this::toView)
                .collect(Collectors.toList());
    }

    private AttendanceAuditView toView(AttendanceAudit audit) {
        return new AttendanceAuditView(
                audit.getId(),
                audit.getStudentId(),
                audit.getClassId(),
                audit.getSubjectId(),
                audit.getInvoiceId(),
                audit.getStatus(),
                audit.getReason(),
                audit.getCreatedAt()
        );
    }
}
