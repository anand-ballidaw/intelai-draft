package com.intelai.intelcampusbackend.dto.exam;

public class RankHistogramItem {

    private String range;
    private Long count;

    public RankHistogramItem() {}

    public RankHistogramItem(String range, Long count) {
        this.range = range;
        this.count = count;
    }

    public String getRange() {
        return range;
    }

    public void setRange(String range) {
        this.range = range;
    }

    public Long getCount() {
        return count;
    }

    public void setCount(Long count) {
        this.count = count;
    }
}
