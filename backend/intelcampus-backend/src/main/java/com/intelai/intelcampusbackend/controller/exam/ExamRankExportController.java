package com.intelai.intelcampusbackend.controller.exam;

import org.springframework.http.HttpHeaders;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.service.exam.ExamRankExportService;

@RestController
@RequestMapping("/api/exams")
public class ExamRankExportController {

    private final ExamRankExportService examRankExportService;

    public ExamRankExportController(ExamRankExportService examRankExportService) {
        this.examRankExportService = examRankExportService;
    }

    @GetMapping("/{examId}/rank/export/excel")
    public ResponseEntity<byte[]> exportRankExcel(
            @PathVariable Long examId
    ) {
        byte[] excelData = examRankExportService.exportRankExcel(examId);

        return ResponseEntity.ok()
                .header(
                        HttpHeaders.CONTENT_DISPOSITION,
                        "attachment; filename=exam_" + examId + "_rank.xlsx"
                )
                .contentType(
                        MediaType.parseMediaType(
                                "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                        )
                )
                .body(excelData);
    }
}
