# Folder Structure

Version: 1.0

---

# Purpose

This document defines the official folder structure of the project.

Every file must be placed in the correct directory.

Do not create unnecessary folders.

Keep the structure simple, predictable, and scalable.

---

# Project Structure

project/

├── frontend/
├── backend/
├── docs/
├── .gitignore
├── README.md
└── pnpm-workspace.yaml

The project is separated into two independent applications.

- frontend
- backend

Never mix frontend and backend code.

---

# Frontend Structure

frontend/

├── app/
├── components/
├── hooks/
├── lib/
├── services/
├── types/
├── public/
├── styles/
├── middleware.ts
├── next.config.ts
├── package.json
└── tsconfig.json

---

# app/

Contains all application routes.

Example

app/

├── login/
│   └── page.tsx
│
├── register/
│   └── page.tsx
│
├── profile/
│   └── page.tsx
│
├── profile/
│   └── edit/
│       └── page.tsx
│
├── layout.tsx
├── page.tsx
└── globals.css

Rules

Only pages belong here.

Do not place reusable components inside app.

---

# components/

Reusable UI.

Example

components/

├── ui/
├── forms/
├── layout/
├── profile/
├── auth/
└── shared/

---

# components/ui/

Contains generic UI components.

Examples

Button

Input

Card

Badge

Avatar

Dialog

Separator

Skeleton

Spinner

These components should be reusable across the application.

---

# components/forms/

Contains complete forms.

Examples

LoginForm

RegisterForm

EditProfileForm

---

# components/layout/

Layout components.

Examples

Navbar

Footer

Container

PageHeader

---

# components/profile/

Profile-specific components.

Examples

ProfileCard

ProfileAvatar

ProfileInformation

ProfileStats

---

# components/auth/

Authentication UI.

Examples

LoginCard

RegisterCard

ProtectedRoute

---

# components/shared/

Reusable components shared across multiple pages.

Examples

LoadingScreen

EmptyState

ErrorMessage

SectionTitle

---

# hooks/

Reusable React hooks.

Examples

useAuth

useUser

useDebounce

useToast

Hooks should never contain UI.

---

# services/

API communication.

Examples

auth.service.ts

user.service.ts

api.ts

Responsibilities

- HTTP requests
- Authentication requests
- User requests

Never place UI logic here.

---

# lib/

Application utilities.

Examples

constants.ts

validators.ts

helpers.ts

utils.ts

auth.ts

---

# types/

Shared TypeScript types.

Examples

user.ts

auth.ts

api.ts

response.ts

Only interfaces and types belong here.

---

# public/

Static files.

Examples

logo.svg

favicon.ico

default-avatar.png

images/

Never place React components here.

---

# styles/

Optional global styles.

Tailwind should remain the primary styling solution.

---

# Backend Structure

backend/

├── prisma/
├── src/
├── test/
├── package.json
├── tsconfig.json
└── nest-cli.json

---

# prisma/

Contains database files.

Example

prisma/

├── schema.prisma
├── migrations/
└── dev.db

Never place application code here.

---

# src/

Application source.

Example

src/

├── auth/
├── users/
├── prisma/
├── common/
├── config/
├── app.module.ts
└── main.ts

---

# auth/

Authentication module.

Example

auth/

├── dto/
├── guards/
├── strategies/
├── auth.controller.ts
├── auth.service.ts
├── auth.module.ts
└── jwt.strategy.ts

Responsibilities

Register

Login

JWT

Password validation

Authorization

---

# auth/dto/

Request validation.

Example

login.dto.ts

register.dto.ts

DTOs should only describe incoming data.

---

# auth/guards/

Authentication guards.

Example

jwt-auth.guard.ts

Responsible for protecting routes.

---

# auth/strategies/

Passport strategies.

Example

jwt.strategy.ts

---

# users/

User module.

Example

users/

├── dto/
├── users.controller.ts
├── users.service.ts
└── users.module.ts

Responsibilities

Profile

Edit Profile

User information

---

# users/dto/

Validation objects.

Examples

update-user.dto.ts

---

# prisma/

NestJS Prisma service.

Example

prisma/

├── prisma.module.ts
└── prisma.service.ts

Only this module communicates with Prisma.

---

# common/

Shared backend code.

Example

common/

├── filters/
├── interceptors/
├── decorators/
├── exceptions/
└── utils/

Everything here should be reusable.

---

# config/

Application configuration.

Example

config/

jwt.config.ts

database.config.ts

environment.config.ts

Never hardcode configuration.

---

# test/

Backend tests.

Example

auth.e2e-spec.ts

users.e2e-spec.ts

---

# Root Files

README.md

Project documentation.

.gitignore

Ignored files.

pnpm-workspace.yaml

Workspace configuration.

---

# Naming Rules

Folders

lowercase

Good

auth

users

components

hooks

Bad

Auth

UserModule

ComponentsFolder

---

Files

React Components

PascalCase

Example

LoginForm.tsx

ProfileCard.tsx

Navbar.tsx

---

Services

camelCase

Example

auth.service.ts

user.service.ts

---

DTO

kebab-case

Example

login.dto.ts

register.dto.ts

update-user.dto.ts

---

Hooks

camelCase

Example

useAuth.ts

useUser.ts

---

Types

camelCase

Example

user.ts

auth.ts

---

Import Rules

Good

import LoginForm from "@/components/forms/LoginForm"

Good

import { Button } from "@/components/ui/button"

Bad

../../../components/forms/LoginForm

Never use deep relative imports.

---

Maximum Folder Depth

Avoid nesting deeper than four levels.

Bad

components/

feature/

section/

item/

button/

icon/

Button.tsx

Good

components/

ui/

Button.tsx

---

One Responsibility Rule

Each folder should have one purpose.

Example

auth/

Only authentication.

users/

Only user features.

hooks/

Only hooks.

services/

Only API communication.

---

Forbidden Structure

Do NOT create

helpers/

inside every folder.

Do NOT duplicate

utils.ts

multiple times.

Keep shared utilities inside

lib/

or

common/

---

Component Size

Aim for

100–200 lines

If a component becomes larger,

split it into smaller components.

---

Service Size

Each service should solve one feature.

Example

AuthService

Handles authentication only.

Do not place user profile logic inside AuthService.

---

Module Independence

Modules should know as little as possible about each other.

Auth module should not directly modify user data except during registration.

User module should not generate JWT tokens.

---

Scalability

Future modules should fit naturally.

Example

src/

auth/

users/

settings/

notifications/

roles/

emails/

payments/

No restructuring should be required.

---

Folder Philosophy

The folder structure should answer one question immediately:

"Where does this file belong?"

If the answer is not obvious,

the structure is too complicated.

Keep everything predictable.

Consistency is more important than clever organization.