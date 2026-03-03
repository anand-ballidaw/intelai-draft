package com.intelai.intelcampusbackend.repository.attendance;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import com.intelai.intelcampusbackend.model.attendance.AttendanceOverride;

public interface AttendanceOverrideRepository
        extends JpaRepository<AttendanceOverride, Long> {

    @Query("""
        SELECT o FROM AttendanceOverride o
        WHERE o.invoiceId = :invoiceId
          AND (o.validUntil IS NULL OR o.validUntil >= :now)
        ORDER BY o.approvedAt DESC
    """)
    Optional<AttendanceOverride> findActiveOverride(
            Long invoiceId,
            LocalDateTime now
    );
}
