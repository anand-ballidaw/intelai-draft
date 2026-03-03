-- Institution
CREATE TABLE institutions (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    country VARCHAR(100) NOT NULL,
    active BOOLEAN NOT NULL,
    created_at TIMESTAMP,
    updated_at TIMESTAMP
);

-- Department
CREATE TABLE departments (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    institution_id BIGINT NOT NULL,
    CONSTRAINT fk_department_institution
        FOREIGN KEY (institution_id) REFERENCES institutions(id)
);

-- Designation
CREATE TABLE designations (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL UNIQUE,
    teaching_role BOOLEAN NOT NULL
);

-- Program
CREATE TABLE programs (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    department_id BIGINT NOT NULL,
    CONSTRAINT fk_program_department
        FOREIGN KEY (department_id) REFERENCES departments(id)
);

-- Academic Class
CREATE TABLE academic_classes (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    program_id BIGINT NOT NULL,
    CONSTRAINT fk_class_program
        FOREIGN KEY (program_id) REFERENCES programs(id)
);

-- Section
CREATE TABLE sections (
    id BIGSERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    academic_class_id BIGINT NOT NULL,
    CONSTRAINT fk_section_class
        FOREIGN KEY (academic_class_id) REFERENCES academic_classes(id)
);
