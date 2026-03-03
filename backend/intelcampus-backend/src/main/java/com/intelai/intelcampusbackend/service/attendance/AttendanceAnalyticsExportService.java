package com.intelai.intelcampusbackend.service.attendance;

import java.math.BigDecimal;

public interface AttendanceAnalyticsExportService {

    byte[] exportAnalyticsExcel(
            Long invoiceId,
            BigDecimal expectedAmount
    );

    byte[] exportAnalyticsPdf(
            Long invoiceId,
            BigDecimal expectedAmount
    );
}
