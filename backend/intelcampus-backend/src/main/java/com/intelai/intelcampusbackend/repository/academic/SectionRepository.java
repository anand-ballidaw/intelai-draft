package com.intelai.intelcampusbackend.repository.academic;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.academic.Section;
import com.intelai.intelcampusbackend.model.academic.SectionStatus;

public interface SectionRepository extends JpaRepository<Section, Long> {

    List<Section> findByAcademicClass_Id(Long academicClassId);

    List<Section> findByAcademicClass_IdAndStatus(
            Long academicClassId,
            SectionStatus status
    );
}
