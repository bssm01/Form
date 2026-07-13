# Technology Stack

Version: 1.0

---

# Purpose

This document defines the official technology stack for the project.

These technologies are mandatory.

Do not replace them unless explicitly instructed.

Do not introduce additional frameworks or libraries unless they solve a real problem.

The goal is to keep the project lightweight, maintainable, and beginner-friendly while following professional development practices.

---

# Overall Architecture

Frontend
        ↓
REST API
        ↓
Backend
        ↓
Prisma ORM
        ↓
SQLite Database

---

# Frontend

Framework

- Next.js 15
- App Router

Language

- TypeScript

Styling

- Tailwind CSS

UI Components

- shadcn/ui

Icons

- lucide-react

Fonts

- Geist (default Next.js font)

Theme

- Light mode only (Version 1)

Notifications

- Sonner

Form Validation

- Zod

Form Management

- React Hook Form

HTTP Client

- Native Fetch API

State Management

- React Context

Do NOT install Redux, MobX, Zustand or Recoil.

This project is too small to justify them.

---

# Backend

Framework

- NestJS

Language

- TypeScript

Authentication

- JWT

Password Hashing

- bcrypt

Validation

- class-validator
- class-transformer

Environment Variables

- @nestjs/config

Logging

- NestJS Logger

API Style

- REST API

Do NOT use GraphQL.

Do NOT use gRPC.

Do NOT use WebSockets.

---

# Database

Database

- SQLite

ORM

- Prisma ORM

Database File

backend/prisma/dev.db

Prisma is the only way the application communicates with the database.

Never write raw SQL unless absolutely necessary.

---

# Authentication

Authentication Method

- JWT issued by the backend
- Sent via HTTP-only cookies

Password Encryption

- bcrypt

Authorization

- JWT Guard

Protected Routes

- NestJS Guards

Browser Storage Policy

- No localStorage
- No sessionStorage

Passwords must never be stored in plain text.

---

# API Communication

Frontend communicates with the backend using REST.

Every request returns JSON.

Content-Type

application/json

---

# Package Manager

Official package manager

pnpm

Never use

- npm
- yarn
- bun

All project documentation assumes pnpm.

---

# Linting

ESLint

Required.

All code must pass ESLint before being committed.

---

# Formatting

Prettier

Required.

Formatting must remain consistent across the project.

---

# Version Control

Git

Main Branch

main

Feature branches are encouraged.

Example

feature/login

feature/profile

fix/navbar

---

# Testing

Framework

Jest

Future

Playwright may be added later.

Testing is not required during initial development but the project should remain testable.

---

# Environment Variables

Frontend

.env.local

Backend

.env

Never hardcode:

- JWT Secret
- Database Paths
- API URLs

Always use environment variables.

---

# Backend Dependencies

Required

- @nestjs/common
- @nestjs/core
- @nestjs/config
- @nestjs/jwt
- @nestjs/passport
- passport
- passport-jwt
- bcrypt
- prisma
- @prisma/client
- class-validator
- class-transformer

Optional

- helmet
- compression

---

# Frontend Dependencies

Required

- react
- next
- tailwindcss
- shadcn/ui
- lucide-react
- react-hook-form
- zod
- sonner

---

# Folder Names

Use lowercase.

Good

components

services

hooks

lib

utils

Bad

Components

ServiceLayer

MY_COMPONENTS

---

# File Naming

React Components

PascalCase

Example

LoginForm.tsx

ProfileCard.tsx

Navbar.tsx

Utility Files

camelCase

Example

auth.ts

fetchUser.ts

validateEmail.ts

API Routes

lowercase

Example

login

register

users

---

# Naming Conventions

Variables

camelCase

Functions

camelCase

Interfaces

PascalCase

Components

PascalCase

Types

PascalCase

Constants

UPPER_SNAKE_CASE

Example

JWT_EXPIRES_IN

DEFAULT_AVATAR

---

# API Style

REST only.

Example

POST /auth/login

POST /auth/register

GET /users/me

PATCH /users/me

DELETE /users/me

---

# Error Handling

Backend returns structured JSON.

Example

{
  "success": false,
  "message": "Invalid email or password"
}

Do not expose stack traces.

---

# Code Style

Use

async/await

Avoid

.then()

unless necessary.

---

# Imports

Always use absolute imports when possible.

Example

@/components

@/lib

Avoid deeply nested relative imports.

Bad

../../../../components

---

# Comments

Comments explain WHY.

Never explain obvious code.

Good

// JWT expires after 24 hours to reduce login frequency.

Bad

// Increment i

---

# Performance

Keep bundles small.

Lazy load only when necessary.

Avoid unnecessary libraries.

---

# Browser Support

Latest

- Chrome
- Firefox
- Edge
- Safari

---

# Mobile Support

Required.

Desktop

Tablet

Mobile

must all function correctly.

---

# Accessibility

Every input must have:

- Label
- Placeholder
- Keyboard navigation
- Visible focus state

Buttons must remain usable without a mouse.

---

# Security Libraries

JWT

bcrypt

Helmet (recommended)

Validation Pipes

Never trust frontend validation.

Backend validates everything.

---

# Future Migration

The architecture must allow replacing SQLite with PostgreSQL by changing only:

Prisma datasource

Environment variables

No business logic should require modification.

---

# Technologies Explicitly Forbidden

Do NOT use

- Redux
- MobX
- GraphQL
- Firebase
- MongoDB
- Express.js
- Material UI
- Bootstrap
- jQuery
- Axios
- SCSS
- Chakra UI
- Ant Design

unless explicitly requested later.

---

# Guiding Principle

Every technology in this project was selected because it is:

- Modern
- Stable
- Lightweight
- Well documented
- Easy to maintain
- Widely adopted
- Appropriate for projects of this size

Avoid unnecessary complexity.

Prefer simplicity over cleverness.