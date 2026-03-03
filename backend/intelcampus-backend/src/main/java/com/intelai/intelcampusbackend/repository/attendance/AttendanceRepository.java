package com.intelai.intelcampusbackend.repository.attendance;

import java.time.LocalDate;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intelai.intelcampusbackend.model.attendance.Attendance;
import com.intelai.intelcampusbackend.model.attendance.AttendanceStatus;

public interface AttendanceRepository extends JpaRepository<Attendance, Long> {

    /* =========================
       REGULARIZATION / GRACE
       ========================= */

    @Query("""
        SELECT COUNT(a)
        FROM Attendance a
        WHERE a.student.id = :studentId
          AND a.timetablePeriod.course.id = :courseId
          AND a.attendanceDate BETWEEN :startDate AND :endDate
          AND a.status = com.intelai.intelcampusbackend.model.attendance.AttendanceStatus.ABSENT
    """)
    long countAbsentForStudentAndCourseBetweenDates(
            @Param("studentId") Long studentId,
            @Param("courseId") Long courseId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );

    @Query("""
        SELECT CASE WHEN COUNT(a) > 0 THEN true ELSE false END
        FROM Attendance a
        WHERE a.student.id = :studentId
          AND a.timetablePeriod.course.id = :courseId
          AND a.attendanceDate BETWEEN :startDate AND :endDate
          AND a.status = com.intelai.intelcampusbackend.model.attendance.AttendanceStatus.ABSENT
    """)
    boolean hasAbsentForStudentAndCourseBetweenDates(
            @Param("studentId") Long studentId,
            @Param("courseId") Long courseId,
            @Param("startDate") LocalDate startDate,
            @Param("endDate") LocalDate endDate
    );

    /* =========================
       ANALYTICS / DASHBOARD
       ========================= */

    long countByStudent_IdAndAttendanceDateBetween(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );

    long countByStudent_IdAndStatusAndAttendanceDateBetween(
            Long studentId,
            AttendanceStatus status,
            LocalDate startDate,
            LocalDate endDate
    );

    long countByStudent_AcademicClass_IdAndAttendanceDateBetween(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );

    long countDistinctStudent_IdByStudent_AcademicClass_Id(
            Long academicClassId
    );

    /* =========================
       REPORTS / EXPORT
       ========================= */

    List<Attendance> findByStudent_IdAndAttendanceDateBetween(
            Long studentId,
            LocalDate startDate,
            LocalDate endDate
    );

    List<Attendance> findByStudent_AcademicClass_IdAndAttendanceDateBetween(
            Long academicClassId,
            LocalDate startDate,
            LocalDate endDate
    );

    /* =========================
       AUTO ATTENDANCE
       ========================= */

    boolean existsByStudent_IdAndTimetablePeriod_Id(
            Long studentId,
            Long timetablePeriodId
    );
}
