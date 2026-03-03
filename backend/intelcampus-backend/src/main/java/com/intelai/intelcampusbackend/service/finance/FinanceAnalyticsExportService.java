package com.intelai.intelcampusbackend.service.finance;

import java.math.BigDecimal;

public interface FinanceAnalyticsExportService {

    byte[] exportFinanceAnalyticsExcel(
            Long invoiceId,
            BigDecimal expectedAmount
    );

    byte[] exportFinanceAnalyticsPdf(
            Long invoiceId,
            BigDecimal expectedAmount
    );
}
