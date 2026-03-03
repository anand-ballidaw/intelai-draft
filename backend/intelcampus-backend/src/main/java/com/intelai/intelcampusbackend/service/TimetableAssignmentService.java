package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;

public interface TimetableAssignmentService {

    void assignCourse(Long timetablePeriodId, Long courseId);

    void assignStaff(Long timetablePeriodId, Long staffId);

    List<TimetablePeriod> getPeriodsByDay(Long timetableDayId);
}
