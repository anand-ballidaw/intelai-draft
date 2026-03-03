package com.intelai.intelcampusbackend.repository.timetable;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.academic.DayOfWeekEnum;
import com.intelai.intelcampusbackend.model.timetable.TimetableDay;

public interface TimetableDayRepository extends JpaRepository<TimetableDay, Long> {

    Optional<TimetableDay> findByAcademicClassSemester_IdAndDayOfWeek(
            Long academicClassSemesterId,
            DayOfWeekEnum dayOfWeek
    );

    List<TimetableDay> findByAcademicClassSemester_Id(Long academicClassSemesterId);
}
