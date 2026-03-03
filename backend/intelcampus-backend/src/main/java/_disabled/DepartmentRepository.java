package _disabled;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.institution.Department;

//@Repository
public interface DepartmentRepository extends JpaRepository<Department, Long> {
}
