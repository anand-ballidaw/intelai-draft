package com.intelai.intelcampusbackend.controller;

import java.time.LocalTime;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;
import com.intelai.intelcampusbackend.service.TimetablePeriodService;

@RestController
@RequestMapping("/api/timetable/periods")
public class TimetablePeriodController {

    private final TimetablePeriodService timetablePeriodService;

    public TimetablePeriodController(TimetablePeriodService timetablePeriodService) {
        this.timetablePeriodService = timetablePeriodService;
    }

    @PostMapping
    public ResponseEntity<TimetablePeriod> createPeriod(
            @RequestParam Long timetableDayId,
            @RequestParam Integer periodNumber,
            @RequestParam LocalTime startTime,
            @RequestParam LocalTime endTime
    ) {
        return ResponseEntity.ok(
                timetablePeriodService.createPeriod(
                        timetableDayId,
                        periodNumber,
                        startTime,
                        endTime
                )
        );
    }

    @GetMapping("/day/{dayId}")
    public ResponseEntity<List<TimetablePeriod>> getByDay(@PathVariable Long dayId) {
        return ResponseEntity.ok(
                timetablePeriodService.getPeriodsByDay(dayId)
        );
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deactivate(@PathVariable Long id) {
        timetablePeriodService.deactivatePeriod(id);
        return ResponseEntity.noContent().build();
    }
}
