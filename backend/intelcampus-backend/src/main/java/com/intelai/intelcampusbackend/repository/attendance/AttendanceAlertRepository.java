package com.intelai.intelcampusbackend.repository.attendance;

import java.time.LocalDate;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.attendance.AttendanceAlert;
import com.intelai.intelcampusbackend.model.attendance.AttendanceAlertType;

public interface AttendanceAlertRepository
        extends JpaRepository<AttendanceAlert, Long> {

    Optional<AttendanceAlert> findByStudentIdAndAlertDateAndAlertType(
            Long studentId,
            LocalDate alertDate,
            AttendanceAlertType alertType
    );
}
