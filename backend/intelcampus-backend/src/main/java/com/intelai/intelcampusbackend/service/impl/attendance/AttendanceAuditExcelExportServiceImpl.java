package com.intelai.intelcampusbackend.service.impl.attendance;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.audit.AttendanceAuditView;
import com.intelai.intelcampusbackend.service.attendance.AttendanceAuditExcelExportService;

@Service
public class AttendanceAuditExcelExportServiceImpl
        implements AttendanceAuditExcelExportService {

    @Override
    public byte[] exportStudentAuditExcel(
            List<AttendanceAuditView> audits
    ) {
        return buildExcel(audits);
    }

    @Override
    public byte[] exportClassAuditExcel(
            List<AttendanceAuditView> audits
    ) {
        return buildExcel(audits);
    }

    private byte[] buildExcel(
            List<AttendanceAuditView> audits
    ) {

        try {

            // existing excel generation logic
            // DO NOT CHANGE CONTENT STRUCTURE

            // placeholder for your already working excel logic
            // return excelBytes;

            return new byte[0]; // keep your existing logic here

        } catch (Exception ex) {
            throw new RuntimeException(
                    "Failed to generate Excel",
                    ex
            );
        }
    }
}
