package com.intelai.intelcampusbackend.repository.academic;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intelai.intelcampusbackend.model.academic.Semester;

@Repository
public interface SemesterRepository extends JpaRepository<Semester, Long> {

    /**
     * Find semester by semester number (1, 2, 3, ...)
     */
    Optional<Semester> findBySemesterNumber(Integer semesterNumber);
}
