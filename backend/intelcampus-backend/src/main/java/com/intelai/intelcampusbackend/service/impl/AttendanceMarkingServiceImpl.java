package com.intelai.intelcampusbackend.service.impl;

import java.time.LocalDate;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.dto.attendance.AttendanceUpdateRequest;
import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.service.AttendanceMarkingService;

@Service
public class AttendanceMarkingServiceImpl implements AttendanceMarkingService {

    private final AttendanceRepository attendanceRepository;

    public AttendanceMarkingServiceImpl(AttendanceRepository attendanceRepository) {
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public void markAttendance(
            Long staffId,
            List<AttendanceUpdateRequest> updates
    ) {

        for (AttendanceUpdateRequest req : updates) {

            Attendance attendance = new Attendance();

            attendance.setAttendanceDate(LocalDate.now());
            attendance.setStatus(req.getStatus()); // already AttendanceStatus

            attendanceRepository.save(attendance);
        }
    }
}
