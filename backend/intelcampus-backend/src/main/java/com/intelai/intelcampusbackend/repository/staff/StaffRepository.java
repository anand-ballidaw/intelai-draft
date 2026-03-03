package com.intelai.intelcampusbackend.repository.staff;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.staff.Staff;

public interface StaffRepository extends JpaRepository<Staff, Long> {
}
