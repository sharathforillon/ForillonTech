# Forillon Technologies Website

## Overview

This is a modern, enterprise-grade marketing website for Forillon Technologies, built as a full-stack application with React frontend and Express backend. The site showcases the company's technology consulting services, including AI consulting, digital transformation, and enterprise architecture solutions.

**Status**: ✅ Live in production at https://forillontech.com

## Recent Changes

- **August 05, 2025**: Added "Digital Innovation Strategy" as 6th core service offering across all sections of website
- **August 05, 2025**: Created dedicated Digital Innovation Strategy page with comprehensive strategic consulting services
- **August 05, 2025**: Synchronized all solutions listings across website to ensure "Enterprise Security & Testing" appears consistently in home page, navigation dropdown, footer, and main solutions page
- **August 05, 2025**: Updated main solutions page to match the core service offerings established in navigation
- **August 02, 2025**: Added ISG Testing and Penetration Testing as new security services
- **August 02, 2025**: Created dedicated Security Testing & Validation page with comprehensive service offerings
- **August 02, 2025**: Enhanced security solutions portfolio with vulnerability assessment and compliance testing
- **July 22, 2025**: MAJOR TRANSFORMATION: Completely redesigned website to match IBM Consulting's world-class enterprise standards
- **July 22, 2025**: Implemented comprehensive enterprise-grade design system with refined typography, professional spacing, and polished interactions
- **July 22, 2025**: Created IBM-inspired CSS utilities: advanced typography scale, professional spacing system, enterprise button styles, and sophisticated card components
- **July 22, 2025**: Enhanced hero section with "The science of transformation" messaging, cleaner backgrounds, and professional badge styling
- **July 22, 2025**: Upgraded navigation with refined styling, improved hover states, and professional dropdown menus
- **July 22, 2025**: Transformed all sections (About, Solutions, Contact) with card-elevated components and consistent enterprise spacing
- **July 22, 2025**: Applied consistent max-width (max-w-6xl) and professional padding (px-6 lg:px-8) across all sections
- **July 22, 2025**: Implemented subtle background patterns and ambient lighting effects following IBM design principles
- **July 22, 2025**: Enhanced button styling with proper hover states, focus management, and accessibility improvements
- **July 22, 2025**: Complete database export system with downloadable PostgreSQL backups and web interface
- **July 22, 2025**: Maintained all existing functionality while dramatically improving visual polish and user experience

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