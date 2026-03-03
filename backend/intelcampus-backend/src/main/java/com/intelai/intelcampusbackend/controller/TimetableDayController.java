package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.academic.DayOfWeekEnum;
import com.intelai.intelcampusbackend.model.timetable.TimetableDay;
import com.intelai.intelcampusbackend.service.TimetableDayService;

@RestController
@RequestMapping("/api/timetable-days")
public class TimetableDayController {

    private final TimetableDayService timetableDayService;

    public TimetableDayController(TimetableDayService timetableDayService) {
        this.timetableDayService = timetableDayService;
    }

    @PostMapping
    public TimetableDay create(
            @RequestParam Long academicClassSemesterId,
            @RequestParam DayOfWeekEnum day
    ) {
        return timetableDayService.createDay(academicClassSemesterId, day);
    }

    @GetMapping("/{id}")
    public TimetableDay get(@PathVariable Long id) {
        return timetableDayService.getDay(id);
    }

    @GetMapping("/semester/{semesterId}")
    public List<TimetableDay> bySemester(@PathVariable Long semesterId) {
        return timetableDayService.getDaysBySemester(semesterId);
    }

    @DeleteMapping("/{id}")
    public void deactivate(@PathVariable Long id) {
        timetableDayService.deactivateDay(id);
    }
}
