package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDate;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceAnalyticsResponse;
import com.intelai.intelcampusbackend.dto.attendance.AttendanceDashboardResponse;
import com.intelai.intelcampusbackend.model.attendance.AttendanceGraceVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendancePenaltyVisibility;
import com.intelai.intelcampusbackend.model.attendance.AttendanceRegularizationVisibility;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAnalyticsService;
import com.intelai.intelcampusbackend.service.attendance.AttendanceDashboardService;
import com.intelai.intelcampusbackend.service.attendance.AttendanceGraceVisibilityService;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyVisibilityService;
import com.intelai.intelcampusbackend.service.attendance.AttendanceRegularizationVisibilityService;

@Service
public class AttendanceDashboardServiceImpl
        implements AttendanceDashboardService {

    private final AttendanceAnalyticsService analyticsService;
    private final AttendanceRegularizationVisibilityService regularizationService;
    private final AttendanceGraceVisibilityService graceVisibilityService;
    private final AttendancePenaltyVisibilityService penaltyVisibilityService;

    public AttendanceDashboardServiceImpl(
            AttendanceAnalyticsService analyticsService,
            AttendanceRegularizationVisibilityService regularizationService,
            AttendanceGraceVisibilityService graceVisibilityService,
            AttendancePenaltyVisibilityService penaltyVisibilityService) {

        this.analyticsService = analyticsService;
        this.regularizationService = regularizationService;
        this.graceVisibilityService = graceVisibilityService;
        this.penaltyVisibilityService = penaltyVisibilityService;
    }

    @Override
    public AttendanceDashboardResponse getStudentDashboard(
            Long studentId,
            Long courseId,
            LocalDate startDate,
            LocalDate endDate) {

        AttendanceAnalyticsResponse analytics =
                analyticsService.analyzeStudentAttendance(
                        studentId,
                        courseId,
                        startDate,
                        endDate
                );

        AttendanceRegularizationVisibility regularizationVisibility =
                regularizationService.getVisibility(
                        studentId,
                        courseId,
                        startDate,
                        endDate
                );

        AttendanceGraceVisibility graceVisibility =
                graceVisibilityService.getVisibility(
                        studentId,
                        courseId,
                        startDate,
                        endDate
                );

        AttendancePenaltyVisibility penaltyVisibility =
                penaltyVisibilityService.getVisibilityForStudent(
                        studentId,
                        courseId,
                        startDate,
                        endDate
                );

        return new AttendanceDashboardResponse(
                analytics,
                regularizationVisibility,
                graceVisibility,
                penaltyVisibility
        );
    }
}
