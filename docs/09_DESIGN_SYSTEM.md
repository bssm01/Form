# Design System

Version: 1.0

---

# Purpose

This document defines the visual language of the application.

Every page, component, and interaction must follow this design system.

Consistency is more important than creativity.

The UI should feel like a modern SaaS product:

- Clean
- Minimal
- Elegant
- Fast
- Professional
- Spacious

---

# Design Principles

Every interface should prioritize:

- Simplicity
- Readability
- Consistency
- Accessibility
- Performance

Avoid visual clutter.

If an element does not improve usability,
remove it.

---

# Design Inspiration

The design language should be inspired by modern applications such as:

- Instagram (clean layout principles only)
- Linear
- Notion
- Stripe Dashboard
- Vercel Dashboard

Do NOT copy:

- Logos
- Icons
- Brand colors
- Layouts pixel-by-pixel
- Proprietary assets

Take inspiration from spacing, typography, hierarchy, and simplicity only.

---

# Layout

Maximum Content Width

1200px

Default Content Width

1024px

Centered

Yes

Padding

Desktop

32px

Tablet

24px

Mobile

16px

---

# Grid

Desktop

12 Columns

Tablet

8 Columns

Mobile

4 Columns

Use CSS Grid or Flexbox.

Never use fixed positioning unless necessary.

---

# Spacing System

Use an 8-point spacing system.

Allowed values

4px

8px

12px

16px

24px

32px

40px

48px

64px

96px

Never invent random spacing values.

---

# Border Radius

Small

8px

Medium

12px

Large

16px

Cards

16px

Buttons

12px

Inputs

12px

Profile Avatar

Rounded Full

Consistency is mandatory.

---

# Shadows

Small

Cards

Dropdowns

Medium

Dialogs

Large

Modals

Avoid heavy shadows.

The interface should feel light.

---

# Colors

Primary

Black

#09090B

Secondary

White

#FFFFFF

Background

#FAFAFA

Card

#FFFFFF

Border

#E5E7EB

Text Primary

#111827

Text Secondary

#6B7280

Placeholder

#9CA3AF

Success

#22C55E

Warning

#F59E0B

Danger

#EF4444

Info

#3B82F6

Never use more than one accent color.

---

# Typography

Font

Geist

Fallback

system-ui

sans-serif

---

# Font Sizes

Hero

48px

H1

36px

H2

30px

H3

24px

Title

20px

Body

16px

Small

14px

Caption

12px

Never use inconsistent font sizes.

---

# Font Weight

Regular

400

Medium

500

SemiBold

600

Bold

700

Avoid extra-bold typography.

---

# Line Height

Headings

120%

Body

150%

Paragraphs should be easy to read.

---

# Buttons

Primary

Black Background

White Text

Hover

Slightly lighter black

Disabled

Gray

Loading

Spinner

Secondary

White

Border

Black Text

Hover

Light Gray Background

Danger

Red

Ghost

Transparent

Text Only

Icon Button

Square

40x40

Buttons should always have

Hover

Focus

Disabled

Loading

states.

---

# Inputs

Height

44px

Rounded

12px

Border

1px

Placeholder

Gray

Label

Required

Error

Red Border

Focus

Blue Ring

Every input should include

Label

Placeholder

Validation

Error Message

---

# Cards

White Background

16px Radius

1px Border

Small Shadow

24px Padding

Cards should group related information.

Avoid nesting cards inside cards.

---

# Forms

Single Column

Maximum Width

420px

Centered

Yes

Spacing

24px

Buttons full width.

Validation immediately below inputs.

---

# Navigation

Simple.

Logo

Left

User Menu

Right

No sidebar in Version 1.

Navigation Height

64px

Sticky

Optional

---

# Profile Page

Centered

Vertical Layout

Order

Avatar

↓

Full Name

↓

Email

↓

Bio

↓

Joined Date

↓

Edit Button

Everything aligned consistently.

---

# Avatar

Size

96px

Shape

Circle

Fallback

User Initials

Future

Image Upload

---

# Icons

Library

lucide-react

Default Size

20px

Large

24px

Small

16px

Do not mix icon libraries.

---

# Tables

Not required in Version 1.

Future

Simple

Minimal

Striped optional.

---

# Modals

Centered

Rounded

16px

Overlay

Dark with blur

Close Button

Top Right

ESC closes modal.

---

# Toasts

Top Right

Short

Readable

Auto Close

4 seconds

Success

Green

Error

Red

---

# Loading

Skeletons preferred.

Avoid spinners for full pages.

Buttons use inline spinner.

---

# Empty States

Every empty state includes

Illustration (future)

Title

Description

Primary Action

Never show blank pages.

---

# Error States

Friendly language.

Example

Unable to load your profile.

Please try again.

Avoid technical messages.

---

# Animations

Duration

150ms

200ms

250ms

Allowed

Fade

Scale

Slide

Hover

Avoid long animations.

Avoid bouncing effects.

---

# Responsive Design

Mobile First

Every page should work on

320px

375px

768px

1024px

1440px

Never require horizontal scrolling.

---

# Accessibility

Contrast ratio

WCAG AA

Keyboard navigation

Required

Focus indicators

Required

Labels

Required

ARIA

When appropriate

Never rely on color alone.

---

# Images

Use next/image

Optimize automatically.

Lazy load below the fold.

---

# White Space

White space is intentional.

Do not fill every empty area.

Breathing room improves readability.

---

# Consistency Rules

Every page should feel like it belongs to the same product.

Buttons always look identical.

Cards always look identical.

Forms always look identical.

Typography always follows the scale.

Spacing always follows the spacing system.

Never create one-off styles.

---

# Design Philosophy

The interface should disappear.

Users should focus on their task,
not on the design.

Every visual decision should improve clarity.

Remove unnecessary elements.

Prefer simple over flashy.

Minimalism is a feature.

---

# Version 1 Summary

Style

Modern SaaS

Layout

Centered

Spacing

8-point system

Typography

Geist

Colors

Neutral

Radius

12–16px

Shadows

Soft

Forms

Simple

Cards

Minimal

Buttons

Consistent

Responsive

Yes

Accessibility

Required

The entire application should look cohesive, lightweight, and production-ready.