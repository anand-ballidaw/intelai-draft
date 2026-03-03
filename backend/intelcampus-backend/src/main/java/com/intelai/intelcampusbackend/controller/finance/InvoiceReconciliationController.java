package com.intelai.intelcampusbackend.controller.finance;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.dto.finance.InvoiceReconciliationResponse;
import com.intelai.intelcampusbackend.service.finance.InvoiceReconciliationService;

@RestController
@RequestMapping("/api/finance/invoices")
public class InvoiceReconciliationController {

    private final InvoiceReconciliationService reconciliationService;

    public InvoiceReconciliationController(
            InvoiceReconciliationService reconciliationService
    ) {
        this.reconciliationService = reconciliationService;
    }

    @GetMapping("/{invoiceId}/reconciliation")
    public InvoiceReconciliationResponse reconcileInvoice(
            @PathVariable Long invoiceId
    ) {
        return new InvoiceReconciliationResponse(
                invoiceId,
                reconciliationService.getTotalPaidAmount(invoiceId)
        );
    }
}
