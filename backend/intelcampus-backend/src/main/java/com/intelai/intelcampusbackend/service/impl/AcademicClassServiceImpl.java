package com.intelai.intelcampusbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.model.academic.AcademicClass;
import com.intelai.intelcampusbackend.model.academic.Course;
import com.intelai.intelcampusbackend.repository.academic.AcademicClassRepository;
import com.intelai.intelcampusbackend.repository.academic.CourseRepository;
import com.intelai.intelcampusbackend.service.AcademicClassService;

@Service
@Transactional
public class AcademicClassServiceImpl implements AcademicClassService {

    private final AcademicClassRepository academicClassRepository;
    private final CourseRepository courseRepository;

    public AcademicClassServiceImpl(
            AcademicClassRepository academicClassRepository,
            CourseRepository courseRepository
    ) {
        this.academicClassRepository = academicClassRepository;
        this.courseRepository = courseRepository;
    }

    @Override
    public AcademicClass create(Long courseId, AcademicClass academicClass) {

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new RuntimeException(
                        "Course not found with id: " + courseId
                ));

        academicClass.setCourse(course);

        return academicClassRepository.save(academicClass);
    }

    @Override
    public AcademicClass getById(Long id) {
        return academicClassRepository.findById(id)
                .orElseThrow(() -> new RuntimeException(
                        "AcademicClass not found with id: " + id
                ));
    }

    @Override
    public List<AcademicClass> getByCourse(Long courseId) {
        return academicClassRepository.findByCourse_Id(courseId);
    }
}
