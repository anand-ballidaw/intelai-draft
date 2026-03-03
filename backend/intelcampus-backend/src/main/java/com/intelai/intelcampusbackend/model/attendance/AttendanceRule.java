package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDateTime;

import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;

import jakarta.persistence.*;

@Entity
@Table(name = "attendance_rules")
public class AttendanceRule {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    /* =========================
       SCOPE
       ========================= */

    @ManyToOne(optional = false, fetch = FetchType.LAZY)
    @JoinColumn(name = "academic_class_semester_id", nullable = false)
    private AcademicClassSemester academicClassSemester;

    /* =========================
       RULE DEFINITION
       ========================= */

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AttendanceRuleType ruleType;

    @Column(nullable = false)
    private Double minimumPercentage;

    @Column(nullable = false)
    private Double warningThreshold;

    @Column(nullable = false)
    private Boolean regularizationAllowed;

    /* =========================
       PENALTY
       ========================= */

    @Enumerated(EnumType.STRING)
    @Column(nullable = false)
    private AttendancePenaltyType penaltyType;

    /* =========================
       STATUS
       ========================= */

    @Column(nullable = false)
    private Boolean active = true;

    /* =========================
       AUDIT
       ========================= */

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt;

    @Column(nullable = false)
    private LocalDateTime updatedAt;

    @PrePersist
    protected void onCreate() {
        this.createdAt = LocalDateTime.now();
        this.updatedAt = this.createdAt;
    }

    @PreUpdate
    protected void onUpdate() {
        this.updatedAt = LocalDateTime.now();
    }

    /* =========================
       GETTERS & SETTERS
       ========================= */

    public Long getId() {
        return id;
    }

    public AcademicClassSemester getAcademicClassSemester() {
        return academicClassSemester;
    }

    public void setAcademicClassSemester(AcademicClassSemester academicClassSemester) {
        this.academicClassSemester = academicClassSemester;
    }

    public AttendanceRuleType getRuleType() {
        return ruleType;
    }

    public void setRuleType(AttendanceRuleType ruleType) {
        this.ruleType = ruleType;
    }

    public Double getMinimumPercentage() {
        return minimumPercentage;
    }

    public void setMinimumPercentage(Double minimumPercentage) {
        this.minimumPercentage = minimumPercentage;
    }

    public Double getWarningThreshold() {
        return warningThreshold;
    }

    public void setWarningThreshold(Double warningThreshold) {
        this.warningThreshold = warningThreshold;
    }

    public Boolean getRegularizationAllowed() {
        return regularizationAllowed;
    }

    public void setRegularizationAllowed(Boolean regularizationAllowed) {
        this.regularizationAllowed = regularizationAllowed;
    }

    public AttendancePenaltyType getPenaltyType() {
        return penaltyType;
    }

    public void setPenaltyType(AttendancePenaltyType penaltyType) {
        this.penaltyType = penaltyType;
    }

    public Boolean getActive() {
        return active;
    }

    public void setActive(Boolean active) {
        this.active = active;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public LocalDateTime getUpdatedAt() {
        return updatedAt;
    }
}
