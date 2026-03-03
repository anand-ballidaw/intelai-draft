package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.DayOfWeekEnum;
import com.intelai.intelcampusbackend.model.timetable.TimetableDay;

public interface TimetableDayService {

    TimetableDay createDay(Long academicClassSemesterId, DayOfWeekEnum day);

    TimetableDay getDay(Long id);

    List<TimetableDay> getDaysBySemester(Long academicClassSemesterId);

    void deactivateDay(Long id);
}
