package com.intelai.intelcampusbackend.service;

import java.util.List;

import com.intelai.intelcampusbackend.model.academic.Program;

public interface ProgramService {

    Program createProgram(Program program);

    Program updateProgram(Long id, Program program);

    Program getProgramById(Long id);

    List<Program> getAllPrograms();

    void deactivateProgram(Long id);

    // internal strict usage
    Program getById(Long id);
}
