package com.intelai.intelcampusbackend.service.impl.finance;

import com.intelai.intelcampusbackend.service.finance.FinanceAnalyticsExportService;
import org.springframework.stereotype.Service;

import java.math.BigDecimal;

@Service
public class FinanceAnalyticsExportServiceImpl implements FinanceAnalyticsExportService {

    @Override
    public byte[] exportFinanceAnalyticsExcel(Long invoiceId, BigDecimal expectedAmount) {
        // TODO: Implement finance Excel export later
        return new byte[0];
    }

    @Override
    public byte[] exportFinanceAnalyticsPdf(Long invoiceId, BigDecimal expectedAmount) {
        // TODO: Implement finance PDF export later
        return new byte[0];
    }
}
