# IntelCampus Data Model

## Overview

This document defines the logical data model used by the IntelCampus platform.

IntelCampus is an **Institutional Operating System** designed to manage the entire academic, administrative, operational, and communication workflow of educational institutions.

The data model supports:

- Institutional hierarchy
- Academic management
- Role based access control
- SmartClass learning system
- Communication platform
- Admissions management
- Marketing & enquiry tracking
- Transport management
- Visitor management
- Meeting coordination
- Finance operations
- Parent interaction
- Announcements & notifications

The data model is designed to be **scalable**, **role-aware**, and **institution-centric**.

---

# 1. Core Institution Structure

IntelCampus supports multiple institutions.

## Institution

Represents a school, college, or university.

Fields:

- id
- name
- type (school, college, university)
- address
- contactEmail
- contactPhone
- createdAt

Relationships:

Institution has:

- departments
- users
- classes
- transport routes
- admissions
- announcements

---

# 2. User Management

All platform participants are stored in the User entity.

## User

Fields:

- id
- firstName
- lastName
- email
- passwordHash
- phone
- role
- institutionId
- status
- createdAt

Roles include:

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

Relationships:

User may belong to:

- department
- class
- transport route

---

# 3. Department System

Departments organize academic and administrative units.

Examples:

- Computer Science
- Mathematics
- Administration
- Finance
- Marketing
- Admissions

## Department

Fields:

- id
- name
- institutionId
- headUserId
- createdAt

Relationships:

Department has:

- staff
- courses
- assistants

---

# 4. Class System

Classes represent student groups.

## Class

Fields:

- id
- name
- section
- institutionId
- classTeacherId
- academicYear

Relationships:

Class has:

- students
- subjects
- timetable
- attendance records

---

# 5. Student Profile

## Student

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

Student has:

- attendance
- exam results
- courses
- announcements
- transport route

---

# 6. Parent Profile

## Parent

Fields:

- id
- userId
- studentId
- relation

Relationships:

Parent can:

- view student performance
- receive notifications
- communicate with teachers

---

# 7. Course & SmartClass System

Courses represent academic subjects.

## Course

Fields:

- id
- name
- departmentId
- teacherId
- classId
- description

Relationships:

Course has:

- lessons
- materials
- assignments
- exams

---

## SmartClassResource

Stores digital learning resources.

Fields:

- id
- courseId
- title
- type (video, pdf, link)
- resourceUrl
- uploadedBy
- createdAt

---

# 8. Communication System

IntelCampus includes a built-in communication system.

## Announcement

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

## Message

Internal chat system.

Fields:

- id
- senderId
- receiverId
- message
- createdAt
- readStatus

---

# 9. Admissions System

Admissions manage new student enrollment.

## AdmissionApplication

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

Status examples:

- new
- contacted
- interviewScheduled
- admitted
- rejected

---

# 10. Marketing & Lead Management

Marketing teams manage enquiries and campaigns.

## Lead

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

Sources:

- website
- facebook
- instagram
- referral
- walk-in

---

# 11. Visitor Management System

Tracks visitors entering the institution.

## Visitor

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

# 12. Meeting System

Used by leadership and staff.

## Meeting

Fields:

- id
- title
- description
- organizerId
- departmentId
- meetingTime
- location

---

## MeetingParticipant

Fields:

- id
- meetingId
- userId
- status

Status:

- invited
- accepted
- declined

---

# 13. Transport System

Manages student transport operations.

## TransportRoute

Fields:

- id
- routeName
- driverId
- vehicleNumber
- institutionId

---

## TransportStop

Fields:

- id
- routeId
- stopName
- stopOrder

---

# 14. Attendance System

## Attendance

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

# 15. Examination System

## Exam

Fields:

- id
- name
- classId
- subjectId
- examDate
- totalMarks
- passMarks

---

## ExamResult

Fields:

- id
- examId
- studentId
- marksObtained
- grade
- rank

---

# 16. Finance System

Handles institutional financial operations.

## Payment

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

# 17. Role Based Access Control

IntelCampus uses Role Based Access Control.

Access is determined by:

- user role
- institution
- department
- ownership

Example:

Teacher:

- manage courses
- mark attendance
- upload resources

Principal:

- manage institution
- view reports
- approve operations

Marketing:

- manage leads
- manage campaigns

Admissions:

- manage applications

Finance:

- manage payments
- generate reports

---

# Summary

The IntelCampus data model is designed to support:

- complete institutional operations
- scalable multi-role access
- academic and administrative workflows
- smart learning systems
- marketing and admissions pipelines
- transport and visitor management
- integrated communication