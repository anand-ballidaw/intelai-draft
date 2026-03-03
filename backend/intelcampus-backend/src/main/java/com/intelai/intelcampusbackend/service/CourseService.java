package com.intelai.intelcampusbackend.service;

import com.intelai.intelcampusbackend.model.academic.Course;

public interface CourseService {

    Course createCourse(Long programId, Course course);
}
