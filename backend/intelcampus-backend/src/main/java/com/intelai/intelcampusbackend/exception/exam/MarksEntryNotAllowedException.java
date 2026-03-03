package com.intelai.intelcampusbackend.exception.exam;

public class MarksEntryNotAllowedException extends RuntimeException {

    public MarksEntryNotAllowedException(String reason) {
        super(reason);
    }
}
