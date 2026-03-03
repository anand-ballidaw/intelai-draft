package com.intelai.intelcampusbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class AttendanceAccessDeniedException extends RuntimeException {

    public AttendanceAccessDeniedException(String message) {
        super(message);
    }
}
