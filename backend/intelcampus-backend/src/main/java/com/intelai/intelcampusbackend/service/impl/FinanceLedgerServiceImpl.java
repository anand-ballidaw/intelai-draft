package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.finance.FinanceEntryType;
import com.intelai.intelcampusbackend.model.finance.FinanceLedgerEntry;
import com.intelai.intelcampusbackend.repository.finance.FinanceLedgerRepository;
import com.intelai.intelcampusbackend.service.FinanceLedgerService;
import com.intelai.intelcampusbackend.service.StudentWalletService;

@Service
public class FinanceLedgerServiceImpl implements FinanceLedgerService {

    private final FinanceLedgerRepository ledgerRepository;
    private final StudentWalletService walletService;

    public FinanceLedgerServiceImpl(
            FinanceLedgerRepository ledgerRepository,
            StudentWalletService walletService) {
        this.ledgerRepository = ledgerRepository;
        this.walletService = walletService;
    }

    @Override
    public FinanceLedgerEntry recordEntry(
            Long studentId,
            Double amount,
            FinanceEntryType type,
            String referenceType,
            Long referenceId,
            String description
    ) {

        FinanceLedgerEntry entry = new FinanceLedgerEntry();
        entry.setStudentId(studentId);
        entry.setAmount(amount);
        entry.setEntryType(type);
        entry.setReferenceType(referenceType);
        entry.setReferenceId(referenceId);
        entry.setDescription(description);

        FinanceLedgerEntry saved = ledgerRepository.save(entry);

        walletService.applyAmount(studentId, amount);

        return saved;
    }
}
