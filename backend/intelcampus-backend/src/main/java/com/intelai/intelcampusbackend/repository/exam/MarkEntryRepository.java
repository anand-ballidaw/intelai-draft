package com.intelai.intelcampusbackend.repository.exam;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.entity.exam.MarkEntry;

public interface MarkEntryRepository extends JpaRepository<MarkEntry, Long> {

    List<MarkEntry> findByExamId(Long examId);
}
