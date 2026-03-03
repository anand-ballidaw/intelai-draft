package com.intelai.intelcampusbackend.repository.attendance;

import java.time.LocalDateTime;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.intelai.intelcampusbackend.entity.attendance.AttendanceAudit;

public interface AttendanceAuditRepository extends JpaRepository<AttendanceAudit, Long> {

    @Query("""
        SELECT a
        FROM AttendanceAudit a
        WHERE a.studentId = :studentId
          AND a.classId = :classId
          AND a.createdAt BETWEEN :fromDateTime AND :toDateTime
    """)
    List<AttendanceAudit> findStudentAuditBetweenDates(
            @Param("studentId") Long studentId,
            @Param("classId") Long classId,
            @Param("fromDateTime") LocalDateTime fromDateTime,
            @Param("toDateTime") LocalDateTime toDateTime
    );

    @Query("""
        SELECT a
        FROM AttendanceAudit a
        WHERE a.classId = :classId
          AND a.subjectId = :subjectId
          AND a.createdAt BETWEEN :fromDateTime AND :toDateTime
    """)
    List<AttendanceAudit> findClassAuditBetweenDates(
            @Param("classId") Long classId,
            @Param("subjectId") Long subjectId,
            @Param("fromDateTime") LocalDateTime fromDateTime,
            @Param("toDateTime") LocalDateTime toDateTime
    );
}
