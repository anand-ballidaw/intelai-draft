package com.intelai.intelcampusbackend.service.impl.attendance;

import java.time.LocalDateTime;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.AttendanceOverride;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceOverrideRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceOverrideService;

@Service
public class AttendanceOverrideServiceImpl
        implements AttendanceOverrideService {

    private final AttendanceOverrideRepository overrideRepository;

    public AttendanceOverrideServiceImpl(
            AttendanceOverrideRepository overrideRepository
    ) {
        this.overrideRepository = overrideRepository;
    }

    @Override
    public AttendanceOverride createOverride(
            Long invoiceId,
            String reason,
            String approvedBy,
            LocalDateTime validUntil
    ) {

        AttendanceOverride override = new AttendanceOverride();
        override.setInvoiceId(invoiceId);
        override.setReason(reason);
        override.setApprovedBy(approvedBy);
        override.setApprovedAt(LocalDateTime.now());
        override.setValidUntil(validUntil);

        return overrideRepository.save(override);
    }

    @Override
    public Optional<AttendanceOverride> getActiveOverride(Long invoiceId) {
        return overrideRepository.findActiveOverride(
                invoiceId,
                LocalDateTime.now()
        );
    }
}
