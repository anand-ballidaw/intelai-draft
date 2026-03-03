package com.intelai.intelcampusbackend.service.impl.attendance;

import java.io.ByteArrayOutputStream;
import java.time.LocalDate;
import java.util.List;

import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.attendance.AttendanceExportExcelService;

@Service
public class AttendanceExportExcelServiceImpl
        implements AttendanceExportExcelService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceExportExcelServiceImpl(
            AttendanceRepository attendanceRepository
    ) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public byte[] exportStudentAttendanceExcel(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<Attendance> records =
                attendanceRepository.findByStudent_IdAndAttendanceDateBetween(
                        studentId,
                        startDate,
                        endDate
                );

        return buildWorkbook(records, "Student Attendance");
    }

    @Override
    public byte[] exportClassAttendanceExcel(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    ) {

        List<Attendance> records =
                attendanceRepository.findByStudent_AcademicClass_IdAndAttendanceDateBetween(
                        academicClassId,
                        startDate,
                        endDate
                );

        return buildWorkbook(records, "Class Attendance");
    }

    private byte[] buildWorkbook(
            List<Attendance> records,
            String sheetName
    ) {

        try (Workbook workbook = new XSSFWorkbook();
             ByteArrayOutputStream out = new ByteArrayOutputStream()) {

            Sheet sheet = workbook.createSheet(sheetName);

            Row header = sheet.createRow(0);
            header.createCell(0).setCellValue("Attendance ID");
            header.createCell(1).setCellValue("Student ID");
            header.createCell(2).setCellValue("Course ID");
            header.createCell(3).setCellValue("Date");
            header.createCell(4).setCellValue("Status");
            header.createCell(5).setCellValue("Marked Automatically");

            int rowIdx = 1;
            for (Attendance a : records) {
                Row row = sheet.createRow(rowIdx++);
                row.createCell(0).setCellValue(a.getId());
                row.createCell(1).setCellValue(a.getStudent().getId());
                row.createCell(2).setCellValue(
                        a.getTimetablePeriod().getCourse().getId()
                );
                row.createCell(3).setCellValue(a.getAttendanceDate().toString());
                row.createCell(4).setCellValue(a.getStatus().name());
                row.createCell(5).setCellValue(a.isMarkedAutomatically());
            }

            workbook.write(out);
            return out.toByteArray();

        } catch (Exception e) {
            throw new RuntimeException(
                    "Failed to generate attendance Excel export", e
            );
        }
    }
}
