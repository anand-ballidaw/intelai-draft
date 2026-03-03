package com.intelai.intelcampusbackend.repository.academic;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.academic.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
}
