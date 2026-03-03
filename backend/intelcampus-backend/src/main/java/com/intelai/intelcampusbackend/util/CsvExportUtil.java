package com.intelai.intelcampusbackend.util;

import java.util.List;
import java.util.StringJoiner;
import java.util.function.Function;

public final class CsvExportUtil {

    private CsvExportUtil() {}

    public static <T> String toCsv(
            List<T> rows,
            String header,
            Function<T, String> rowMapper
    ) {
        StringBuilder sb = new StringBuilder();
        sb.append(header).append("\n");

        for (T row : rows) {
            sb.append(rowMapper.apply(row)).append("\n");
        }
        return sb.toString();
    }

    public static String csvLine(String... values) {
        StringJoiner joiner = new StringJoiner(",");
        for (String v : values) {
            joiner.add(escape(v));
        }
        return joiner.toString();
    }

    private static String escape(String value) {
        if (value == null) return "";
        if (value.contains(",") || value.contains("\"") || value.contains("\n")) {
            return "\"" + value.replace("\"", "\"\"") + "\"";
        }
        return value;
    }
}
