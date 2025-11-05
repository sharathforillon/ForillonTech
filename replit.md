# Forillon Technologies Website

## Overview

This is a modern, enterprise-grade marketing website for Forillon Technologies, showcasing its technology consulting services, including AI consulting, digital transformation, and enterprise architecture solutions. It is a full-stack application with a React frontend and an Express backend, live in production at https://forillontech.com. The project aims to provide a professional online presence, capture leads, and manage client interactions efficiently.

## Recent Changes

- **November 05, 2025**: ✅ STUNNING VISUAL REDESIGN: Checkbox landing page now features full-screen hero with rich blue-teal gradient, all content clearly visible with enhanced contrast
- **November 05, 2025**: ✅ Removed navigation from /checkbox for distraction-free marketing experience
- **November 05, 2025**: ✅ Enhanced text visibility: White text with glowing shadows, gold "days, not months" accent, emerald green value props
- **November 05, 2025**: ✅ Admin dashboard Features column displays ALL selected features (no truncation)
- **November 05, 2025**: ✅ Email notifications sent to BOTH sreddy@forillontech.com AND support@forillontech.com

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### UI/UX Decisions
The website features an enterprise-grade design system inspired by IBM Consulting standards, utilizing the IBM Plex Sans typography and a custom vibrant enterprise color palette. It incorporates modern UI elements like gradient backgrounds, glassmorphism effects, floating animated orbs, premium shadows, and smooth transitions. Key design choices include a mobile-first responsive approach, consistent spacing, elevated card components, and professional navigation with improved hover states. The Checkbox landing page was notably redesigned with a tactile feature selection interface, a modal-based lead form, and a sticky summary panel.

### Technical Implementations
- **Frontend**: Built with React 18 and TypeScript, using Vite for fast development, Wouter for routing, shadcn/ui (Radix UI primitives) for UI components, Tailwind CSS for styling, TanStack Query for server state management, and React Hook Form with Zod for form validation.
- **Backend**: Node.js with Express.js and TypeScript (ES modules). It uses PostgreSQL with Drizzle ORM for database interactions and `connect-pg-simple` for session management. Development includes hot reloading with Vite middleware integration.
- **Admin Dashboard**: A comprehensive system with PostgreSQL integration for managing contact, partnership, and demo request records, including CSV export functionality and an authentication system.
- **Analytics**: Integrated with GA4, LinkedIn Insight Tag, and Meta Pixel, supported by a custom analytics wrapper library for multi-platform tracking.
- **Lead Capture**: Implemented a robust lead capture system for demo requests, storing data in the database, displaying it in the admin dashboard, and sending email notifications.

### Feature Specifications
- **Core Services Showcase**: Dedicated sections and pages for AI consulting, digital transformation, enterprise architecture, and a newly added "Digital Innovation Strategy."
- **Checkbox Landing Page (`/checkbox`)**: A white-label survey platform showcase allowing users to select features from "Tech Platform" and "Research Help Desk" categories, with a streamlined lead form flow and comprehensive tracking.
- **Blog System**: Markdown-based content management.
- **Contact & Partnership Forms**: Capture and store submissions in the database for admin tracking.

## External Dependencies

- **Database**: Neon PostgreSQL (serverless)
- **UI Library**: Radix UI primitives
- **Validation**: Zod schema validation
- **Date Handling**: `date-fns` utility library
- **Icons**: Lucide React icon library
- **Fonts**: Google Fonts (IBM Plex Sans)
- **Email Service**: SendGrid (for demo request notifications)
- **Scheduling**: Calendly (integrated into the demo request success flow)
- **CRM Integration**: HubSpot (configured via environment variables)
- **Analytics**: Google Analytics 4, LinkedIn Insight Tag, Meta Pixel
- **CMS**: Netlify CMS (for content management)