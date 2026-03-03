package com.intelai.intelcampusbackend.service;

import java.util.List;
import java.util.Optional;

import com.intelai.intelcampusbackend.model.academic.Department;

public interface DepartmentService {

    Department createDepartment(Department department);

    Department updateDepartment(Long id, Department department);

    Optional<Department> getDepartmentById(Long id);

    List<Department> getAllDepartments();

    void deactivateDepartment(Long id);
}
