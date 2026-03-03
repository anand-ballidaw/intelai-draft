package com.intelai.intelcampusbackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;
import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;
import com.intelai.intelcampusbackend.model.student.Student;
import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;
import com.intelai.intelcampusbackend.repository.attendance.AttendanceRepository;
import com.intelai.intelcampusbackend.repository.timetable.TimetablePeriodRepository;
import com.intelai.intelcampusbackend.service.AttendanceAutoService;

@Service
public class AttendanceAutoServiceImpl implements AttendanceAutoService {

    private final TimetablePeriodRepository timetablePeriodRepository;
    private final AttendanceRepository attendanceRepository;

    public AttendanceAutoServiceImpl(
            TimetablePeriodRepository timetablePeriodRepository,
            AttendanceRepository attendanceRepository
    ) {
        this.timetablePeriodRepository = timetablePeriodRepository;
        this.attendanceRepository = attendanceRepository;
    }

    @Override
    public void generateAttendanceForPeriod(Long timetablePeriodId) {

        TimetablePeriod period = timetablePeriodRepository.findById(timetablePeriodId)
                .orElseThrow(() -> new IllegalArgumentException("Invalid timetable period"));

        AcademicClass academicClass = period.getTimetableDay()
                .getAcademicClassSemester()
                .getAcademicClass();

        List<Student> students = academicClass.getStudents();

        for (Student student : students) {

            boolean alreadyExists =
                    attendanceRepository.existsByStudent_IdAndTimetablePeriod_Id(
                            student.getId(),
                            period.getId()
                    );

            if (alreadyExists) {
                continue;
            }

            Attendance attendance = new Attendance();
            attendance.setStudent(student);
            attendance.setTimetablePeriod(period);
            attendance.setStatus(AttendanceStatus.PRESENT);
            attendance.setMarkedAutomatically(true);
            attendance.setMarkedAt(LocalDateTime.now());

            attendanceRepository.save(attendance);
        }
    }
}
