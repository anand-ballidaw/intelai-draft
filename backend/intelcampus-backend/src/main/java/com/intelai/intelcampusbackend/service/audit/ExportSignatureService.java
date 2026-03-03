package com.intelai.intelcampusbackend.service.audit;

public interface ExportSignatureService {

    String sign(
            String module,
            String exportType,
            String referenceId,
            byte[] fileBytes
    );

    boolean verify(
            String module,
            String exportType,
            String referenceId,
            byte[] fileBytes,
            String signature
    );
}
