package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.Section;

public interface SectionService {

    Section createSection(Long academicClassId, Section section);

    Section updateSection(Long sectionId, Section section);

    Section getSectionById(Long sectionId);

    List<Section> getSectionsByAcademicClass(Long academicClassId);

    void deactivateSection(Long sectionId);
}
