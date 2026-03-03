package com.intelai.intelcampusbackend.repository.attendance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.attendance.AttendanceThresholdRule;

public interface AttendanceThresholdRuleRepository
        extends JpaRepository<AttendanceThresholdRule, Long> {
}
