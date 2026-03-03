package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.Semester;

public interface SemesterService {

    Semester createSemester(Semester semester);

    Semester updateSemester(Long id, Semester semester);

    Semester getSemesterById(Long id);

    Semester getBySemesterNumber(Integer semesterNumber);

    List<Semester> getAllSemesters();

    void deactivateSemester(Long id);

    // internal strict usage
    Semester getById(Long id);
}
