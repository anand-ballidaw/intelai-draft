package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.PreUpdate;
import jakarta.persistence.Table;

@Entity
@Table(name = "attendance_threshold_rules")
public class AttendanceThresholdRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Double greenMinPercentage;

    @Column(nullable = false)
    private Double yellowMinPercentage;

    @Column(nullable = false)
    private Double redBelowPercentage;

    @Column(nullable = false)
    private Boolean penaltyEnabled;

    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = LocalDateTime.now();
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    public Long getId() {
        return id;
    }

    public Double getGreenMinPercentage() {
        return greenMinPercentage;
    }

    public void setGreenMinPercentage(Double greenMinPercentage) {
        this.greenMinPercentage = greenMinPercentage;
    }

    public Double getYellowMinPercentage() {
        return yellowMinPercentage;
    }

    public void setYellowMinPercentage(Double yellowMinPercentage) {
        this.yellowMinPercentage = yellowMinPercentage;
    }

    public Double getRedBelowPercentage() {
        return redBelowPercentage;
    }

    public void setRedBelowPercentage(Double redBelowPercentage) {
        this.redBelowPercentage = redBelowPercentage;
    }

    public Boolean getPenaltyEnabled() {
        return penaltyEnabled;
    }

    public void setPenaltyEnabled(Boolean penaltyEnabled) {
        this.penaltyEnabled = penaltyEnabled;
    }
}
