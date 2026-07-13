# Git Conventions

Version: 1.0

---

# Purpose

This document defines the expected Git workflow for the project.
It helps keep collaboration predictable, reviewable, and professional.

---

# Branch Naming

Use descriptive branch names with lowercase and hyphens.

## Format

<type>/<short-description>

## Examples
- feature/user-authentication
- fix/login-validation
- chore/update-dependencies
- docs/add-api-spec

## Allowed Types
- feature
- fix
- chore
- docs
- refactor
- test
- perf

---

# Commit Message Format

Use Conventional Commits.

## Format

<type>(<scope>): <short summary>

## Examples
- feat(auth): add login endpoint
- fix(ui): correct form validation state
- docs(api): update response format
- chore(deps): upgrade nestjs packages

## Common Types
- feat: new feature
- fix: bug fix
- docs: documentation changes
- style: formatting or style-only changes
- refactor: code refactoring
- test: tests
- chore: maintenance tasks

---

# Pull Request Rules

Every change should be submitted through a pull request.

## PR Requirements
- Clear title
- Short summary of changes
- List of impacted files or areas
- Testing notes
- Screenshots for UI changes when relevant

## PR Checklist
- Code follows project standards
- Tests are added or updated when needed
- Documentation is updated if required
- No debug code or temporary comments remain

---

# Code Review Expectations

Reviewers should:
- Check correctness and maintainability
- Look for security issues
- Ensure naming and structure are clear
- Verify tests and edge cases
- Keep feedback constructive and specific

Authors should:
- Respond to comments promptly
- Make requested changes clearly
- Keep discussions focused on the code

---

# Merge Rules

- Do not merge with failing checks
- Do not merge without review approval
- Prefer squash merges for small or related changes
- Keep commit history readable

---

# Branch Lifecycle

- Create a branch from the latest main branch
- Keep branches short-lived
- Rebase or merge main regularly
- Delete branches after merge

---

# Example Workflow

1. Create a branch
2. Make focused changes
3. Commit with Conventional Commits
4. Push the branch
5. Open a pull request
6. Address review feedback
7. Merge after approval
