# System Architecture

Version: 1.0

---

# Purpose

This document defines the architecture of the project.

Every developer and every AI agent must follow this architecture.

Do not place business logic inside controllers, pages, or UI components.

Every layer has one responsibility.

---

# Architecture Style

The project follows a simplified Clean Architecture.

Presentation Layer

↓

Application Layer

↓

Data Access Layer

↓

Database

Each layer only communicates with the layer directly below it.

---

# High Level Architecture

                     Browser
                        │
                        ▼
                Next.js Frontend
                        │
                  HTTP REST API
                        │
                        ▼
                 NestJS Backend
                        │
                Application Services
                        │
                 Prisma ORM Service
                        │
                        ▼
                    SQLite Database

---

# Principles

The project follows:

- Clean Architecture
- SOLID Principles
- Separation of Concerns
- Single Responsibility Principle
- Dependency Injection
- Reusable Components
- Modular Design

---

# Frontend Architecture

The frontend is responsible for:

- Rendering UI
- Form validation
- Sending HTTP requests
- Managing authentication state
- Displaying errors
- Displaying loading states

The frontend NEVER contains business logic.

The frontend NEVER talks directly to the database.

---

Frontend Flow

Page

↓

Component

↓

Service

↓

REST API

↓

Backend

---

Example

Login Page

↓

Login Form

↓

Auth Service

↓

POST /auth/login

↓

NestJS

---

# Backend Architecture

The backend owns all business logic.

The backend validates:

- Authentication
- Authorization
- Database operations
- Input validation

The frontend should never decide business rules.

---

Backend Request Flow

HTTP Request

↓

Controller

↓

Service

↓

Prisma Service

↓

SQLite

↓

Service

↓

Controller

↓

JSON Response

---

# Controller Responsibilities

Controllers are thin.

Controllers should only:

- Receive requests
- Validate DTOs
- Call Services
- Return responses

Controllers must NOT:

- Query the database
- Hash passwords
- Generate JWT
- Contain business logic

Maximum controller size:

~100 lines

---

# Service Responsibilities

Services contain business logic.

Examples:

Register User

Login User

Update Profile

Hash Password

Generate JWT

Compare Password

Fetch User

Services should be reusable.

Most project logic belongs here.

---

# Prisma Responsibilities

Prisma is responsible for:

- Reading data
- Writing data
- Updating data
- Deleting data

No SQL queries outside Prisma.

Never access SQLite directly.

---

# Database Responsibilities

SQLite stores:

Users

Nothing else in Version 1.

Database does not know about UI.

Database does not know about JWT.

---

# Frontend Folder Responsibilities

app/

Contains pages.

No reusable UI.

components/

Reusable UI components.

buttons

forms

cards

navbar

layout

services/

HTTP requests.

Authentication API

User API

hooks/

Reusable React hooks.

lib/

Configuration.

Utilities.

Validation.

types/

Shared TypeScript types.

---

# Backend Folder Responsibilities

auth/

Authentication module.

users/

User module.

common/

Shared utilities.

config/

Environment configuration.

prisma/

Prisma service.

guards/

JWT guards.

dto/

Validation objects.

---

# Dependency Rules

Allowed

Page

↓

Component

↓

Service

↓

API

Allowed

Controller

↓

Service

↓

Prisma

Forbidden

Page

↓

Database

Forbidden

Component

↓

SQLite

Forbidden

Controller

↓

SQLite

Forbidden

Controller

↓

Controller

Forbidden

Component

↓

Component state mutation outside props

---

# Authentication Flow

Register

↓

Validate DTO

↓

Hash Password

↓

Create User

↓

Generate JWT

↓

Return User

---

Login

↓

Validate DTO

↓

Find User

↓

Compare Password

↓

Generate JWT

↓

Return User

---

Protected Request

↓

JWT Guard

↓

Extract User ID

↓

Service

↓

Prisma

↓

Return User

---

# Error Flow

Client

↓

API

↓

Validation

↓

Service

↓

Exception

↓

Global Exception Filter

↓

JSON Response

---

# Data Ownership

Frontend owns:

UI

Animations

Loading

Forms

Backend owns:

Authentication

Authorization

Validation

Business Rules

Database

---

# State Management

Global State

Authentication only.

Everything else should remain local.

Avoid unnecessary global state.

---

# API Layer

Frontend never calls Prisma.

Frontend never imports backend code.

Communication happens ONLY through HTTP.

---

# Reusability

Good

ProfileCard

UserAvatar

AuthForm

PrimaryButton

Bad

ProfilePageButton

LoginPageInput

RegisterButtonOnly

Components should be reusable.

---

# Separation of Concerns

Example

Login Form

Collects data.

↓

Auth Service

Sends request.

↓

Backend

Authenticates.

↓

Database

Stores user.

Each layer performs one job.

---

# Validation

Frontend

Provides instant feedback.

Backend

Provides security.

Never rely only on frontend validation.

---

# Error Handling

Errors must travel upward.

Database

↓

Service

↓

Controller

↓

Frontend

↓

Toast Notification

Do not silently ignore errors.

---

# Logging

Development

Useful logs are allowed.

Production

Never log:

Passwords

JWT Secrets

Sensitive user information

---

# Scalability

The architecture should allow future additions without restructuring.

Future modules:

Notifications

Settings

OAuth

Admin

Roles

Email Verification

Password Reset

Each future feature should become its own NestJS module.

---

# Communication Rules

Frontend communicates only with REST endpoints.

Backend communicates only with Prisma.

Prisma communicates only with SQLite.

No shortcuts.

---

# Simplicity Rule

Whenever there are two possible implementations,

choose the simpler one.

Avoid unnecessary abstractions.

Avoid premature optimization.

Keep modules small.

Keep functions focused.

Readable code is preferred over clever code.

---

# Architecture Summary

Frontend

Responsible for presentation.

Backend

Responsible for business logic.

Prisma

Responsible for database communication.

SQLite

Responsible for data persistence.

Every layer has one responsibility.

No layer should perform the responsibility of another.  