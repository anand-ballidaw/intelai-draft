package com.intelai.intelcampusbackend.model.institution;

import com.intelai.intelcampusbackend.model.base.BaseEntity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "designations")
public class Designation extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false, unique = true, length = 100)
    private String designationName;

    @Column(nullable = false, length = 50)
    private String category;
    // Example values:
    // MANAGEMENT, ACADEMIC, NON_TEACHING, SUPPORT, TRANSPORT, HOSTEL, CANTEEN

    @Column(length = 255)
    private String description;

    @Column(nullable = false)
    private boolean active = true;

    // ===== Getters & Setters =====

    public Long getId() {
        return id;
    }

    public String getDesignationName() {
        return designationName;
    }

    public void setDesignationName(String designationName) {
        this.designationName = designationName;
    }

    public String getCategory() {
        return category;
    }

    public void setCategory(String category) {
        this.category = category;
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
