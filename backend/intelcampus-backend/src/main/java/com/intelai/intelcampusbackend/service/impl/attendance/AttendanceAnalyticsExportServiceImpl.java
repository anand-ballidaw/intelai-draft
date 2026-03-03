package com.intelai.intelcampusbackend.service.impl.attendance;

import com.intelai.intelcampusbackend.service.attendance.AttendanceAnalyticsExportService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class AttendanceAnalyticsExportServiceImpl implements AttendanceAnalyticsExportService {

    @Override
    public byte[] exportAnalyticsExcel(Long invoiceId, BigDecimal expectedAmount) {
        // TODO: Implement real Excel generation later
        // For now, return empty file to satisfy interface
        return new byte[0];
    }

    @Override
    public byte[] exportAnalyticsPdf(Long invoiceId, BigDecimal expectedAmount) {
        // TODO: Implement real PDF generation later
        return new byte[0];
    }
}
