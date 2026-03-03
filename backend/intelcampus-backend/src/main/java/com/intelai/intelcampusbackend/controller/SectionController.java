package com.intelai.intelcampusbackend.controller;

import java.util.List;

import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.intelai.intelcampusbackend.model.academic.Section;
import com.intelai.intelcampusbackend.service.SectionService;

@RestController
@RequestMapping("/api/sections")
public class SectionController {

    private final SectionService sectionService;

    public SectionController(SectionService sectionService) {
        this.sectionService = sectionService;
    }

    // CREATE section under an AcademicClass
    @PostMapping("/academic-class/{academicClassId}")
    public Section createSection(
            @PathVariable Long academicClassId,
            @RequestBody Section section
    ) {
        return sectionService.createSection(academicClassId, section);
    }

    // UPDATE section
    @PutMapping("/{sectionId}")
    public Section updateSection(
            @PathVariable Long sectionId,
            @RequestBody Section section
    ) {
        return sectionService.updateSection(sectionId, section);
    }

    // GET section by ID
    @GetMapping("/{sectionId}")
    public Section getSectionById(@PathVariable Long sectionId) {
        return sectionService.getSectionById(sectionId);
    }

    // GET sections by AcademicClass
    @GetMapping("/academic-class/{academicClassId}")
    public List<Section> getSectionsByAcademicClass(
            @PathVariable Long academicClassId
    ) {
        return sectionService.getSectionsByAcademicClass(academicClassId);
    }

    // DEACTIVATE section
    @DeleteMapping("/{sectionId}")
    public void deactivateSection(@PathVariable Long sectionId) {
        sectionService.deactivateSection(sectionId);
    }
}
