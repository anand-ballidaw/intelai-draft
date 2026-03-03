package com.intelai.intelcampusbackend.repository.finance;

import java.math.BigDecimal;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intelai.intelcampusbackend.model.finance.Payment;

public interface PaymentRepository
        extends JpaRepository<Payment, Long> {

    @Query("""
        select coalesce(sum(p.amount), 0)
        from Payment p
        where p.invoiceId = :invoiceId
    """)
    BigDecimal getTotalPaidAmountByInvoiceId(
            @Param("invoiceId") Long invoiceId
    );
}
