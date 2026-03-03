package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;
import com.intelai.intelcampusbackend.service.AcademicClassService;

@RestController
@RequestMapping("/api/academic-classes")
public class AcademicClassController {

    private final AcademicClassService academicClassService;

    public AcademicClassController(AcademicClassService academicClassService) {
        this.academicClassService = academicClassService;
    }

    @PostMapping
    public AcademicClass create(
            @RequestParam Long courseId,
            @RequestBody AcademicClass academicClass
    ) {
        return academicClassService.create(courseId, academicClass);
    }

    @GetMapping("/{id}")
    public AcademicClass getById(@PathVariable Long id) {
        return academicClassService.getById(id);
    }

    @GetMapping("/by-course/{courseId}")
    public List<AcademicClass> getByCourse(@PathVariable Long courseId) {
        return academicClassService.getByCourse(courseId);
    }
}
