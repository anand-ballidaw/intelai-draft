package com.intelai.intelcampusbackend.dto.attendance;

public class AttendanceRegularizationReviewRequest {

    private boolean approve;
    private String remarks;

    public boolean isApprove() {
        return approve;
    }

    public void setApprove(boolean approve) {
        this.approve = approve;
    }

    public String getRemarks() {
        return remarks;
    }

    public void setRemarks(String remarks) {
        this.remarks = remarks;
    }
}
