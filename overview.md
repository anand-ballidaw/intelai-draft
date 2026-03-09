# IntelCampus API Contract

## Overview

This document defines the API contracts for the IntelCampus Institutional Management System.

IntelCampus is a multi-role institutional operating platform designed for schools, colleges, universities, and training institutes.

---

## Base URL

Development

http://localhost:8080/api/v1

Production

https://api.intelcampus.com/v1

---

## Authentication

POST /auth/login  
POST /auth/refresh  
POST /auth/logout  

Authentication uses JWT tokens.

---

## Roles

CEO  
Management  
Director  
Manager  
Principal  
Dean  
HOD  
Professor  
Associate Professor  
Assistant Professor  
Teacher  
Class Teacher  
Admin  
Finance  
HR  
Office Staff  
Front Desk  
Transport Incharge  
Driver  
Bus Staff  
Library Staff  
Lab Assistant  
Hostel Staff  
Canteen Staff  
Store Staff  
Admission Team  
Marketing Team  
Student  
Parent  

---

## Institutions

GET /institutions  
POST /institutions  
GET /institutions/{id}  
PATCH /institutions/{id}

---

## Departments

GET /departments  
POST /departments  
GET /departments/{id}

---

## Users

GET /users  
GET /users/{id}  
POST /users  
PATCH /users/{id}  
DELETE /users/{id}

---

## Academic

### Classes

GET /classes  
POST /classes

### Subjects

GET /subjects  
POST /subjects

### Attendance

POST /attendance  
GET /attendance/class/{classId}  
GET /attendance/student/{studentId}

### Exams

POST /exams  
GET /exams

### Results

POST /results  
GET /results/student/{id}

---

## SmartClass

GET /smartclass/videos  
POST /smartclass/upload  
GET /smartclass/resources  

---

## Admissions

POST /admissions/enquiry  
GET /admissions/enquiries  
POST /admissions/apply  
POST /admissions/approve  

---

## Marketing

GET /marketing/campaigns  
POST /marketing/campaigns  
POST /marketing/social-post  

---

## Transport

GET /transport/buses  
GET /transport/routes  
POST /transport/attendance  

---

## Visitors

POST /visitors/register  
GET /visitors  
POST /visitors/approve  

---

## Meetings

POST /meetings/create  
GET /meetings  
POST /meetings/invite  

---

## Communication

POST /announcements  
GET /announcements  
POST /messages  
GET /notifications  

---

## Response Format

Success

{
 success: true,
 data: {}
}

Error

{
 success: false,
 error: {
   code: "ERROR_CODE",
   message: "Error message"
 }
}