package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendanceColorStatus;
import com.intelai.intelcampusbackend.model.attendance.AttendanceThresholdRule;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceThresholdRuleRepository;
import com.intelai.intelcampusbackend.service.AttendanceRuleEvaluationService;

@Service
public class AttendanceRuleEvaluationServiceImpl implements AttendanceRuleEvaluationService {

    private final AttendanceThresholdRuleRepository ruleRepository;

    public AttendanceRuleEvaluationServiceImpl(
            AttendanceThresholdRuleRepository ruleRepository) {
        this.ruleRepository = ruleRepository;
    }

    private AttendanceThresholdRule getRule() {
        return ruleRepository.findAll()
                .stream()
                .findFirst()
                .orElseThrow(() ->
                        new IllegalStateException("Attendance threshold rule not configured"));
    }

    @Override
    public AttendanceColorStatus evaluateColor(Double percentage) {

        AttendanceThresholdRule rule = getRule();

        if (percentage >= rule.getGreenMinPercentage()) {
            return AttendanceColorStatus.GREEN;
        }

        if (percentage >= rule.getYellowMinPercentage()) {
            return AttendanceColorStatus.YELLOW;
        }

        return AttendanceColorStatus.RED;
    }

    @Override
    public boolean shouldTriggerPenalty(Double percentage) {

        AttendanceThresholdRule rule = getRule();

        return rule.getPenaltyEnabled()
                && percentage < rule.getRedBelowPercentage();
    }
}
