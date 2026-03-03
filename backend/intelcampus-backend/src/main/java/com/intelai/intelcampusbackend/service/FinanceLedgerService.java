package com.intelai.intelcampusbackend.service;

import com.intelai.intelcampusbackend.model.finance.FinanceEntryType;
import com.intelai.intelcampusbackend.model.finance.FinanceLedgerEntry;

public interface FinanceLedgerService {

    FinanceLedgerEntry recordEntry(
            Long studentId,
            Double amount,
            FinanceEntryType type,
            String referenceType,
            Long referenceId,
            String description
    );
}
