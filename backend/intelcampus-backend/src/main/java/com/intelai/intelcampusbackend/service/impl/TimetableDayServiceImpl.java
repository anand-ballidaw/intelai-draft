package com.intelai.intelcampusbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;
import com.intelai.intelcampusbackend.model.academic.DayOfWeekEnum;
import com.intelai.intelcampusbackend.model.timetable.TimetableDay;
import com.intelai.intelcampusbackend.repository.academic.AcademicClassSemesterRepository;
import com.intelai.intelcampusbackend.repository.timetable.TimetableDayRepository;
import com.intelai.intelcampusbackend.service.TimetableDayService;

@Service
public class TimetableDayServiceImpl implements TimetableDayService {

    private final TimetableDayRepository timetableDayRepository;
    private final AcademicClassSemesterRepository academicClassSemesterRepository;

    public TimetableDayServiceImpl(
            TimetableDayRepository timetableDayRepository,
            AcademicClassSemesterRepository academicClassSemesterRepository
    ) {
        this.timetableDayRepository = timetableDayRepository;
        this.academicClassSemesterRepository = academicClassSemesterRepository;
    }

    @Override
    public TimetableDay createDay(Long academicClassSemesterId, DayOfWeekEnum day) {

        AcademicClassSemester semester = academicClassSemesterRepository
                .findById(academicClassSemesterId)
                .orElseThrow(() -> new RuntimeException("AcademicClassSemester not found"));

        timetableDayRepository
                .findByAcademicClassSemester_IdAndDayOfWeek(academicClassSemesterId, day)
                .ifPresent(d -> {
                    throw new RuntimeException("Timetable day already exists");
                });

        TimetableDay timetableDay = new TimetableDay();
        timetableDay.setAcademicClassSemester(semester);
        timetableDay.setDayOfWeek(day);

        return timetableDayRepository.save(timetableDay);
    }

    @Override
    public TimetableDay getDay(Long id) {
        return timetableDayRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("TimetableDay not found"));
    }

    @Override
    public List<TimetableDay> getDaysBySemester(Long academicClassSemesterId) {
        return timetableDayRepository.findByAcademicClassSemester_Id(academicClassSemesterId);
    }

    @Override
    public void deactivateDay(Long id) {
        TimetableDay day = getDay(id);
        day.setActive(false);
        timetableDayRepository.save(day);
    }
}
