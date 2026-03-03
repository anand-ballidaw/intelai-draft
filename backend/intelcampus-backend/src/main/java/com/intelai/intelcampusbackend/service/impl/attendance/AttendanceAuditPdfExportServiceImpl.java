package com.intelai.intelcampusbackend.service.impl.attendance;

import java.io.ByteArrayOutputStream;
import java.time.format.DateTimeFormatter;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditPdfExportService;
import com.lowagie.text.Document;
import com.lowagie.text.Font;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Paragraph;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;
import com.lowagie.text.pdf.PdfWriter;

@Service
public class AttendanceAuditPdfExportServiceImpl
        implements AttendanceAuditPdfExportService {

    private static final DateTimeFormatter DATE_TIME_FORMAT =
            DateTimeFormatter.ofPattern("yyyy-MM-dd HH:mm");

    @Override
    public byte[] exportStudentAuditPdf(
            List<AttendanceAuditView> audits
    ) {

        return buildPdf(
                "Student Attendance Audit",
                audits
        );
    }

    @Override
    public byte[] exportClassAuditPdf(
            List<AttendanceAuditView> audits
    ) {

        return buildPdf(
                "Class Attendance Audit",
                audits
        );
    }

    private byte[] buildPdf(
            String title,
            List<AttendanceAuditView> audits
    ) {

        try {

            ByteArrayOutputStream out =
                    new ByteArrayOutputStream();

            Document document =
                    new Document();

            PdfWriter.getInstance(
                    document,
                    out
            );

            document.open();

            Font titleFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA_BOLD,
                            16
                    );

            Font headerFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA_BOLD,
                            11
                    );

            Font bodyFont =
                    FontFactory.getFont(
                            FontFactory.HELVETICA,
                            10
                    );

            Paragraph titlePara =
                    new Paragraph(
                            title,
                            titleFont
                    );

            titlePara.setSpacingAfter(12);
            document.add(titlePara);

            PdfPTable table =
                    new PdfPTable(8);

            table.setWidthPercentage(100);

            addHeaderCell(table, "Audit ID", headerFont);
            addHeaderCell(table, "Student ID", headerFont);
            addHeaderCell(table, "Class ID", headerFont);
            addHeaderCell(table, "Subject ID", headerFont);
            addHeaderCell(table, "Invoice ID", headerFont);
            addHeaderCell(table, "Status", headerFont);
            addHeaderCell(table, "Reason", headerFont);
            addHeaderCell(table, "Created At", headerFont);

            for (AttendanceAuditView view : audits) {

                addBodyCell(table, String.valueOf(view.getAuditId()), bodyFont);
                addBodyCell(table, String.valueOf(view.getStudentId()), bodyFont);
                addBodyCell(table, String.valueOf(view.getClassId()), bodyFont);
                addBodyCell(table, String.valueOf(view.getSubjectId()), bodyFont);
                addBodyCell(table, String.valueOf(view.getInvoiceId()), bodyFont);
                addBodyCell(table, view.getStatus(), bodyFont);
                addBodyCell(table, view.getReason(), bodyFont);
                addBodyCell(
                        table,
                        view.getCreatedAt().format(DATE_TIME_FORMAT),
                        bodyFont
                );
            }

            document.add(table);
            document.close();

            return out.toByteArray();

        } catch (Exception ex) {
            throw new RuntimeException(
                    "Failed to generate PDF",
                    ex
            );
        }
    }

    private void addHeaderCell(
            PdfPTable table,
            String text,
            Font font
    ) {

        PdfPCell cell =
                new PdfPCell(
                        new Phrase(
                                text,
                                font
                        )
                );

        cell.setPadding(6);
        table.addCell(cell);
    }

    private void addBodyCell(
            PdfPTable table,
            String text,
            Font font
    ) {

        PdfPCell cell =
                new PdfPCell(
                        new Phrase(
                                text == null ? "" : text,
                                font
                        )
                );

        cell.setPadding(5);
        table.addCell(cell);
    }
}
