package com.intelai.intelcampusbackend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.TOO_MANY_REQUESTS)
public class ExportRateLimitExceededException
        extends RuntimeException {

    public ExportRateLimitExceededException(String message) {
        super(message);
    }
}
