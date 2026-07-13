# Authentication SaaS

A modern full-stack authentication application built with Next.js and NestJS. Users can register, log in, manage their profile, and edit their personal information.

## Tech Stack

| Layer    | Technology                                  |
| -------- | ------------------------------------------- |
| Frontend | Next.js 15, TypeScript, Tailwind CSS, shadcn/ui |
| Backend  | NestJS, TypeScript                          |
| Database | SQLite, Prisma ORM                          |
| Auth     | JWT, bcrypt                                 |
| Packages | pnpm                                        |

## Features

- User registration & login
- JWT authentication (HTTP-only cookies)
- Password hashing with bcrypt
- Protected routes
- User profile page
- Edit profile (name, bio)
- Responsive UI
- Form validation (Zod, class-validator)
- Error handling

## Getting Started

### Prerequisites

- Node.js 18+
- pnpm

### Install dependencies

```bash
pnpm install
```

### Setup backend

```bash
cd backend
cp .env.example .env
npx prisma migrate dev
npx prisma db seed
```

### Run development servers

```bash
pnpm dev:frontend
pnpm dev:backend
```

## Project Structure

```
/
├── frontend/          # Next.js app
│   ├── app/           # Pages & routes
│   ├── components/    # UI components
│   ├── hooks/         # Custom hooks
│   ├── lib/           # Utilities
│   ├── services/      # API services
│   └── types/         # TypeScript types
├── backend/           # NestJS app
│   ├── src/
│   │   ├── auth/      # Authentication module
│   │   ├── users/     # Users module
│   │   └── prisma/    # Prisma service
│   └── prisma/        # Schema & migrations
└── docs/              # Documentation
```

## API Endpoints

| Method | Endpoint         | Description       |
| ------ | ---------------- | ----------------- |
| POST   | /auth/register   | Register new user |
| POST   | /auth/login      | Login             |
| GET    | /users/me        | Get profile       |
| PATCH  | /users/me        | Update profile    |

## License

MIT
