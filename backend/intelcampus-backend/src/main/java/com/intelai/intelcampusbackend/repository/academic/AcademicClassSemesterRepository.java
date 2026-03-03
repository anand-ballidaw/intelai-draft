package com.intelai.intelcampusbackend.repository.academic;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.academic.AcademicClassSemester;

public interface AcademicClassSemesterRepository
        extends JpaRepository<AcademicClassSemester, Long> {

    Optional<AcademicClassSemester> findByAcademicClass_IdAndSemester_Id(
            Long academicClassId,
            Long semesterId
    );

    List<AcademicClassSemester> findBySemester_IdAndActiveTrue(Long semesterId);

    List<AcademicClassSemester> findByAcademicClass_Id(Long academicClassId);
}
