package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.model.academic.Course;
import com.intelai.intelcampusbackend.model.academic.Program;
import com.intelai.intelcampusbackend.repository.academic.CourseRepository;
import com.intelai.intelcampusbackend.repository.academic.ProgramRepository;
import com.intelai.intelcampusbackend.service.CourseService;

@Service
@Transactional
public class CourseServiceImpl implements CourseService {

    private final CourseRepository courseRepository;
    private final ProgramRepository programRepository;

    public CourseServiceImpl(
            CourseRepository courseRepository,
            ProgramRepository programRepository
    ) {
        this.courseRepository = courseRepository;
        this.programRepository = programRepository;
    }

    @Override
    public Course createCourse(Long programId, Course course) {

        Program program = programRepository.findById(programId)
                .orElseThrow(() -> new RuntimeException(
                        "Program not found with id: " + programId
                ));

        // 🔑 THIS WAS MISSING
        course.setProgram(program);

        return courseRepository.save(course);
    }
}
