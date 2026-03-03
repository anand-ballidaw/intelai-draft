package com.intelai.intelcampusbackend.service.impl.exam;

import java.io.ByteArrayOutputStream;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.entity.exam.ExamResult;
import com.intelai.intelcampusbackend.repository.exam.ExamResultRepository;
import com.intelai.intelcampusbackend.service.exam.ExamRankExportService;

@Service
public class ExamRankExportServiceImpl implements ExamRankExportService {

    private final ExamResultRepository examResultRepository;

    public ExamRankExportServiceImpl(
            ExamResultRepository examResultRepository
    ) {
        this.examResultRepository = examResultRepository;
    }

    @Override
    public byte[] exportRankExcel(Long examId) {

        List<ExamResult> results =
                examResultRepository.findByExamIdOrderByRankPositionAsc(examId);

        try (
                Workbook workbook = new XSSFWorkbook();
                ByteArrayOutputStream out = new ByteArrayOutputStream()
        ) {

            Sheet sheet = workbook.createSheet("Exam Rank");

            // Header
            Row header = sheet.createRow(0);
            header.createCell(0).setCellValue("Rank");
            header.createCell(1).setCellValue("Student ID");
            header.createCell(2).setCellValue("Marks");
            header.createCell(3).setCellValue("Passed");

            int rowIndex = 1;

            for (ExamResult result : results) {
                Row row = sheet.createRow(rowIndex++);

                row.createCell(0).setCellValue(
                        result.getRankPosition() == null ? 0 : result.getRankPosition()
                );
                row.createCell(1).setCellValue(result.getStudentId());
                row.createCell(2).setCellValue(
                        result.getMarksObtained() == null ? 0 : result.getMarksObtained()
                );
                row.createCell(3).setCellValue(
                        Boolean.TRUE.equals(result.getPassed()) ? "YES" : "NO"
                );
            }

            for (int i = 0; i < 4; i++) {
                sheet.autoSizeColumn(i);
            }

            workbook.write(out);
            return out.toByteArray();

        } catch (Exception ex) {
            throw new RuntimeException(
                    "Failed to generate rank Excel for examId=" + examId,
                    ex
            );
        }
    }
}
