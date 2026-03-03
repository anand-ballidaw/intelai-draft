package com.intelai.intelcampusbackend.security.role;

import com.intelai.intelcampusbackend.model.base.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "system_roles")
public class SystemRole extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String roleCode;
    // Examples:
    // SUPER_ADMIN, CEO, DIRECTOR, DEAN, PRINCIPAL
    // PROFESSOR, ASSOCIATE_PROFESSOR, ASSISTANT_PROFESSOR
    // OFFICE_STAFF, LIBRARY_INCHARGE, HOSTEL_WARDEN
    // BUS_DRIVER, CANTEEN_MANAGER, STUDENT, PARENT

    @Column(nullable = false, length = 150)
    private String roleName;

    @Column(length = 255)
    private String description;

    @Column(nullable = false)
    private boolean active = true;

    // ===== Getters & Setters =====

    public Long getId() {
        return id;
    }

    public String getRoleCode() {
        return roleCode;
    }

    public void setRoleCode(String roleCode) {
        this.roleCode = roleCode;
    }

    public String getRoleName() {
        return roleName;
    }

    public void setRoleName(String roleName) {
        this.roleName = roleName;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public boolean isActive() {
        return active;
    }

    public void setActive(boolean active) {
        this.active = active;
    }
}
