# Development Workflow

Version: 1.0

---

# Purpose

This document defines the official development workflow.

Every developer and every AI agent must follow this workflow.

Do not skip phases.

Do not build features out of order.

Finish one phase completely before starting the next.

Every phase must compile successfully before continuing.

---

# Development Philosophy

The project should be developed incrementally.

Never build everything at once.

Each phase should produce a working application.

The application should always remain in a runnable state.

---

# General Rules

Always

Build

↓

Test

↓

Review

↓

Refactor

↓

Continue

Never continue with broken code.

---

# Development Order

Phase 1

Project Setup

↓

Phase 2

Backend Foundation

↓

Phase 3

Database

↓

Phase 4

Authentication

↓

Phase 5

Frontend Foundation

↓

Phase 6

Authentication UI

↓

Phase 7

Profile Feature

↓

Phase 8

Polish

↓

Phase 9

Testing

↓

Phase 10

Production Ready

---

# Phase 1

Project Setup

Goal

Create a clean project structure.

Tasks

Create workspace

Create frontend

Create backend

Configure pnpm workspace

Configure Git

Configure ESLint

Configure Prettier

Install dependencies

Verify project starts correctly.

Definition of Done

Frontend runs.

Backend runs.

No errors.

---

# Phase 2

Backend Foundation

Goal

Prepare NestJS.

Tasks

Create modules

Configure ConfigModule

Configure PrismaService

Create global ValidationPipe

Create global Exception Filter

Configure Logger

Enable CORS

Enable Helmet

Definition of Done

Backend starts successfully.

Health endpoint works.

---

# Phase 3

Database

Goal

Create database.

Tasks

Configure Prisma

Create User model

Generate migration

Generate Prisma Client

Test database connection

Definition of Done

SQLite database created.

Migration successful.

Prisma Client generated.

---

# Phase 4

Authentication

Goal

Implement authentication.

Tasks

Register endpoint

Login endpoint

Logout endpoint

JWT

bcrypt

JWT Guard

Cookie authentication

Definition of Done

User can register.

User can login.

User can logout.

Protected routes work.

Passwords are hashed.

---

# Phase 5

Frontend Foundation

Goal

Create frontend structure.

Tasks

Install Tailwind

Install shadcn/ui

Configure routing

Create layouts

Create providers

Create API service

Create Auth Context

Definition of Done

Frontend builds.

Navigation works.

Theme works.

Toast works.

---

# Phase 6

Authentication UI

Goal

Build authentication pages.

Tasks

Landing page

Login page

Register page

Validation

Loading states

Error handling

Redirects

Definition of Done

Authentication works from the UI.

No console errors.

Responsive design works.

---

# Phase 7

Profile

Goal

Implement profile feature.

Tasks

Profile page

Edit profile page

Update profile endpoint

Display user information

Profile loading state

Definition of Done

Authenticated users can

View profile

Edit profile

Save changes

---

# Phase 8

Polish

Goal

Improve user experience.

Tasks

Loading skeletons

Toast notifications

Accessibility

Responsive fixes

Animations

Empty states

Error pages

Definition of Done

Application feels polished.

---

# Phase 9

Testing

Goal

Verify functionality.

Backend

Authentication

Profile

Validation

Frontend

Forms

Navigation

Authentication flow

Definition of Done

All major features tested.

No critical bugs.

---

# Phase 10

Production Ready

Goal

Prepare for deployment.

Tasks

Review environment variables

Review security

Run ESLint

Run Prettier

Run tests

Optimize bundle

Remove debug logs

Review documentation

Definition of Done

Application ready for deployment.

---

# Feature Workflow

Every feature follows the same lifecycle.

Understand requirements

↓

Design

↓

Implement backend

↓

Test backend

↓

Implement frontend

↓

Connect API

↓

Test feature

↓

Refactor

↓

Review

↓

Complete

---

# Git Workflow

Every feature gets its own branch.

Example

feature/login

feature/register

feature/profile

Merge only after review.

---

# Commit Workflow

Keep commits small.

Examples

feat(auth): implement login endpoint

feat(profile): add edit profile page

fix(auth): validate email before login

Avoid giant commits.

---

# AI Development Workflow

Before writing code

Read documentation.

Understand requirements.

Check folder structure.

Check architecture.

Reuse existing code.

Only then start implementation.

---

# Before Creating Files

Always ask

Does this file already exist?

Can it be reused?

Can this logic be extracted?

Avoid duplicate code.

---

# Before Installing Packages

Check

02_TECH_STACK.md

Do not install new dependencies unless approved.

Prefer existing libraries.

---

# Before Writing Components

Search existing components.

If one already solves the problem,

reuse it.

Avoid duplicate UI.

---

# Before Writing Services

Search existing services.

Avoid duplicated business logic.

---

# Before Creating Hooks

Search existing hooks.

Prefer extending existing hooks.

---

# Before Creating Utilities

Search

lib/

Avoid duplicated helper functions.

---

# Code Review Checklist

Every feature must pass.

✓ Builds successfully

✓ ESLint passes

✓ TypeScript passes

✓ Responsive

✓ Accessible

✓ No duplicated code

✓ No console errors

✓ Secure

✓ Documentation respected

---

# Refactoring Rules

Refactor only after the feature works.

Do not optimize prematurely.

Keep refactoring small.

Do not rewrite working code without a reason.

---

# Performance Rules

Measure first.

Optimize second.

Avoid unnecessary memoization.

Avoid premature optimization.

---

# Bug Fix Workflow

Reproduce bug

↓

Find root cause

↓

Fix

↓

Test

↓

Review

↓

Merge

Never fix symptoms.

Fix the cause.

---

# Definition of Done

A feature is complete only when

✓ Code compiles

✓ Feature works

✓ Validation works

✓ Errors handled

✓ Responsive

✓ Accessible

✓ Secure

✓ Lint passes

✓ No TypeScript errors

✓ No console errors

✓ Documentation followed

---

# Final Workflow

Read

↓

Plan

↓

Build

↓

Test

↓

Review

↓

Refactor

↓

Commit

↓

Continue

Never skip steps.

---

# Golden Rule

Do not rush.

A clean architecture built slowly is better than a messy architecture built quickly.

Every completed phase should leave the project in a better state than before.