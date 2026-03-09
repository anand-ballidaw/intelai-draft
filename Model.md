# IntelCampus Data Model

## Overview

This document defines the core data entities used by the IntelCampus platform.

IntelCampus is an Institutional Operating System designed to manage the entire lifecycle of institutional operations including:

- academic management
- institutional hierarchy
- SmartClass learning
- communication
- admissions
- marketing
- transport
- finance
- visitor management
- meeting coordination

The data model is designed to support **multi-role institutional operations** and **scalable platform growth**.

---

# 1. Institution

Represents an educational organization such as a school, college, or university.

Fields:

- id
- name
- type
- address
- contactEmail
- contactPhone
- createdAt

Relationships:

- has many departments
- has many users
- has many classes
- has many transport routes
- has many announcements

---

# 2. Department

Represents an institutional unit such as:

- academic departments
- administrative departments
- finance
- admissions
- marketing

Fields:

- id
- name
- institutionId
- headUserId
- createdAt

Relationships:

- belongs to institution
- has many users
- has many courses

---

# 3. User

Represents all platform users.

Fields:

- id
- firstName
- lastName
- email
- passwordHash
- phone
- role
- institutionId
- departmentId
- status
- createdAt

Supported roles include:

- CEO
- Director
- Manager
- Principal
- Dean
- HOD
- Professor
- Teacher
- ClassTeacher
- Student
- Parent
- Driver
- Admin
- Finance
- HR
- OfficeAssistant
- AdmissionOfficer
- MarketingExecutive

---

# 4. Class

Represents a group of students.

Fields:

- id
- name
- section
- academicYear
- institutionId
- classTeacherId

Relationships:

- belongs to institution
- has many students
- has many courses
- has many attendance records

---

# 5. Student

Represents student academic profiles.

Fields:

- id
- userId
- classId
- admissionNumber
- rollNumber
- parentId
- transportRouteId
- status

Relationships:

- belongs to class
- belongs to parent
- has many attendance records
- has many exam results

---

# 6. Parent

Represents guardians of students.

Fields:

- id
- userId
- relation
- studentId

Relationships:

- belongs to student
- can access student academic information

---

# 7. Course

Represents subjects or academic courses.

Fields:

- id
- name
- description
- departmentId
- teacherId
- classId

Relationships:

- belongs to department
- belongs to class
- has many SmartClass resources
- has many exams

---

# 8. SmartClass Resource

Digital learning materials used in courses.

Fields:

- id
- courseId
- title
- type
- resourceUrl
- uploadedBy
- createdAt

Supported resource types:

- video
- pdf
- document
- external link

---

# 9. Announcement

Institution-wide communication.

Fields:

- id
- institutionId
- title
- message
- createdBy
- targetRole
- createdAt

Targets may include:

- students
- teachers
- parents
- all users

---

# 10. Message

Internal messaging between users.

Fields:

- id
- senderId
- receiverId
- message
- createdAt
- readStatus

---

# 11. Admission Application

Represents student admission requests.

Fields:

- id
- studentName
- parentName
- phone
- email
- courseInterested
- status
- assignedTo
- createdAt

Status values:

- new
- contacted
- interviewScheduled
- admitted
- rejected

---

# 12. Marketing Lead

Represents potential student enquiries.

Fields:

- id
- name
- phone
- email
- source
- campaign
- status
- assignedTo
- createdAt

Lead sources:

- website
- facebook
- instagram
- referral
- walk-in

---

# 13. Visitor

Tracks visitors entering the institution.

Fields:

- id
- name
- phone
- purpose
- visitingDepartment
- visitingPersonId
- checkInTime
- checkOutTime
- recordedBy

---

# 14. Meeting

Institutional meetings.

Fields:

- id
- title
- description
- organizerId
- departmentId
- meetingTime
- location

---

# 15. Meeting Participant

Tracks meeting attendees.

Fields:

- id
- meetingId
- userId
- status

Status values:

- invited
- accepted
- declined

---

# 16. Transport Route

Represents bus routes.

Fields:

- id
- routeName
- driverId
- vehicleNumber
- institutionId

---

# 17. Transport Stop

Represents stops on routes.

Fields:

- id
- routeId
- stopName
- stopOrder

---

# 18. Attendance

Tracks student attendance.

Fields:

- id
- studentId
- classId
- date
- status
- markedBy

Status:

- present
- absent
- late

---

# 19. Exam

Represents examinations.

Fields:

- id
- name
- classId
- courseId
- examDate
- totalMarks
- passMarks

---

# 20. Exam Result

Stores exam scores.

Fields:

- id
- examId
- studentId
- marksObtained
- grade
- rank

---

# 21. Payment

Represents financial transactions.

Fields:

- id
- studentId
- amount
- paymentType
- paymentDate
- status

Payment types:

- tuition
- transport
- hostel
- other

---

# Role Based Access Model

IntelCampus enforces strict role-based access.

Access permissions depend on:

- user role
- institution
- department
- ownership

Examples:

Teacher:

- manage courses
- mark attendance
- upload SmartClass materials

Principal:

- manage academic operations
- view institutional reports

Finance:

- manage payments
- generate financial reports

Marketing:

- manage leads
- track campaigns

Admissions:

- manage student applications