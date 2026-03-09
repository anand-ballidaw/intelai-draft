export interface ClassRoom {
    id: string
    name: string
    section: string
}

export interface Subject {
    id: string
    name: string
    classId: string
}

export interface TeacherAssignment {
    id: string
    teacherName: string
    subjectId: string
}

export interface AttendanceRecord {
    id: string
    studentName: string
    classId: string
    date: string
    present: boolean
}