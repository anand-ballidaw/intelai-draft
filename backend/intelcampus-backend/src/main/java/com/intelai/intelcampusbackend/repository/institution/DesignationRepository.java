package com.intelai.intelcampusbackend.repository.institution;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intelai.intelcampusbackend.model.institution.Designation;

@Repository
public interface DesignationRepository extends JpaRepository<Designation, Long> {
}
