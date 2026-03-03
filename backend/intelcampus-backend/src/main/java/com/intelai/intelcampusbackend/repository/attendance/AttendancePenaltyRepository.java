package com.intelai.intelcampusbackend.repository.attendance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;

public interface AttendancePenaltyRepository
        extends JpaRepository<AttendancePenalty, Long> {

    List<AttendancePenalty>
    findByStudentIdAndAcademicClassSemesterIdAndWaivedFalseAndRevokedFalse(
            Long studentId,
            Long academicClassSemesterId
    );

    /* =========================
       AUDIT / HISTORY (READ-ONLY)
       ========================= */

    List<AttendancePenalty>
    findByStudentIdAndAcademicClassSemesterId(
            Long studentId,
            Long academicClassSemesterId
    );
}
