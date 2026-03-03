package com.intelai.intelcampusbackend.repository.timetable;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;

public interface TimetablePeriodRepository extends JpaRepository<TimetablePeriod, Long> {

    List<TimetablePeriod> findByTimetableDay_Id(Long timetableDayId);

    List<TimetablePeriod> findByTimetableDay_IdAndActiveTrue(Long timetableDayId);
}
