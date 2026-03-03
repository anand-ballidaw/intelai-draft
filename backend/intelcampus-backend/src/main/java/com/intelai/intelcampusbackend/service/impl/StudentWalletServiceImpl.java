package com.intelai.intelcampusbackend.service.impl;

import org.springframework.stereotype.Service;

import com.intelai.intelcampusbackend.model.finance.StudentWallet;
import com.intelai.intelcampusbackend.repository.finance.StudentWalletRepository;
import com.intelai.intelcampusbackend.service.StudentWalletService;

@Service
public class StudentWalletServiceImpl implements StudentWalletService {

    private final StudentWalletRepository walletRepository;

    public StudentWalletServiceImpl(
            StudentWalletRepository walletRepository) {
        this.walletRepository = walletRepository;
    }

    @Override
    public StudentWallet getOrCreateWallet(Long studentId) {
        return walletRepository.findByStudentId(studentId)
                .orElseGet(() -> {
                    StudentWallet wallet = new StudentWallet();
                    wallet.setStudentId(studentId);
                    wallet.setBalance(0.0);
                    return walletRepository.save(wallet);
                });
    }

    @Override
    public StudentWallet applyAmount(Long studentId, Double amount) {
        StudentWallet wallet = getOrCreateWallet(studentId);
        wallet.setBalance(wallet.getBalance() + amount);
        return walletRepository.save(wallet);
    }
}
