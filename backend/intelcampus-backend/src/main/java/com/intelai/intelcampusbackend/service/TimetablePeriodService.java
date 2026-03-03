package com.intelai.intelcampusbackend.service;

import java.time.LocalTime;
import java.util.List;

import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;

public interface TimetablePeriodService {

    TimetablePeriod createPeriod(
            Long timetableDayId,
            Integer periodNumber,
            LocalTime startTime,
            LocalTime endTime
    );

    List<TimetablePeriod> getPeriodsByDay(Long timetableDayId);

    void deactivatePeriod(Long periodId);
}
