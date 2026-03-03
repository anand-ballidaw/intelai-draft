package com.intelai.intelcampusbackend.dto.attendance;

import java.util.List;

public class AttendanceReportResponse {

    private Long studentId;
    private List<AttendanceRecordResponse> records;

    /* =========================
       Constructors
       ========================= */

    public AttendanceReportResponse() {
    }

    public AttendanceReportResponse(Long studentId, List<AttendanceRecordResponse> records) {
        this.studentId = studentId;
        this.records = records;
    }

    /* =========================
       Getters and Setters
       ========================= */

    public Long getStudentId() {
        return studentId;
    }

    public void setStudentId(Long studentId) {
        this.studentId = studentId;
    }

    public List<AttendanceRecordResponse> getRecords() {
        return records;
    }

    public void setRecords(List<AttendanceRecordResponse> records) {
        this.records = records;
    }
}
