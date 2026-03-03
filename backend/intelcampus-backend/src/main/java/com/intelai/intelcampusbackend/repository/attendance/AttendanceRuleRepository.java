package com.intelai.intelcampusbackend.repository.attendance;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRule;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRuleType;

public interface AttendanceRuleRepository extends JpaRepository<AttendanceRule, Long> {

    Optional<AttendanceRule> findByAcademicClassSemester_IdAndRuleTypeAndActiveTrue(
            Long academicClassSemesterId,
            AttendanceRuleType ruleType
    );

    List<AttendanceRule> findByAcademicClassSemester_IdAndActiveTrue(
            Long academicClassSemesterId
    );
}
