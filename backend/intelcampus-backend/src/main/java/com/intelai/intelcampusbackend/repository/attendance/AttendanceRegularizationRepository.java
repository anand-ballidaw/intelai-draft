package com.intelai.intelcampusbackend.repository.attendance;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularization;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationStatus;

public interface AttendanceRegularizationRepository
        extends JpaRepository<AttendanceRegularization, Long> {

    /* ============================================================
       STUDENT VIEW
       ============================================================ */

    List<AttendanceRegularization>
    findByStudent_IdAndAcademicClassSemester_Id(
            Long studentId,
            Long academicClassSemesterId
    );

    /* ============================================================
       ADMIN / AUDIT VIEW
       ============================================================ */

    List<AttendanceRegularization>
    findByAcademicClassSemester_IdAndStatus(
            Long academicClassSemesterId,
            AttendanceRegularizationStatus status
    );
}
