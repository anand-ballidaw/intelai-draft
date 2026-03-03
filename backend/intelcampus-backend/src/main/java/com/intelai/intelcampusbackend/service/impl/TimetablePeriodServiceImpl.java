package com.intelai.intelcampusbackend.service.impl;

import java.time.LocalTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.timetable.TimetableDay;
import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;
import com.intelai.intelcampusbackend.repository.timetable.TimetableDayRepository;
import com.intelai.intelcampusbackend.repository.timetable.TimetablePeriodRepository;
import com.intelai.intelcampusbackend.service.TimetablePeriodService;

@Service
public class TimetablePeriodServiceImpl implements TimetablePeriodService {

    private final TimetableDayRepository timetableDayRepository;
    private final TimetablePeriodRepository timetablePeriodRepository;

    public TimetablePeriodServiceImpl(
            TimetableDayRepository timetableDayRepository,
            TimetablePeriodRepository timetablePeriodRepository
    ) {
        this.timetableDayRepository = timetableDayRepository;
        this.timetablePeriodRepository = timetablePeriodRepository;
    }

    @Override
    public TimetablePeriod createPeriod(
            Long timetableDayId,
            Integer periodNumber,
            LocalTime startTime,
            LocalTime endTime
    ) {

        if (!startTime.isBefore(endTime)) {
            throw new RuntimeException("Invalid period time range");
        }

        TimetableDay day = timetableDayRepository.findById(timetableDayId)
                .orElseThrow(() -> new RuntimeException("TimetableDay not found"));

        timetablePeriodRepository.findByTimetableDay_Id(timetableDayId)
                .forEach(existing -> {
                    if (existing.getPeriodNumber().equals(periodNumber)) {
                        throw new RuntimeException("Period number already exists");
                    }
                    boolean overlaps =
                            startTime.isBefore(existing.getEndTime()) &&
                            endTime.isAfter(existing.getStartTime());
                    if (overlaps) {
                        throw new RuntimeException("Period time overlaps");
                    }
                });

        TimetablePeriod period = new TimetablePeriod();
        period.setTimetableDay(day);
        period.setPeriodNumber(periodNumber);
        period.setStartTime(startTime);
        period.setEndTime(endTime);

        return timetablePeriodRepository.save(period);
    }

    @Override
    public List<TimetablePeriod> getPeriodsByDay(Long timetableDayId) {
        return timetablePeriodRepository.findByTimetableDay_Id(timetableDayId);
    }

    @Override
    public void deactivatePeriod(Long periodId) {
        TimetablePeriod period = timetablePeriodRepository.findById(periodId)
                .orElseThrow(() -> new RuntimeException("TimetablePeriod not found"));
        period.setActive(false);
        timetablePeriodRepository.save(period);
    }
}
