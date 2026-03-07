import { UserRole } from "../auth/roles";

export interface MockUser {
    id: string;
    name: string;
    email: string;
    password: string;
    role: UserRole;
    institution: string;
    subscriptionActive: boolean;
}

export const mockUsers: MockUser[] = [
    {
        id: "1",
        name: "Super Admin",
        email: "superadmin@intelcampus.com",
        password: "123456",
        role: "superadmin",
        institution: "IntelCampus Platform",
        subscriptionActive: true,
    },
    {
        id: "2",
        name: "Principal Raj",
        email: "principal@college.com",
        password: "123456",
        role: "principal",
        institution: "Global Engineering College",
        subscriptionActive: true,
    },
    {
        id: "3",
        name: "Teacher Anita",
        email: "teacher@college.com",
        password: "123456",
        role: "teacher",
        institution: "Global Engineering College",
        subscriptionActive: true,
    },
    {
        id: "4",
        name: "Student Arjun",
        email: "student@college.com",
        password: "123456",
        role: "student",
        institution: "Global Engineering College",
        subscriptionActive: true,
    },
    {
        id: "5",
        name: "Parent Kumar",
        email: "parent@college.com",
        password: "123456",
        role: "parent",
        institution: "Global Engineering College",
        subscriptionActive: true,
    },
    {
        id: "6",
        name: "Driver Ravi",
        email: "driver@college.com",
        password: "123456",
        role: "driver",
        institution: "Global Engineering College",
        subscriptionActive: true,
    },
];