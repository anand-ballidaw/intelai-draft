package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.finance.Invoice;
import com.intelai.intelcampusbackend.model.student.Student;
import com.intelai.intelcampusbackend.repository.finance.InvoiceRepository;
import com.intelai.intelcampusbackend.repository.student.StudentRepository;

@Service
public class InvoiceServiceImpl {

    private final InvoiceRepository invoiceRepository;
    private final StudentRepository studentRepository;

    public InvoiceServiceImpl(
            InvoiceRepository invoiceRepository,
            StudentRepository studentRepository
    ) {
        this.invoiceRepository = invoiceRepository;
        this.studentRepository = studentRepository;
    }

    public Invoice createInvoice(Long studentId) {

        Student student = studentRepository.findById(studentId)
                .orElseThrow(() -> new IllegalArgumentException("Student not found"));

        Invoice invoice = new Invoice();
        invoice.setStudent(student);

        return invoiceRepository.save(invoice);
    }
}
