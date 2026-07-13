# Database Design

Version: 1.0

---

# Purpose

This document defines the official database design for the project.

The database is the single source of truth for all persistent data.

Version 1 only contains the User entity.

Future entities should follow the same conventions defined here.

---

# Database Technology

Database

- SQLite

ORM

- Prisma ORM

Database File

backend/prisma/dev.db

---

# Design Principles

The database should be:

- Simple
- Predictable
- Normalized
- Secure
- Easy to migrate
- Easy to maintain

Avoid unnecessary tables.

Avoid premature optimization.

---

# Prisma Configuration

```prisma
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "sqlite"
  url      = env("DATABASE_URL")
}
```

DATABASE_URL

```env
DATABASE_URL="file:./dev.db"
```

---

# Current Schema

Version 1 contains one table.

User

Future versions may include:

- Sessions
- PasswordResetTokens
- EmailVerificationTokens
- Notifications
- Roles

Do not create them yet.

---

# User Model

```prisma
model User {
  id        String   @id @default(cuid())

  fullName  String
  email     String   @unique
  password  String

  bio       String?

  avatarUrl String?

  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

---

# Field Definitions

## id

Type

String

Generated

cuid()

Primary Key

Yes

Immutable

Yes

---

## fullName

Type

String

Required

Yes

Maximum Length

100 characters

Minimum Length

2 characters

Purpose

Stores the user's display name.

---

## email

Type

String

Required

Yes

Unique

Yes

Indexed

Automatically

Must always be lowercase.

Never allow duplicate emails.

---

## password

Type

String

Required

Yes

Contains

bcrypt hash

Never store plain text passwords.

Never return this field in API responses.

---

## bio

Type

String

Optional

Yes

Maximum Length

300 characters

Default

NULL

---

## avatarUrl

Type

String

Optional

Yes

Stores URL only.

Version 1 uses default avatar.

---

## createdAt

Automatically generated.

Never editable.

---

## updatedAt

Automatically updated whenever the user changes information.

---

# Constraints

Email

Unique

Password

Required

Full Name

Required

ID

Immutable

CreatedAt

Immutable

---

# Naming Convention

Tables

PascalCase

Example

User

Future

Notification

Session

Role

Fields

camelCase

Example

createdAt

updatedAt

avatarUrl

fullName

Never use

snake_case

Example

created_at ❌

user_name ❌

---

# IDs

Use

cuid()

Example

cmel0wd2p0000d8l1j4nh7w6m

Do NOT use

Auto Increment IDs

UUID

Random Numbers

Reason

cuid() is URL-safe and suitable for future distributed systems.

---

# Relationships

Version 1

No relationships.

Future

User

↓

Notification

User

↓

Session

User

↓

Role

The current design should remain compatible.

---

# Data Ownership

User owns

- Name
- Email
- Password
- Bio
- Avatar

Authentication owns

JWT

Database never stores JWT.

---

# Validation Rules

Full Name

Required

2–100 characters

Trim whitespace.

Email

Required

Lowercase

Valid email format

Unique

Password

Required

Minimum 8 characters

Maximum 100 characters

Bio

Maximum 300 characters

Trim whitespace.

Avatar URL

Optional

Must be valid URL if provided.

---

# Security Rules

Passwords

Always hashed.

Never decrypted.

Never returned.

Never logged.

Email

Should never expose whether an account exists during login failures.

---

# Migration Rules

All schema changes must use Prisma migrations.

Example

```bash
pnpm prisma migrate dev --name create-user
```

Never edit migration files manually.

---

# Prisma Client

Generate Prisma Client after schema changes.

```bash
pnpm prisma generate
```

---

# Database Access

Only

PrismaService

may communicate with Prisma.

Controllers

❌

Pages

❌

React Components

❌

Middleware

❌

Services

✅

---

# Query Rules

Always query using Prisma.

Good

```ts
await prisma.user.findUnique({
  where: {
    email,
  },
});
```

Bad

```sql
SELECT * FROM User;
```

Raw SQL is forbidden unless absolutely necessary.

---

# API Responses

Never return

password

Always return

id

fullName

email

bio

avatarUrl

createdAt

updatedAt

---

# Default Values

Bio

NULL

Avatar

NULL

CreatedAt

Current timestamp

UpdatedAt

Automatically managed

---

# Deletion Policy

Version 1

Users cannot delete accounts.

Future

Soft delete may be implemented.

Current schema should remain compatible.

---

# Seeding

No seed data required.

Future

A development seed may create

Test User

Admin User

Demo User

Version 1 starts with an empty database.

---

# Performance

The current schema is intentionally simple.

SQLite performance is more than sufficient.

Avoid optimization until required.

---

# Future Migration to PostgreSQL

The project should migrate by changing only

```prisma
provider = "postgresql"
```

and

DATABASE_URL

Business logic must not change.

API must not change.

Frontend must not change.

---

# Database Principles

The database should:

Store data.

Not contain business logic.

Not know about authentication.

Not know about UI.

Business rules belong inside services.

---

# Version 1 Summary

Tables

1

Models

User

Relationships

None

Authentication

JWT

ORM

Prisma

Database

SQLite

The schema intentionally remains small, clean, and easy to extend.