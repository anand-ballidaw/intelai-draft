package com.intelai.intelcampusbackend.service.attendance;

import java.util.List;

import com.intelai.intelcampusbackend.model.attendance.AttendanceRule;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRuleType;

public interface AttendanceRuleService {

    /**
     * Fetch the active rule for a given class semester and rule type.
     *
     * @param academicClassSemesterId academic class semester identifier
     * @param ruleType attendance rule type
     * @return active AttendanceRule or null if none exists
     */
    AttendanceRule getActiveRule(
            Long academicClassSemesterId,
            AttendanceRuleType ruleType
    );

    /**
     * Fetch all active attendance rules for a given class semester.
     *
     * @param academicClassSemesterId academic class semester identifier
     * @return list of active AttendanceRule entities
     */
    List<AttendanceRule> getAllActiveRules(Long academicClassSemesterId);
}
