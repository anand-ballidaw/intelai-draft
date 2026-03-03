package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;
import com.intelai.intelcampusbackend.service.AcademicClassSemesterService;

@RestController
@RequestMapping("/api/academic-class-semesters")
public class AcademicClassSemesterController {

    private final AcademicClassSemesterService service;

    public AcademicClassSemesterController(
            AcademicClassSemesterService service) {
        this.service = service;
    }

    @PostMapping
    public AcademicClassSemester assignSemester(
            @RequestParam Long academicClassId,
            @RequestParam Long semesterId) {
        return service.assignSemesterToAcademicClass(
                academicClassId, semesterId);
    }

    @GetMapping("/by-semester/{semesterId}")
    public List<AcademicClassSemester> getBySemester(
            @PathVariable Long semesterId) {
        return service.getAcademicClassesBySemester(semesterId);
    }

    @PutMapping("/{id}/deactivate")
    public void deactivate(@PathVariable Long id) {
        service.deactivateMapping(id);
    }
}
