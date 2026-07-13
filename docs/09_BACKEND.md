# Backend Architecture

Version: 1.0

---

# Purpose

This document defines the backend architecture.

The backend is responsible for:

- Business logic
- Authentication
- Authorization
- Validation
- Database communication
- Security
- API responses

The backend is NOT responsible for:

- Rendering UI
- Managing frontend state
- Styling
- Browser interactions

---

# Technology

Framework

NestJS

Language

TypeScript

ORM

Prisma

Database

SQLite

Authentication

JWT

Password Hashing

bcrypt

Validation

class-validator

Environment

@nestjs/config

---

# Project Structure

src/

app.module.ts

main.ts

auth/

users/

prisma/

common/

config/

---

# Modules

Every feature must have its own module.

Good

AuthModule

UsersModule

Future

SettingsModule

NotificationModule

EmailModule

Bad

One giant AppModule

---

# Controllers

Controllers receive HTTP requests.

Controllers should ONLY

Receive request

Validate DTO

Call Service

Return Response

Controllers should NEVER

Contain business logic

Hash passwords

Generate JWT

Call Prisma directly

Maximum size

100 lines

---

# Services

Services contain all business logic.

Example responsibilities

Register user

Login user

Update profile

Find user

Generate JWT

Compare passwords

Services should be reusable.

---

# Prisma

Only PrismaService communicates with the database.

Allowed

Controller

↓

Service

↓

PrismaService

↓

SQLite

Forbidden

Controller

↓

Prisma

Forbidden

Frontend

↓

Prisma

---

# DTO

Every request must have a DTO.

Example

LoginDto

RegisterDto

UpdateUserDto

DTO validates incoming data.

Business logic does not belong inside DTOs.

---

# Validation

Enable global validation pipe.

Required

transform

whitelist

forbidNonWhitelisted

Reject invalid requests immediately.

---

# Dependency Injection

Always use NestJS dependency injection.

Never manually instantiate services.

Good

constructor(
private readonly usersService: UsersService
)

Bad

const usersService = new UsersService()

---

# Authentication

Use JWT Guard.

Never manually verify JWT inside controllers.

---

# Exception Handling

Use global exception filters.

Return consistent JSON.

Never expose stack traces.

---

# Logging

Use NestJS Logger.

Never log

Passwords

JWT

Secrets

Cookies

---

# Response Format

Every endpoint returns

{
  "success": true,
  "message": "...",
  "data": {}
}

Errors

{
  "success": false,
  "message": "...",
  "statusCode": 400
}

Never return raw Prisma objects.

---

# Environment Variables

Use @nestjs/config.

Never hardcode

JWT Secret

Database URL

Cookie settings

---

# Security

Hash every password.

Validate every request.

Protect every private endpoint.

Never trust frontend input.

---

# Backend Philosophy

Controllers coordinate.

Services think.

Prisma stores.

Database persists.

Every layer has one responsibility.