package com.intelai.intelcampusbackend.service.finance;

import java.time.Year;
import java.util.concurrent.atomic.AtomicInteger;

import org.springframework.stereotype.Component;

@Component
public class InvoiceNumberGenerator {

    private final AtomicInteger sequence = new AtomicInteger(1);

    public String generate(Long courseId, Long studentId) {
        int seq = sequence.getAndIncrement();
        return String.format(
                "INV-%d-%d-%d-%04d",
                Year.now().getValue(),
                courseId,
                studentId,
                seq
        );
    }
}
