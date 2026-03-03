package com.intelai.intelcampusbackend.repository.finance;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intelai.intelcampusbackend.model.finance.FinanceEntryType;
import com.intelai.intelcampusbackend.model.finance.LedgerEntry;

public interface LedgerRepository extends JpaRepository<LedgerEntry, Long> {

    @Query("""
        SELECT COALESCE(SUM(l.amount), 0)
        FROM LedgerEntry l
        WHERE l.entryType = :entryType
          AND l.referenceId = :referenceId
    """)
    BigDecimal sumAmountByEntryTypeAndReferenceId(
            @Param("entryType") FinanceEntryType entryType,
            @Param("referenceId") String referenceId
    );
}
