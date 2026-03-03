package com.intelai.intelcampusbackend.controller.attendance;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.attendance.AttendancePenalty;
import com.intelai.intelcampusbackend.service.attendance.AttendancePenaltyService;

@RestController
@RequestMapping("/api/attendance/penalties")
public class AttendancePenaltyController {

    private final AttendancePenaltyService penaltyService;

    public AttendancePenaltyController(
            AttendancePenaltyService penaltyService
    ) {
        this.penaltyService = penaltyService;
    }

    /**
     * GET /api/attendance/penalties/student/{studentId}
     * Returns active (not waived, not revoked) penalties
     */
    @GetMapping("/student/{studentId}")
    public List<AttendancePenalty> getActivePenaltiesForStudent(
            @PathVariable Long studentId,
            @RequestParam Long academicClassSemesterId
    ) {
        return penaltyService.getActivePenaltiesForStudent(
                studentId,
                academicClassSemesterId
        );
    }

    /**
     * POST /api/attendance/penalties/{penaltyId}/waive
     * Waives a penalty with audit info
     */
    @PostMapping("/{penaltyId}/waive")
    public void waivePenalty(
            @PathVariable Long penaltyId,
            @RequestBody WaivePenaltyRequest request
    ) {
        penaltyService.waivePenalty(
                penaltyId,
                request.getWaivedBy(),
                request.getRemarks()
        );
    }

    /**
     * Internal request DTO (controller-scoped)
     */
    public static class WaivePenaltyRequest {

        private String waivedBy;
        private String remarks;

        public String getWaivedBy() {
            return waivedBy;
        }

        public void setWaivedBy(String waivedBy) {
            this.waivedBy = waivedBy;
        }

        public String getRemarks() {
            return remarks;
        }

        public void setRemarks(String remarks) {
            this.remarks = remarks;
        }
    }
}
