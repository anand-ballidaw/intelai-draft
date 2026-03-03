package com.intelai.intelcampusbackend.service.impl.finance;

import java.math.BigDecimal;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.service.finance.InvoiceReconciliationService;

@Service
public class InvoiceReconciliationServiceImpl
        implements InvoiceReconciliationService {

    @Override
    public BigDecimal getOutstandingAmount(Long invoiceId) {
        return BigDecimal.ZERO;
    }

    @Override
    public BigDecimal getTotalPaidAmount(Long invoiceId) {
        return BigDecimal.ZERO;
    }
}
