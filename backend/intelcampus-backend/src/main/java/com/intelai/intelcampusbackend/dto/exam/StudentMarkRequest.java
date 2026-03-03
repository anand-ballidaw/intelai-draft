package com.intelai.intelcampusbackend.dto.exam;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class StudentMarkRequest {

    private Long studentId;
    private Integer marksObtained;
}
