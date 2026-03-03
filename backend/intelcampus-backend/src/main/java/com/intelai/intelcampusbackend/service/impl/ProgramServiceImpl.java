package com.intelai.intelcampusbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.academic.Program;
import com.intelai.intelcampusbackend.repository.academic.ProgramRepository;
import com.intelai.intelcampusbackend.service.ProgramService;

import jakarta.persistence.EntityNotFoundException;

@Service
public class ProgramServiceImpl implements ProgramService {

    private final ProgramRepository programRepository;

    public ProgramServiceImpl(ProgramRepository programRepository) {
        this.programRepository = programRepository;
    }

    @Override
    public Program createProgram(Program program) {
        program.setActive(true);
        return programRepository.save(program);
    }

    @Override
    public Program updateProgram(Long id, Program program) {
        Program existing = getById(id);
        existing.setProgramName(program.getProgramName());
        existing.setProgramCode(program.getProgramCode());
        existing.setDescription(program.getDescription());
        existing.setDepartment(program.getDepartment());
        return programRepository.save(existing);
    }

    @Override
    public Program getProgramById(Long id) {
        return getById(id);
    }

    @Override
    public List<Program> getAllPrograms() {
        return programRepository.findAll();
    }

    @Override
    public void deactivateProgram(Long id) {
        Program program = getById(id);
        program.setActive(false);
        programRepository.save(program);
    }

    @Override
    public Program getById(Long id) {
        return programRepository.findById(id)
                .orElseThrow(() -> new EntityNotFoundException("Program not found"));
    }
}
