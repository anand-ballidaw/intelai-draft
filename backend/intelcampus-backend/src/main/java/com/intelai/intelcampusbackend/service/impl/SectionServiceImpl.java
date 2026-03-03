package com.intelai.intelcampusbackend.service.impl;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;
import com.intelai.intelcampusbackend.model.academic.Section;
import com.intelai.intelcampusbackend.model.academic.SectionStatus;
import com.intelai.intelcampusbackend.repository.academic.AcademicClassRepository;
import com.intelai.intelcampusbackend.repository.academic.SectionRepository;
import com.intelai.intelcampusbackend.service.SectionService;

@Service
public class SectionServiceImpl implements SectionService {

    private final SectionRepository sectionRepository;
    private final AcademicClassRepository academicClassRepository;

    public SectionServiceImpl(
            SectionRepository sectionRepository,
            AcademicClassRepository academicClassRepository
    ) {
        this.sectionRepository = sectionRepository;
        this.academicClassRepository = academicClassRepository;
    }

    @Override
    public Section createSection(Long academicClassId, Section section) {
        AcademicClass academicClass = academicClassRepository.findById(academicClassId)
                .orElseThrow(() -> new RuntimeException("AcademicClass not found"));

        section.setAcademicClass(academicClass);
        section.setStatus(SectionStatus.ACTIVE);
        section.setCreatedAt(LocalDateTime.now());
        section.setUpdatedAt(LocalDateTime.now());

        return sectionRepository.save(section);
    }

    @Override
    public Section updateSection(Long sectionId, Section section) {
        Section existing = getSectionById(sectionId);

        existing.setName(section.getName());
        existing.setUpdatedAt(LocalDateTime.now());

        return sectionRepository.save(existing);
    }

    @Override
    public Section getSectionById(Long sectionId) {
        return sectionRepository.findById(sectionId)
                .orElseThrow(() -> new RuntimeException("Section not found"));
    }

    @Override
    public List<Section> getSectionsByAcademicClass(Long academicClassId) {
        return sectionRepository.findByAcademicClass_IdAndStatus(
                academicClassId,
                SectionStatus.ACTIVE
        );
    }

    @Override
    public void deactivateSection(Long sectionId) {
        Section section = getSectionById(sectionId);
        section.setStatus(SectionStatus.INACTIVE);
        section.setUpdatedAt(LocalDateTime.now());
        sectionRepository.save(section);
    }
}
