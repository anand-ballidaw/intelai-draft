package com.intelai.intelcampusbackend.service.impl.attendance;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRule;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRuleType;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRuleRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRuleService;

@Service
@Transactional(readOnly = true)
public class AttendanceRuleServiceImpl implements AttendanceRuleService {

    private final AttendanceRuleRepository attendanceRuleRepository;

    public AttendanceRuleServiceImpl(AttendanceRuleRepository attendanceRuleRepository) {
        this.attendanceRuleRepository = attendanceRuleRepository;
    }

    @Override
    public AttendanceRule getActiveRule(
            Long academicClassSemesterId,
            AttendanceRuleType ruleType
    ) {
        return attendanceRuleRepository
                .findByAcademicClassSemester_IdAndRuleTypeAndActiveTrue(
                        academicClassSemesterId,
                        ruleType
                )
                .orElse(null);
    }

    @Override
    public List<AttendanceRule> getAllActiveRules(Long academicClassSemesterId) {
        return attendanceRuleRepository
                .findByAcademicClassSemester_IdAndActiveTrue(
                        academicClassSemesterId
                );
    }
}
