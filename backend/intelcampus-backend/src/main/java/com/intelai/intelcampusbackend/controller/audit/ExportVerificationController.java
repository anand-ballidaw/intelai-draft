package com.intelai.intelcampusbackend.controller.audit;

import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RequestPart;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.intelai.intelcampusbackend.dto.audit.ExportVerificationResponse;
import com.intelai.intelcampusbackend.service.audit.ExportSignatureService;

@RestController
@RequestMapping("/api/audit/export/verify")
public class ExportVerificationController {

    private final ExportSignatureService signatureService;

    public ExportVerificationController(
            ExportSignatureService signatureService
    ) {
        this.signatureService = signatureService;
    }

    @PostMapping(
            consumes = MediaType.MULTIPART_FORM_DATA_VALUE,
            produces = MediaType.APPLICATION_JSON_VALUE
    )
    public ResponseEntity<ExportVerificationResponse> verifyExport(
            @RequestParam String module,
            @RequestParam String exportType,
            @RequestParam String referenceId,
            @RequestParam String signature,
            @RequestPart MultipartFile file
    ) {

        try {

            byte[] bytes = file.getBytes();

            boolean valid =
                    signatureService.verify(
                            module,
                            exportType,
                            referenceId,
                            bytes,
                            signature
                    );

            ExportVerificationResponse response =
                    new ExportVerificationResponse(
                            valid,
                            module,
                            exportType,
                            referenceId,
                            valid
                                    ? "EXPORT VERIFIED — INTEGRITY INTACT"
                                    : "EXPORT INVALID — FILE TAMPERED"
                    );

            return ResponseEntity.ok(response);

        } catch (Exception ex) {

            ExportVerificationResponse response =
                    new ExportVerificationResponse(
                            false,
                            module,
                            exportType,
                            referenceId,
                            "VERIFICATION FAILED: " + ex.getMessage()
                    );

            return ResponseEntity.badRequest()
                    .body(response);
        }
    }
}
