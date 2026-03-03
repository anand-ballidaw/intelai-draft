package com.intelai.intelcampusbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.academic.Semester;
import com.intelai.intelcampusbackend.repository.academic.SemesterRepository;
import com.intelai.intelcampusbackend.service.SemesterService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class SemesterServiceImpl implements SemesterService {

    private final SemesterRepository semesterRepository;

    public SemesterServiceImpl(SemesterRepository semesterRepository) {
        this.semesterRepository = semesterRepository;
    }

    @Override
    public Semester createSemester(Semester semester) {
        semester.setActive(true);
        return semesterRepository.save(semester);
    }

    @Override
    public Semester updateSemester(Long id, Semester semester) {
        Semester existing = getById(id);
        existing.setSemesterName(semester.getSemesterName());
        existing.setSemesterNumber(semester.getSemesterNumber());
        existing.setDescription(semester.getDescription());
        return semesterRepository.save(existing);
    }

    @Override
    public Semester getSemesterById(Long id) {
        return getById(id);
    }

    @Override
    public Semester getBySemesterNumber(Integer semesterNumber) {
        return semesterRepository.findBySemesterNumber(semesterNumber)
                .orElseThrow(() -> new EntityNotFoundException("Semester not found"));
    }

    @Override
    public List<Semester> getAllSemesters() {
        return semesterRepository.findAll();
    }

    @Override
    public void deactivateSemester(Long id) {
        Semester semester = getById(id);
        semester.setActive(false);
        semesterRepository.save(semester);
    }

    @Override
    public Semester getById(Long id) {
        return semesterRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Semester not found"));
    }
}
