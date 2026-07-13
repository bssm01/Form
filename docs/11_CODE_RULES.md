# Code Rules

Version: 1.0

---

# Purpose

This document defines the coding standards for the project.

Every file, function, component, and module must follow these rules.

These rules apply to both human developers and AI agents.

The primary goal is maintainability.

Code should be easy to read, easy to debug, and easy to extend.

---

# Core Principles

Always prioritize

- Readability
- Simplicity
- Consistency
- Reusability
- Maintainability

Never optimize prematurely.

Readable code is better than clever code.

---

# General Rules

Write code as if another developer will maintain it.

Every file should have one responsibility.

Every function should solve one problem.

Avoid unnecessary abstractions.

Avoid unnecessary complexity.

---

# SOLID Principles

Follow SOLID whenever appropriate.

Single Responsibility

One class

One purpose.

Open / Closed

Extend code.

Avoid modifying existing behavior.

Liskov

Subclasses must behave like their parents.

Interface Segregation

Small focused interfaces.

Dependency Inversion

Depend on abstractions.

Use NestJS dependency injection.

---

# DRY

Do not repeat yourself.

If code appears more than twice,

extract it.

Examples

Utility function

Hook

Component

Service

---

# KISS

Keep It Simple.

Choose the simplest implementation that solves the problem.

Do not build for features that do not exist.

---

# YAGNI

You Aren't Gonna Need It.

Do not create

Future services

Future interfaces

Future DTOs

Future components

unless Version 1 requires them.

---

# TypeScript

Use TypeScript everywhere.

Never disable type checking.

Never use

any

unless absolutely unavoidable.

Prefer

unknown

over

any.

Always define interfaces and types.

---

# Naming

Variables

camelCase

Functions

camelCase

Components

PascalCase

Interfaces

PascalCase

Types

PascalCase

Enums

PascalCase

Constants

UPPER_SNAKE_CASE

Files

kebab-case

Examples

login-form.tsx

auth.service.ts

update-user.dto.ts

---

# Functions

Functions should

Do one thing.

Return one result.

Be easy to test.

Maximum length

30 lines

If longer,

split it.

---

# Components

Maximum size

200 lines

If larger,

split into smaller components.

Each component should have one responsibility.

---

# Services

Each service handles one feature.

Example

AuthService

Authentication only.

UserService

User operations only.

Do not mix unrelated logic.

---

# Controllers

Controllers should remain thin.

Receive request.

Call service.

Return response.

Nothing more.

Never write business logic inside controllers.

---

# DTO

DTOs only validate incoming data.

DTOs never contain business logic.

---

# Business Logic

Business logic belongs inside services.

Never place business logic inside

Pages

Components

Controllers

DTOs

---

# Comments

Only explain

WHY.

Never explain

WHAT.

Good

// JWT expires after 24 hours to reduce frequent logins.

Bad

// Increment i

Avoid obvious comments.

---

# Imports

Always organize imports.

Order

Node modules

↓

Third-party libraries

↓

Internal aliases

↓

Relative imports

Never use deep relative paths.

Good

@/components

Bad

../../../../components

---

# Error Handling

Handle every error.

Never ignore exceptions.

Never use empty catch blocks.

Bad

catch {}

Good

catch (error) {
    logger.error(error);
    throw error;
}

---

# Async Code

Always use

async/await

Avoid

.then()

unless required.

---

# Magic Numbers

Avoid magic numbers.

Bad

if (password.length < 8)

Good

const MIN_PASSWORD_LENGTH = 8;

if (password.length < MIN_PASSWORD_LENGTH)

---

# Constants

Store shared constants inside

lib/constants.ts

Avoid duplicated values.

---

# Validation

Frontend

Zod

Backend

class-validator

Never rely only on frontend validation.

---

# Environment Variables

Never hardcode

Secrets

API URLs

Database paths

JWT secrets

Use

.env

---

# Logging

Log only useful information.

Never log

Passwords

JWT

Secrets

Cookies

Personal data

---

# API Calls

Never call fetch directly inside components.

Use services.

Good

Component

↓

AuthService

↓

API

Bad

Component

↓

fetch()

---

# Reusability

If UI appears more than twice,

make it a component.

If logic appears more than twice,

make it a hook or utility.

---

# Folder Rules

One purpose per folder.

One feature per module.

Do not duplicate utilities.

---

# File Size

Aim for

200 lines

Maximum

300 lines

Split large files.

---

# Class Size

Avoid giant classes.

Each class should solve one feature.

---

# NestJS Rules

Always use dependency injection.

Always create modules.

Always validate DTOs.

Always use services.

Never instantiate services manually.

---

# React Rules

Prefer Server Components.

Use Client Components only when necessary.

Keep state local whenever possible.

Avoid prop drilling.

Use Context only for authentication.

---

# Styling

Tailwind only.

Do not use inline styles.

Do not use CSS Modules.

Do not use Bootstrap.

---

# Git Rules

One feature

One commit.

One pull request

One feature.

Small commits.

Clear messages.

---

# Performance

Avoid unnecessary renders.

Memoize only when needed.

Avoid premature optimization.

---

# Security

Never expose sensitive data.

Hash passwords.

Validate input.

Escape output when appropriate.

Protect every private endpoint.

---

# Testing

Write testable code.

Avoid tightly coupled modules.

Keep dependencies injectable.

---

# AI Coding Rules

When generating code,

prefer

Simple

Readable

Reusable

Maintainable

Never generate unnecessary abstractions.

Never introduce new libraries without a documented reason.

Never change the project architecture.

Never ignore these documentation files.

---

# Final Checklist

Before writing code ask:

- Is this readable?
- Is this reusable?
- Is it type-safe?
- Is it modular?
- Is it tested?
- Is it secure?
- Can it be simplified?

If the answer to the last question is yes,

simplify it.

---

# Golden Rule

Every line of code should make the project easier to maintain.

If a piece of code makes the project harder to understand,

rewrite it.

The best code is the code that another developer can understand immediately.