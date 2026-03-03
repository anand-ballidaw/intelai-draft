"use client";

import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";

interface Student {
    rank: number;
    name: string;
    score: number;
    class: string;
}

const mockStudents: Student[] = [
    { rank: 1, name: "Arjun Kumar", score: 98, class: "10A" },
    { rank: 2, name: "Priya Sharma", score: 95, class: "10A" },
    { rank: 3, name: "Rahul Verma", score: 92, class: "10B" },
    { rank: 4, name: "Sneha Reddy", score: 89, class: "10B" },
    { rank: 5, name: "Vikram Singh", score: 87, class: "10C" },
];

export function RankingsTable() {
    const [search, setSearch] = useState("");

    const filteredStudents = mockStudents.filter((student) =>
        student.name.toLowerCase().includes(search.toLowerCase())
    );

    return (
        <Card>
            <CardHeader>
                <CardTitle>Ranking List</CardTitle>
            </CardHeader>

            <CardContent className="space-y-6">
                <Input
                    placeholder="Search student..."
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                />

                <div className="overflow-x-auto">
                    <table className="w-full border-collapse text-sm">
                        <thead>
                            <tr className="border-b text-left">
                                <th className="py-3">Rank</th>
                                <th className="py-3">Name</th>
                                <th className="py-3">Score</th>
                                <th className="py-3">Class</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredStudents.map((student) => (
                                <tr key={student.rank} className="border-b hover:bg-muted/40">
                                    <td className="py-3 font-semibold">{student.rank}</td>
                                    <td className="py-3">{student.name}</td>
                                    <td className="py-3">{student.score}</td>
                                    <td className="py-3">{student.class}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    {filteredStudents.length === 0 && (
                        <p className="mt-4 text-sm text-muted-foreground">
                            No students found.
                        </p>
                    )}
                </div>
            </CardContent>
        </Card>
    );
}