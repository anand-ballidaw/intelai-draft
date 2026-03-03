package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;

public interface AcademicClassService {

    AcademicClass create(Long courseId, AcademicClass academicClass);

    AcademicClass getById(Long id);

    List<AcademicClass> getByCourse(Long courseId);
}
