# REST API Specification

Version: 1.0

---

# Purpose

This document defines every API endpoint used by the application.

The API follows REST principles.

Every endpoint returns JSON.

Every endpoint uses UTF-8.

Every request and response follows a consistent format.

---

# Base URL

Development

http://localhost:3001

Frontend

http://localhost:3000

Backend

http://localhost:3001

---

# Content Type

Every request

Content-Type: application/json

Every response

Content-Type: application/json

---

# Success Response Format

Every successful response must follow this structure.

{
    "success": true,
    "message": "Profile fetched successfully",
    "data": {}
}

Never return raw objects.

Always wrap data inside "data".

The message field should be short, human-readable, and suitable for UI feedback.

---

# Error Response Format

Every error response must follow this structure.

{
    "success": false,
    "message": "Invalid email or password",
    "statusCode": 401,
    "errors": []
}

The errors array is optional, but should be used for validation or field-level issues.

Example

{
    "success": false,
    "message": "Validation failed",
    "statusCode": 400,
    "errors": [
        {
            "field": "email",
            "message": "Email is invalid"
        }
    ]
}

Every endpoint should use this format.

---

# Authentication Endpoints

Base Route

/auth

---

## Register

POST

/auth/register

Authentication

No

Description

Creates a new user account.

Request

{
    "fullName": "John Doe",
    "email": "john@example.com",
    "password": "password123"
}

Validation

fullName

Required

2-100 characters

email

Required

Valid email

Unique

password

Required

Minimum 8 characters

Success

201 Created

Response

{
    "success": true,
    "message": "Account created successfully",
    "data": {
        "id": "...",
        "fullName": "John Doe",
        "email": "john@example.com",
        "bio": null,
        "avatarUrl": null,
        "createdAt": "...",
        "updatedAt": "..."
    }
}

Possible Errors

400

Validation failed

409

Email already exists

500

Server error

---

## Login

POST

/auth/login

Authentication

No

Request

{
    "email": "john@example.com",
    "password": "password123"
}

Success

200 OK

Response

{
    "success": true,
    "message": "Logged in successfully",
    "data": {
        "id": "...",
        "fullName": "John Doe",
        "email": "john@example.com",
        "bio": null,
        "avatarUrl": null
    }
}

Backend also sets

HTTP-only JWT Cookie

Possible Errors

400

Validation failed

401

Invalid email or password

500

Server error

---

## Logout

POST

/auth/logout

Authentication

Yes

Description

Removes authentication cookie.

Success

200 OK

Response

{
    "success": true,
    "message": "Logged out successfully",
    "data": {}
}

---

# User Endpoints

Base Route

/users

---

## Current User

GET

/users/me

Authentication

Required

JWT Guard

Description

Returns authenticated user's profile.

Success

200 OK

Response

{
    "success": true,
    "data": {
        "id": "...",
        "fullName": "...",
        "email": "...",
        "bio": "...",
        "avatarUrl": "...",
        "createdAt": "...",
        "updatedAt": "..."
    }
}

Possible Errors

401

Unauthorized

404

User not found

---

## Update Profile

PATCH

/users/me

Authentication

Required

Description

Updates user information.

Request

{
    "fullName": "John Doe",
    "bio": "Software Engineer"
}

All fields optional.

Validation

fullName

2-100 characters

bio

Maximum 300 characters

Success

200 OK

Response

{
    "success": true,
    "data": {
        "id": "...",
        "fullName": "...",
        "email": "...",
        "bio": "...",
        "avatarUrl": "...",
        "updatedAt": "..."
    }
}

Possible Errors

400

Validation failed

401

Unauthorized

404

User not found

---

# Future Endpoints

Version 2

POST

/auth/forgot-password

POST

/auth/reset-password

POST

/auth/verify-email

POST

/auth/refresh

POST

/auth/google

POST

/auth/github

DELETE

/users/me

These endpoints should NOT be implemented in Version 1.

---

# HTTP Status Codes

200

Request successful

201

Resource created

204

No content

400

Bad request

401

Unauthorized

403

Forbidden

404

Not found

409

Conflict

422

Validation failed (optional)

500

Internal server error

---

# Request Rules

Always send JSON.

Never send passwords through query parameters.

Never use GET for creating resources.

Use

POST

for creation.

PATCH

for updates.

GET

for reading.

---

# Response Rules

Never return

password

Never return

password hash

Never return

JWT secret

Never expose internal errors.

---

# Validation Rules

Every request must be validated.

Backend validation is mandatory.

Reject invalid requests before executing business logic.

---

# Pagination

Not required in Version 1.

Future endpoints may use

?page=1

&limit=20

---

# Filtering

Not required.

---

# Sorting

Not required.

---

# Authentication

Authentication uses

HTTP-only JWT Cookies

Frontend never manually sends JWT.

Browser automatically sends cookies.

---

# CORS

Allow

Frontend Origin

Only.

Allow Credentials

True

Do not allow

*

in production.

---

# API Versioning

Current Version

v1

Future

/api/v2

Current implementation does not require version prefix.

---

# Error Messages

Keep messages simple.

Good

Invalid email or password

Profile updated successfully

Registration successful

Bad

Password hash mismatch

Database exception

Prisma error

Never expose implementation details.

---

# Logging

Log server errors.

Do not log

Passwords

Cookies

JWT

Secrets

Personal information

---

# Performance

Every endpoint should respond in under

300ms

during local development.

Avoid unnecessary database queries.

---

# API Principles

The API should be

Consistent

Predictable

RESTful

Secure

Easy to consume

Every endpoint should have one responsibility.

The API contract defined in this document is the single source of truth for communication between the frontend and backend.