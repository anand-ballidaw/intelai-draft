package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;

public interface AcademicClassSemesterService {

    AcademicClassSemester assignSemesterToAcademicClass(
            Long academicClassId,
            Long semesterId
    );

    List<AcademicClassSemester> getAcademicClassesBySemester(Long semesterId);

    void deactivateMapping(Long mappingId);
}
