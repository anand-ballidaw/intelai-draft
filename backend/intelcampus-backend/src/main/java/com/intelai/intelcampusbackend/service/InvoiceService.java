package com.intelai.intelcampusbackend.service;

import java.time.LocalDate;

import com.intelai.intelcampusbackend.model.finance.Invoice;

public interface InvoiceService {

    Invoice generateInvoice(
            Long studentId,
            Double amount,
            LocalDate dueDate,
            String description
    );
}
