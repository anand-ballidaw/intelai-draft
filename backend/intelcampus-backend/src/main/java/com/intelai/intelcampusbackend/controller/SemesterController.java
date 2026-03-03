package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.academic.Semester;
import com.intelai.intelcampusbackend.service.SemesterService;

@RestController
@RequestMapping("/api/semesters")
public class SemesterController {

    private final SemesterService semesterService;

    public SemesterController(SemesterService semesterService) {
        this.semesterService = semesterService;
    }

    @PostMapping
    public ResponseEntity<Semester> createSemester(@RequestBody Semester semester) {
        return ResponseEntity.ok(semesterService.createSemester(semester));
    }

    @PutMapping("/{id}")
    public ResponseEntity<Semester> updateSemester(
            @PathVariable Long id,
            @RequestBody Semester semester) {
        return ResponseEntity.ok(semesterService.updateSemester(id, semester));
    }

    @GetMapping("/{id}")
    public ResponseEntity<Semester> getSemesterById(@PathVariable Long id) {
        return ResponseEntity.ok(semesterService.getSemesterById(id));
    }

    @GetMapping("/number/{number}")
    public ResponseEntity<Semester> getBySemesterNumber(
            @PathVariable Integer number) {
        return ResponseEntity.ok(semesterService.getBySemesterNumber(number));
    }

    @GetMapping
    public ResponseEntity<List<Semester>> getAllSemesters() {
        return ResponseEntity.ok(semesterService.getAllSemesters());
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deactivateSemester(@PathVariable Long id) {
        semesterService.deactivateSemester(id);
        return ResponseEntity.noContent().build();
    }
}
