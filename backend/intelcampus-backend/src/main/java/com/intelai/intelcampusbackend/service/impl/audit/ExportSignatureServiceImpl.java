package com.intelai.intelcampusbackend.service.impl.audit;

import java.security.MessageDigest;
import java.util.Base64;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.service.audit.ExportSignatureService;

@Service
public class ExportSignatureServiceImpl
        implements ExportSignatureService {

    @Override
    public String sign(
            String module,
            String exportType,
            String referenceId,
            byte[] fileBytes
    ) {

        try {

            MessageDigest digest =
                    MessageDigest.getInstance("SHA-256");

            digest.update(module.getBytes());
            digest.update(exportType.getBytes());
            digest.update(referenceId.getBytes());
            digest.update(fileBytes);

            byte[] hash = digest.digest();

            return Base64.getEncoder()
                    .encodeToString(hash);

        } catch (Exception ex) {
            throw new RuntimeException(
                    "Failed to generate export signature",
                    ex
            );
        }
    }

    @Override
    public boolean verify(
            String module,
            String exportType,
            String referenceId,
            byte[] fileBytes,
            String signature
    ) {

        String expected =
                sign(
                        module,
                        exportType,
                        referenceId,
                        fileBytes
                );

        return expected.equals(signature);
    }
}
