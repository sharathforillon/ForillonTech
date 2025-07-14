# Forillon Technologies Website

## Overview

This is a modern, enterprise-grade marketing website for Forillon Technologies, built as a full-stack application with React frontend and Express backend. The site showcases the company's technology consulting services, including AI consulting, digital transformation, and enterprise architecture solutions.

**Status**: ✅ Live in production at https://forillontech.com

## Recent Changes

- **January 11, 2025**: Successfully deployed to custom domain forillontech.com
- **January 11, 2025**: Complete brand styling implementation with IBM Plex Sans font and full color palette
- **January 11, 2025**: Hero banner dramatically enhanced with professional video background and sophisticated design
- **January 11, 2025**: Updated global presence messaging to include Dubai, UAE alongside Toronto, Canada operations
- **January 11, 2025**: Professional dropdown navigation with dedicated service pages implemented
- **January 11, 2025**: Solutions section redesigned with enterprise-focused layout (eliminated amateur thumbnails)
- **January 11, 2025**: Created 5 dedicated service pages with professional design and content
- **January 11, 2025**: Enhanced services layout with 2-column grid, hover effects, and professional CTAs
- **January 11, 2025**: Added social proof section with sample engagements across industries
- **January 11, 2025**: Integrated "Book a Consultation" Calendly links throughout the site
- **January 11, 2025**: Enhanced contact form with prominent CTA buttons and improved UX
- **January 11, 2025**: Navigation consistency implemented across all pages
- **January 11, 2025**: Footer components added to all pages for uniform design
- **January 11, 2025**: About page redesigned with Canadian presence highlighting Toronto operations
- **January 11, 2025**: Blog system with Netlify CMS integration completed

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **Routing**: Wouter for lightweight client-side routing
- **UI Framework**: shadcn/ui components built on Radix UI primitives
- **Styling**: Tailwind CSS with custom design system
- **State Management**: TanStack Query for server state management
- **Forms**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Session Storage**: PostgreSQL-based sessions using connect-pg-simple
- **Development**: Hot reload with Vite middleware integration

### Design System
- **Typography**: IBM Plex Sans font family from Google Fonts
- **Color Palette**: Custom Forillon brand colors (Navy, Electric Teal, Silver Mist, etc.)
- **Components**: Comprehensive UI component library with consistent styling
- **Responsive**: Mobile-first design with Tailwind breakpoints

## Key Components

### Frontend Components
- **Navigation**: Sticky header with smooth scrolling navigation
- **Hero Section**: Brand-focused landing area with CTAs
- **About/Solutions/Why Forillon**: Service showcase sections
- **Blog System**: Content management with markdown support
- **Contact Form**: Interactive form with toast notifications
- **UI Components**: Complete shadcn/ui component library

### Backend Infrastructure
- **Route Registration**: Centralized API route management
- **Storage Interface**: Abstracted data access layer with in-memory fallback
- **Vite Integration**: Development server with HMR support
- **Static File Serving**: Production-ready asset serving

### Content Management
- **Blog Posts**: Markdown-based content system
- **Netlify CMS**: Integrated content management interface
- **Static Assets**: Organized asset management structure

## Data Flow

### Client-Side Data Flow
1. React components use TanStack Query for API calls
2. Wouter handles client-side routing
3. Form submissions trigger toast notifications
4. Smooth scrolling navigation between sections

### Server-Side Data Flow
1. Express middleware processes requests
2. Storage interface abstracts database operations
3. Drizzle ORM manages PostgreSQL interactions
4. Session management via PostgreSQL store

### Content Flow
1. Blog content stored as markdown files
2. Netlify CMS provides editing interface
3. Static content served directly
4. Dynamic routing for blog posts

## External Dependencies

### Core Dependencies
- **Database**: Neon PostgreSQL (serverless)
- **UI Library**: Radix UI primitives
- **Validation**: Zod schema validation
- **Date Handling**: date-fns utility library
- **Icons**: Lucide React icon library

### Development Tools
- **Build**: esbuild for production backend bundling
- **TypeScript**: Full type safety across frontend and backend
- **Linting**: Built-in TypeScript checking
- **Development**: Replit-specific development tools

### Content & Assets
- **Fonts**: Google Fonts (IBM Plex Sans)
- **Images**: Unsplash for placeholder content
- **CMS**: Netlify CMS for content management

## Deployment Strategy

### Production Deployment
- **Status**: ✅ Successfully deployed and domain verified
- **Live URL**: https://forillontech.com
- **Replit URL**: https://forillon-tech-srk199130.replit.app
- **Platform**: Replit Deployments
- **SSL**: Automatically configured
- **DNS**: Custom domain verified and connected

### Build Process
1. **Frontend**: Vite builds React app to `dist/public`
2. **Backend**: esbuild bundles Express server to `dist/index.js`
3. **Database**: Drizzle Kit manages schema migrations
4. **Assets**: Static files served from public directory

### Environment Configuration
- **Development**: Node.js with Vite dev server and HMR
- **Production**: Node.js server serving static files and API
- **Database**: PostgreSQL connection via DATABASE_URL environment variable

### Hosting Requirements
- Node.js runtime environment
- PostgreSQL database (Neon serverless recommended)
- Static file serving capability
- Environment variable support for configuration

### Database Setup
- Drizzle ORM with PostgreSQL dialect
- Migration files stored in `./migrations`
- Schema defined in `./shared/schema.ts`
- User management system with authentication ready

The application follows a monorepo structure with shared TypeScript types and utilities, making it maintainable and scalable for enterprise use.