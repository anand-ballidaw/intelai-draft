package com.intelai.intelcampusbackend.service.finance;

import java.math.BigDecimal;

public interface InvoiceReconciliationService {

    BigDecimal getOutstandingAmount(Long invoiceId);

    BigDecimal getTotalPaidAmount(Long invoiceId);
}
