# Frontend Architecture

Version: 1.0

---

# Purpose

This document defines the frontend architecture.

The frontend is responsible for:

- Rendering pages
- Rendering components
- Form validation
- User interactions
- Navigation
- Calling the backend API
- Managing UI state

The frontend is NOT responsible for:

- Authentication logic
- Business logic
- Database access
- Password hashing
- JWT verification

---

# Technology Stack

Framework

- Next.js 15

Language

- TypeScript

Router

- App Router

Styling

- Tailwind CSS

UI Components

- shadcn/ui

Icons

- lucide-react

Forms

- React Hook Form

Validation

- Zod

Notifications

- Sonner

---

# Project Structure

frontend/

app/

components/

hooks/

services/

lib/

types/

public/

styles/

middleware.ts

---

# Routing

Public Routes

/

/login

/register

404

Protected Routes

/profile

/profile/edit

Guests cannot access protected pages.

Authenticated users cannot access:

/login

/register

They should be redirected to

/profile

---

# App Router

Always use

App Router.

Do not use

Pages Router.

Every page should have

page.tsx

Example

app/

login/

page.tsx

register/

page.tsx

profile/

page.tsx

profile/edit/

page.tsx

---

# Layout

Use one global layout.

layout.tsx

Responsibilities

Navigation

Fonts

Theme

Toast Provider

Global Providers

Do not duplicate layouts.

---

# Components

Components should be:

Reusable

Small

Independent

Easy to test

Easy to understand

---

Good Components

Button

Input

Card

Navbar

ProfileCard

Avatar

LoadingSpinner

Bad Components

LoginPageBigComponent

ProfileEverything

MegaForm

---

# Component Rules

One responsibility.

Receive data through props.

Avoid unnecessary state.

Maximum

200 lines

Split large components.

---

# Forms

Use

React Hook Form

with

Zod

Every form validates before submission.

Every input displays validation errors.

Forms

Login

Register

Edit Profile

---

# Form Validation

Validate immediately.

Show friendly messages.

Example

Email is required.

Password must contain at least 8 characters.

Avoid technical messages.

---

# State Management

Use local state whenever possible.

Global state only for:

Authentication

Current User

Theme (future)

Do NOT introduce Redux or Zustand.

---

# Authentication State

Create

AuthContext

Responsibilities

Current User

Loading State

Login

Logout

Refresh User

Every page should consume the context.

---

# API Communication

All API calls belong inside

services/

Example

services/

auth.service.ts

user.service.ts

Never call fetch()

inside components.

Bad

LoginForm

↓

fetch()

Good

LoginForm

↓

AuthService

↓

fetch()

---

# Fetch Wrapper

Create

lib/api.ts

Responsibilities

Base URL

Credentials

Headers

Error handling

Every request uses this wrapper.

---

# Loading States

Every asynchronous action must show loading.

Examples

Login button

Saving profile

Loading profile

Skeletons preferred.

Avoid blank pages.

---

# Error Handling

Display friendly messages.

Example

Unable to login.

Please try again.

Avoid

500 Internal Server Error

Prisma Exception

Stack Trace

---

# Toast Notifications

Use Sonner.

Success

Profile updated successfully.

Error

Unable to update profile.

Keep notifications short.

---

# Styling

Tailwind only.

Avoid

CSS Modules

SCSS

Bootstrap

Material UI

Use utility classes.

---

# Design Principles

Minimal

Clean

Modern

Accessible

Responsive

Consistent

Whitespace is important.

Avoid visual clutter.

---

# Responsive Design

Desktop

Tablet

Mobile

Every page must adapt.

Mobile First.

---

# Breakpoints

Tailwind defaults.

sm

md

lg

xl

2xl

Do not create custom breakpoints.

---

# Typography

Use Geist.

Hierarchy

Heading

Subheading

Body

Caption

Consistent spacing.

---

# Colors

Neutral palette.

Primary

Black

Secondary

Gray

Accent

Blue

Avoid excessive colors.

---

# Buttons

Primary

Black background

White text

Secondary

White background

Border

Danger

Red

Disabled

Gray

Buttons should have

Hover

Focus

Disabled

Loading

states.

---

# Inputs

Every input includes

Label

Placeholder

Validation

Focus state

Error message

Required indicator

---

# Navigation

Simple navigation.

Version 1

Logo

Profile

Logout

Avoid unnecessary links.

---

# Profile Page

Displays

Avatar

Name

Email

Bio

Joined Date

Edit Profile Button

Simple vertical layout.

---

# Accessibility

Every form supports

Keyboard navigation

Labels

ARIA attributes where appropriate

Visible focus indicators

Do not rely on color alone.

---

# Images

Version 1

Default avatar

Future

Uploaded avatar

Use

next/image

whenever possible.

---

# Icons

Use

lucide-react

Keep icon sizes consistent.

---

# Animations

Small only.

Fade

Slide

Scale

Duration

150–250ms

Avoid excessive animation.

---

# Error Pages

404

Friendly message

Button back home

Future

500 page

---

# Empty States

Every empty screen explains what happened.

Avoid blank pages.

---

# Middleware

Frontend middleware

Checks authentication cookie.

Redirects

Guests

↓

Login

Authenticated users

↓

Profile

---

# Performance

Use

Server Components

by default.

Use

Client Components

only when necessary.

Examples

Forms

Interactive Buttons

Dropdowns

Modals

Everything else should remain server-rendered.

---

# Imports

Use aliases.

Good

@/components

@/services

@/hooks

Bad

../../../components

---

# Naming

Components

PascalCase

Hooks

camelCase

Utilities

camelCase

Types

PascalCase

---

# Frontend Philosophy

The frontend should be:

Predictable

Simple

Fast

Reusable

Easy to maintain

The UI should never contain business logic.

Business logic belongs in the backend.

The frontend should only display data and send user actions to the API.

---

# Version 1 Summary

Framework

Next.js 15

Language

TypeScript

Styling

Tailwind CSS

Components

shadcn/ui

Validation

Zod

Forms

React Hook Form

Notifications

Sonner

State

React Context

Architecture

Component-based

Rendering

Server Components by default

The frontend should remain lightweight, modular, and focused on delivering an excellent user experience.