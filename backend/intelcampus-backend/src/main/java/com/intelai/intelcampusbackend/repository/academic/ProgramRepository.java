package com.intelai.intelcampusbackend.repository.academic;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.intelai.intelcampusbackend.model.academic.Program;

@Repository
public interface ProgramRepository extends JpaRepository<Program, Long> {

    Optional<Program> findByProgramCode(String programCode);

    List<Program> findByDepartmentId(Long departmentId);

    boolean existsByProgramCode(String programCode);
}
