# Security Guidelines

Version: 1.0

---

# Purpose

This document defines the security requirements of the application.

Security is mandatory.

Never sacrifice security for convenience.

Every feature must follow these rules.

---

# Security Principles

The application should be:

- Secure by default
- Privacy focused
- Least privilege
- Fail safely
- Defensive against common attacks

Never trust user input.

Never trust the client.

Always validate data on the server.

---

# Authentication

Authentication Method

JWT

Transport

HTTP-only Cookies

Passwords

bcrypt

The backend is responsible for authentication.

The frontend only sends credentials.

---

# Password Security

Passwords must never be stored in plain text.

Passwords must always be hashed using bcrypt.

Salt Rounds

10

Never decrypt passwords.

Passwords are only compared using bcrypt.compare().

---

# Password Requirements

Minimum Length

8 characters

Maximum Length

100 characters

Recommended

- One uppercase letter
- One lowercase letter
- One number

Special characters are encouraged.

---

# JWT Security

JWT Secret

Store inside

.env

Example

JWT_SECRET=your-super-secret-key

Never commit secrets to Git.

Never hardcode secrets.

---

# JWT Payload

JWT should contain only

User ID

Email

Never store

Password

Role permissions (Version 1)

Personal information

Large objects

JWT should remain lightweight.

---

# Cookie Security

Authentication cookies must be

HTTP Only

Yes

Secure

Production Only

SameSite

Lax

Path

/

Expiration

24 Hours

Never store authentication tokens inside

- localStorage
- sessionStorage
- IndexedDB

---

# HTTPS

Development

HTTP allowed.

Production

HTTPS required.

Reject insecure production deployments.

---

# Environment Variables

Secrets belong inside

.env

Required

DATABASE_URL

JWT_SECRET

JWT_EXPIRES_IN

Never expose secrets to the frontend.

Only variables prefixed with

NEXT_PUBLIC_

may be accessible in the frontend.

---

# Input Validation

Validate every request.

Frontend validation improves UX.

Backend validation provides security.

Never rely on frontend validation.

---

# DTO Validation

Use

class-validator

Enable global ValidationPipe.

Configuration

- whitelist
- forbidNonWhitelisted
- transform

Reject unknown fields.

---

# SQL Injection

Use Prisma ORM.

Never concatenate SQL strings.

Good

await prisma.user.findUnique({
  where: {
    email
  }
})

Bad

SELECT * FROM users WHERE email = '${email}'

Never execute raw SQL unless absolutely necessary.

---

# Cross-Site Scripting (XSS)

Never render untrusted HTML.

Do not use

dangerouslySetInnerHTML

unless absolutely necessary.

Escape user-generated content.

---

# Cross-Site Request Forgery (CSRF)

Version 1

Use SameSite=Lax cookies.

Future versions may add CSRF tokens if cross-origin forms or APIs are introduced.

---

# Authentication Errors

Always return generic messages.

Good

Invalid email or password.

Bad

Email not found.

Bad

Incorrect password.

Never reveal whether an account exists.

---

# Rate Limiting

Recommended

Login

5 attempts per minute

Register

5 requests per minute

Profile Update

30 requests per minute

Future implementation

@nestjs/throttler

---

# Brute Force Protection

Repeated login failures should eventually be rate limited.

Future

Temporary account lock

IP throttling

---

# Sensitive Data

Never expose

Password

Password Hash

JWT Secret

Database URL

Stack Trace

Cookies

Private Keys

Internal Errors

---

# Logging

Never log

Passwords

Cookies

JWT

Secrets

Sensitive personal information

Good

User logged in

Bad

Password entered: password123

---

# Error Messages

User-facing errors should remain simple.

Good

Unable to login.

Good

Profile updated successfully.

Bad

PrismaClientKnownRequestError

Bad

TypeError

Bad

JWT Verification Exception

---

# Authorization

Every protected endpoint must use

JWT Guard

Never trust frontend authentication.

Always verify authentication on the server.

---

# File Uploads

Version 1

Not implemented.

Future

Accept only image files.

Validate MIME type.

Limit file size.

Rename uploaded files.

Never trust original filenames.

---

# API Security

Always use JSON.

Never accept unexpected fields.

Reject malformed requests.

Use consistent response formats.

---

# CORS

Development

Allow frontend origin.

Production

Allow only trusted origins.

Never use

*

with credentials enabled.

---

# Headers

Recommended

Helmet

Enable standard security headers.

Future

Content Security Policy (CSP)

Strict-Transport-Security (HSTS)

X-Content-Type-Options

Referrer-Policy

---

# Dependency Security

Use maintained libraries.

Regularly update dependencies.

Run

pnpm audit

before releases.

Remove unused packages.

---

# Secrets Management

Never commit

.env

Use

.env.example

for documentation.

Every developer creates a local

.env

Never expose secrets in screenshots or documentation.

---

# Database Security

Only the backend accesses SQLite.

Frontend never communicates with the database.

Prisma is the only database client.

---

# Principle of Least Privilege

Every module should have only the permissions it requires.

Avoid unnecessary access to other modules.

---

# Session Management

Authentication is stateless.

JWT expires after 24 hours.

Logout removes the authentication cookie.

Future versions may support refresh tokens.

---

# Monitoring

Log important security events.

Examples

Successful login

Failed login

Profile update

Do not log sensitive values.

---

# Secure Defaults

Default avatar

No public profile

No public API

No debug endpoints

No open admin routes

Everything should be private unless explicitly documented.

---

# Production Checklist

Before deployment

✓ HTTPS enabled

✓ JWT secret configured

✓ Environment variables configured

✓ Helmet enabled

✓ CORS configured

✓ Validation enabled

✓ Password hashing verified

✓ Sensitive logs removed

✓ .env excluded from Git

✓ Dependencies updated

✓ Lint passes

✓ Tests pass

---

# OWASP Awareness

The application should be built with awareness of common OWASP Top 10 risks, including:

- Broken Access Control
- Cryptographic Failures
- Injection
- Insecure Design
- Security Misconfiguration
- Vulnerable Components
- Identification and Authentication Failures
- Software Integrity Failures
- Logging and Monitoring Failures
- Server-Side Request Forgery (SSRF)

Version 1 does not need to implement every mitigation, but the architecture should not make them harder to address later.

---

# Security Philosophy

Security is not a feature.

Security is part of every feature.

Every endpoint

Every component

Every request

Every response

must be designed with security in mind.

A secure application is easier to trust, easier to maintain, and easier to scale.