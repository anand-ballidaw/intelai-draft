package com.intelai.intelcampusbackend.service.impl;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.intelai.intelcampusbackend.model.academic.Course;
import com.intelai.intelcampusbackend.model.staff.Staff;
import com.intelai.intelcampusbackend.model.timetable.TimetablePeriod;
import com.intelai.intelcampusbackend.repository.academic.CourseRepository;
import com.intelai.intelcampusbackend.repository.staff.StaffRepository;
import com.intelai.intelcampusbackend.repository.timetable.TimetablePeriodRepository;
import com.intelai.intelcampusbackend.service.TimetableAssignmentService;

@Service
@Transactional
public class TimetableAssignmentServiceImpl implements TimetableAssignmentService {

    private final TimetablePeriodRepository timetablePeriodRepository;
    private final CourseRepository courseRepository;
    private final StaffRepository staffRepository;

    public TimetableAssignmentServiceImpl(
            TimetablePeriodRepository timetablePeriodRepository,
            CourseRepository courseRepository,
            StaffRepository staffRepository
    ) {
        this.timetablePeriodRepository = timetablePeriodRepository;
        this.courseRepository = courseRepository;
        this.staffRepository = staffRepository;
    }

    @Override
    public void assignCourse(Long timetablePeriodId, Long courseId) {

        TimetablePeriod period = timetablePeriodRepository.findById(timetablePeriodId)
                .orElseThrow(() -> new IllegalArgumentException("TimetablePeriod not found"));

        Course course = courseRepository.findById(courseId)
                .orElseThrow(() -> new IllegalArgumentException("Course not found"));

        period.setCourse(course);
        timetablePeriodRepository.save(period);
    }

    @Override
    public void assignStaff(Long timetablePeriodId, Long staffId) {

        TimetablePeriod period = timetablePeriodRepository.findById(timetablePeriodId)
                .orElseThrow(() -> new IllegalArgumentException("TimetablePeriod not found"));

        Staff staff = staffRepository.findById(staffId)
                .orElseThrow(() -> new IllegalArgumentException("Staff not found"));

        if (!Boolean.TRUE.equals(staff.getActive())) {
            throw new IllegalStateException("Inactive staff cannot be assigned");
        }

        period.setStaff(staff);
        timetablePeriodRepository.save(period);
    }

    @Override
    public List<TimetablePeriod> getPeriodsByDay(Long timetableDayId) {
        return timetablePeriodRepository.findByTimetableDay_IdAndActiveTrue(timetableDayId);
    }
}
