package com.intelai.intelcampusbackend.repository.finance;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intelai.intelcampusbackend.model.finance.FeeStructure;

@Repository
public interface FeeStructureRepository extends JpaRepository<FeeStructure, Long> {

    Optional<FeeStructure> findByCourse_IdAndActiveTrue(Long courseId);

}
