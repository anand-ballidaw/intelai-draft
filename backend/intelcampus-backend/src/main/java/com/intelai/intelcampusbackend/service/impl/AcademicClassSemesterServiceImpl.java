package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;
import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;
import com.intelai.intelcampusbackend.model.academic.Semester;
import com.intelai.intelcampusbackend.repository.academic.AcademicClassRepository;
import com.intelai.intelcampusbackend.repository.academic.AcademicClassSemesterRepository;
import com.intelai.intelcampusbackend.repository.academic.SemesterRepository;
import com.intelai.intelcampusbackend.service.AcademicClassSemesterService;

@Service
@Transactional
public class AcademicClassSemesterServiceImpl
        implements AcademicClassSemesterService {

    private final AcademicClassRepository academicClassRepository;
    private final SemesterRepository semesterRepository;
    private final AcademicClassSemesterRepository mappingRepository;

    public AcademicClassSemesterServiceImpl(
            AcademicClassRepository academicClassRepository,
            SemesterRepository semesterRepository,
            AcademicClassSemesterRepository mappingRepository) {

        this.academicClassRepository = academicClassRepository;
        this.semesterRepository = semesterRepository;
        this.mappingRepository = mappingRepository;
    }

    @Override
    public AcademicClassSemester assignSemesterToAcademicClass(
            Long academicClassId,
            Long semesterId) {

        AcademicClass academicClass = academicClassRepository.findById(academicClassId)
                .orElseThrow(() -> new RuntimeException("AcademicClass not found"));

        Semester semester = semesterRepository.findById(semesterId)
                .orElseThrow(() -> new RuntimeException("Semester not found"));

        mappingRepository.findByAcademicClass_IdAndSemester_Id(
                academicClassId, semesterId
        ).ifPresent(m -> {
            throw new RuntimeException("Mapping already exists");
        });

        AcademicClassSemester mapping = new AcademicClassSemester();
        mapping.setAcademicClass(academicClass);
        mapping.setSemester(semester);
        mapping.setActive(true);

        return mappingRepository.save(mapping);
    }

    @Override
    public java.util.List<AcademicClassSemester> getAcademicClassesBySemester(Long semesterId) {
        return mappingRepository.findBySemester_IdAndActiveTrue(semesterId);
    }

    @Override
    public void deactivateMapping(Long mappingId) {
        AcademicClassSemester mapping = mappingRepository.findById(mappingId)
                .orElseThrow(() -> new RuntimeException("Mapping not found"));
        mapping.setActive(false);
        mappingRepository.save(mapping);
    }
}
