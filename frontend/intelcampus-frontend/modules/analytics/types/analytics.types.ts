export interface DashboardStats {

    totalStudents: number
    totalEmployees: number
    totalCourses: number
    totalDepartments: number

    revenueThisMonth: number
    transportUsers: number
    libraryBooksIssued: number
}

export interface EnrollmentTrend {

    month: string
    students: number
}

export interface AttendanceTrend {

    date: string
    attendanceRate: number
}

export interface FacultyWorkload {

    employeeId: string
    employeeName: string
    subjects: number
    classes: number
}