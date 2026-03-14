export type Role =
    | "subscriber"
    | "ceo"
    | "director"
    | "manager"
    | "principal"
    | "vice_principal"
    | "admin"
    | "dean"
    | "hod"
    | "professor"
    | "associate_professor"
    | "assistant_professor"
    | "teacher"
    | "hr"
    | "supervisor"
    | "marketing"
    | "department_staff"
    | "front_office"
    | "driver"
    | "parent"
    | "student"

export const ROLE_HIERARCHY_LEVEL: Record<Role, number> = {

    subscriber: 100,

    ceo: 95,

    director: 90,

    manager: 85,

    principal: 80,

    vice_principal: 75,

    admin: 70,

    dean: 65,

    hod: 60,

    professor: 55,

    associate_professor: 50,

    assistant_professor: 45,

    teacher: 40,

    hr: 35,

    supervisor: 30,

    marketing: 25,

    department_staff: 20,

    front_office: 15,

    driver: 10,

    parent: 5,

    student: 1
}