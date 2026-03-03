package com.intelai.intelcampusbackend.repository.academic;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;

public interface AcademicClassRepository extends JpaRepository<AcademicClass, Long> {

    List<AcademicClass> findByCourse_Id(Long courseId);
}
