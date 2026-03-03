package com.intelai.intelcampusbackend.repository.finance;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.intelai.intelcampusbackend.model.finance.StudentWallet;

public interface StudentWalletRepository
        extends JpaRepository<StudentWallet, Long> {

    Optional<StudentWallet> findByStudentId(Long studentId);
}
