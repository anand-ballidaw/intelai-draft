package com.intelai.intelcampusbackend.model.attendance;

import java.time.LocalDateTime;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "attendance_overrides")
@Getter
@Setter
public class AttendanceOverride {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long invoiceId;

    @Column(nullable = false)
    private String reason;

    @Column(nullable = false)
    private String approvedBy;

    @Column(nullable = false)
    private LocalDateTime approvedAt;

    @Column
    private LocalDateTime validUntil;
}
