package com.intelai.intelcampusbackend.repository.exam;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.GradeScale;

public interface GradeScaleRepository extends JpaRepository<GradeScale, Long> {
}
