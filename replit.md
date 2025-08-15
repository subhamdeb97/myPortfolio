# Overview

This is a portfolio website for Subham Deb, a Salesforce Developer and Full-Stack Engineer. The application is built as a single-page application showcasing personal information, skills, projects, and providing a contact form for potential clients. It features a modern, responsive design with sections for hero introduction, about, skills, projects, and contact functionality.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **Routing**: Wouter for lightweight client-side routing (single route to Home page)
- **UI Framework**: Shadcn/ui components built on Radix UI primitives with Tailwind CSS for styling
- **State Management**: TanStack Query (React Query) for server state management
- **Form Handling**: React Hook Form with Zod validation for the contact form
- **Styling**: Tailwind CSS with custom CSS variables and a neutral color scheme

## Backend Architecture
- **Runtime**: Node.js with Express.js server
- **Language**: TypeScript with ES modules
- **Database ORM**: Drizzle ORM configured for PostgreSQL
- **API Pattern**: RESTful API with dedicated routes for contact form submissions
- **Error Handling**: Centralized error handling middleware with structured error responses
- **Development**: Vite middleware integration for hot reloading in development

## Data Storage Solutions
- **Database**: PostgreSQL (configured via Drizzle ORM)
- **Connection**: Neon Database serverless connection
- **Schema Management**: Drizzle Kit for migrations and schema management
- **Development Storage**: In-memory storage implementation for development/testing
- **Tables**: Users table and contact submissions table with proper indexing and constraints

## Authentication and Authorization
- **Current State**: Basic user schema defined but no active authentication implemented
- **Session Management**: Connect-pg-simple configured for PostgreSQL session storage
- **Security**: Prepared for future authentication implementation with password hashing capability

## API Structure
- **Contact Endpoint**: POST `/api/contact` for form submissions with validation
- **Admin Endpoint**: GET `/api/contact` for retrieving all contact submissions
- **Validation**: Zod schema validation for all incoming data
- **Response Format**: Consistent JSON responses with success/error states

# External Dependencies

## UI and Styling
- **Radix UI**: Complete set of accessible UI primitives for building the component library
- **Tailwind CSS**: Utility-first CSS framework for styling
- **Lucide React**: Icon library for consistent iconography
- **Class Variance Authority**: For managing component variants and styling logic

## Database and ORM
- **Neon Database**: Serverless PostgreSQL database provider
- **Drizzle ORM**: Type-safe ORM for database operations and schema management
- **Drizzle Kit**: CLI tools for database migrations and schema generation

## Development Tools
- **Vite**: Build tool and development server with React plugin
- **TypeScript**: Type checking and enhanced development experience
- **ESBuild**: Fast bundling for production builds
- **TSX**: TypeScript execution for development server

## Form and Validation
- **React Hook Form**: Efficient form state management
- **Zod**: Runtime type validation and schema definition
- **Hookform Resolvers**: Integration between React Hook Form and Zod

## State Management
- **TanStack Query**: Server state management, caching, and synchronization
- **React**: Built-in state management for local component state

## Fonts and Assets
- **Google Fonts**: Inter font family for typography
- **Unsplash**: External image hosting for project showcase and about section images