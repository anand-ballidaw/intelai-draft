package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;
import com.intelai.intelcampusbackend.repository.attendance.AttendancePenaltyRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyService;

@Service
public class AttendancePenaltyServiceImpl implements AttendancePenaltyService {

    private final AttendancePenaltyRepository repository;

    public AttendancePenaltyServiceImpl(
            AttendancePenaltyRepository repository
    ) {
        this.repository = repository;
    }

    @Override
    public AttendancePenalty createPenalty(
            Long studentId,
            Long courseId,
            Long academicClassSemesterId,
            Double attendancePercentage,
            Double requiredPercentage,
            LocalDate periodStart,
            LocalDate periodEnd
    ) {

        AttendancePenalty penalty = new AttendancePenalty();
        penalty.setStudentId(studentId);
        penalty.setCourseId(courseId);
        penalty.setAcademicClassSemesterId(academicClassSemesterId);
        penalty.setAttendancePercentage(attendancePercentage);
        penalty.setRequiredPercentage(requiredPercentage);
        penalty.setPeriodStart(periodStart);
        penalty.setPeriodEnd(periodEnd);
        penalty.setCreatedAt(LocalDate.now());
        penalty.setWaived(false);

        return repository.save(penalty);
    }

    @Override
    public List<AttendancePenalty> getActivePenaltiesForStudent(
            Long studentId,
            Long academicClassSemesterId
    ) {
        return repository
                .findByStudentIdAndAcademicClassSemesterIdAndWaivedFalseAndRevokedFalse(
                        studentId,
                        academicClassSemesterId
                );
    }

    @Override
    public void waivePenalty(
            Long penaltyId,
            String waivedBy,
            String remarks
    ) {
        AttendancePenalty penalty =
                repository.findById(penaltyId).orElseThrow();

        penalty.setWaived(true);
        penalty.setWaivedBy(waivedBy);
        penalty.setWaivedRemarks(remarks);

        repository.save(penalty);
    }
}
