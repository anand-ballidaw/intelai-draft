package com.intelai.intelcampusbackend.service;

import com.intelai.intelcampusbackend.model.finance.StudentWallet;

public interface StudentWalletService {

    StudentWallet getOrCreateWallet(Long studentId);

    StudentWallet applyAmount(Long studentId, Double amount);
}
