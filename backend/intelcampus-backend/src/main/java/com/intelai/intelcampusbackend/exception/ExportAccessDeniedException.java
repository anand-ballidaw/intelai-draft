package com.intelai.intelcampusbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class ExportAccessDeniedException
        extends RuntimeException {

    public ExportAccessDeniedException(String message) {
        super(message);
    }
}
