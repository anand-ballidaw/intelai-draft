package com.intelai.intelcampusbackend.repository.finance;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.finance.FinanceLedgerEntry;

public interface FinanceLedgerRepository
        extends JpaRepository<FinanceLedgerEntry, Long> {
}
