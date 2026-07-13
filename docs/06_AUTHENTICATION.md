# Authentication System

Version: 1.0

---

# Purpose

This document defines the authentication system for the application.

Authentication is responsible for:

- Registering users
- Logging users in
- Protecting private routes
- Identifying authenticated users
- Managing JWT tokens

Authentication is NOT responsible for:

- Editing user profiles
- Business logic unrelated to authentication
- Database design
- UI rendering

---

# Authentication Strategy

The application uses:

- JWT (JSON Web Token)
- bcrypt password hashing
- HTTP-only cookies for authentication transport

Standardized policy:

- ✅ JWT
- ✅ HTTP-only cookies
- ❌ No localStorage
- ❌ No sessionStorage

Version 1 does NOT use:

- Refresh Tokens
- OAuth
- Sessions
- Two Factor Authentication

---

# Authentication Flow

Guest

↓

Register

↓

Password Hashed

↓

User Saved

↓

JWT Generated

↓

Cookie Created

↓

Redirect to Profile

---

Returning User

↓

Login

↓

Password Verification

↓

JWT Generated

↓

Cookie Created

↓

Redirect to Profile

---

Authenticated User

↓

JWT Verified

↓

User Loaded

↓

Protected Route

↓

Response

---

# Registration Flow

Endpoint

POST /auth/register

Request

```json
{
  "fullName": "John Doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Backend Steps

1.

Validate DTO

↓

2.

Trim whitespace

↓

3.

Convert email to lowercase

↓

4.

Check if email already exists

↓

5.

Hash password

↓

6.

Create user

↓

7.

Generate JWT

↓

8.

Set HTTP-only cookie

↓

9.

Return user information

---

# Login Flow

Endpoint

POST /auth/login

Request

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

Backend Steps

1.

Validate DTO

↓

2.

Find user by email

↓

3.

Compare password using bcrypt

↓

4.

Generate JWT

↓

5.

Set HTTP-only cookie

↓

6.

Return authenticated user

---

# Logout Flow

Endpoint

POST /auth/logout

Backend Steps

1.

Clear authentication cookie

↓

2.

Return success response

The server does not need to invalidate tokens because Version 1 uses short-lived JWTs.

---

# JWT Payload

Only store necessary information.

Example

```json
{
  "sub": "userId",
  "email": "john@example.com"
}
```

Never include:

- Password
- Bio
- Avatar
- Full Name

JWT should remain small.

---

# JWT Expiration

Recommended

24 Hours

Environment Variable

JWT_EXPIRES_IN=24h

---

# JWT Secret

Store in

.env

Example

```env
JWT_SECRET=super-secret-key
```

Never hardcode secrets.

Never commit secrets.

---

# Password Hashing

Library

bcrypt

Salt Rounds

10

Example

```
password

↓

bcrypt.hash()

↓

$2b$10$...
```

Passwords are never decrypted.

Passwords are only compared.

---

# Cookie Configuration

Use HTTP-only cookies for all authentication state.

Example

```
httpOnly: true
secure: production only
sameSite: "lax"
```

The frontend must never store JWTs in browser storage.

Never use:

- localStorage
- sessionStorage

Reason

HTTP-only cookies reduce XSS risks and are the recommended production approach for Next.js + NestJS applications.

---

# Protected Routes

Frontend

Middleware checks if authentication cookie exists.

Backend

JWT Guard verifies token.

Only authenticated users can access:

- /profile
- /profile/edit

Guests attempting to access protected pages are redirected to:

/login

---

# Current User

Endpoint

GET /users/me

Purpose

Returns the authenticated user's profile.

Backend

JWT Guard

↓

Extract User ID

↓

Load User

↓

Return Profile

---

# Authentication Guard

Responsibilities

- Verify JWT
- Reject invalid token
- Reject expired token
- Attach authenticated user to request

Controllers should never verify JWT manually.

---

# Authentication Service Responsibilities

The AuthService is responsible for:

- Register
- Login
- Hash Password
- Compare Password
- Generate JWT
- Validate Credentials

The AuthService should NOT:

- Update profile
- Delete users
- Modify unrelated data

---

# User Service Responsibilities

UserService handles:

- Profile retrieval
- Profile updates

UserService should never:

- Generate JWT
- Compare passwords
- Authenticate users

---

# Validation

Frontend

Immediate feedback.

Backend

Final validation.

Backend validation is mandatory.

Never trust frontend validation.

---

# Login Errors

Always return generic errors.

Good

```json
{
  "message": "Invalid email or password"
}
```

Bad

```
Email not found
```

or

```
Incorrect password
```

Reason

Avoid leaking account existence.

---

# Registration Errors

Possible errors

400

Invalid input

409

Email already exists

500

Unexpected server error

---

# Authorization

Version 1

Every authenticated user has identical permissions.

No roles.

No admin.

Future versions may introduce:

- User
- Moderator
- Admin

---

# Token Verification

Every protected request

↓

Read Cookie

↓

Verify Signature

↓

Verify Expiration

↓

Extract User ID

↓

Continue Request

If verification fails

↓

401 Unauthorized

---

# Password Rules

Minimum

8 characters

Maximum

100 characters

Recommended

At least one:

- Uppercase
- Lowercase
- Number

Special characters encouraged but not required.

---

# Security Rules

Never log:

Passwords

JWT

Secrets

Cookies

Never return:

Password Hash

Salt

JWT Secret

---

# Environment Variables

Required

```
DATABASE_URL

JWT_SECRET

JWT_EXPIRES_IN
```

Never hardcode them.

---

# Frontend Responsibilities

Frontend

Collects credentials

Displays errors

Shows loading state

Redirects after success

Stores no authentication logic

---

# Backend Responsibilities

Backend

Authenticates users

Generates JWT

Hashes passwords

Validates requests

Protects routes

Returns responses

---

# Authentication Principles

Authentication should be:

Simple

Secure

Stateless

Predictable

Maintainable

Never sacrifice security for convenience.

---

# Version 1 Summary

Authentication Method

JWT

Password Storage

bcrypt

Transport

HTTP-only Cookie

Protected Routes

JWT Guard

Refresh Tokens

No

OAuth

No

Two Factor Authentication

No

The authentication system should remain small, secure, and easy to extend in future versions.