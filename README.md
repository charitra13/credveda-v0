# CredVeda Landing Page

*Data Analytics and AI Solutions Platform*

[![Built with v0](https://img.shields.io/badge/Built%20with-v0.app-black?style=for-the-badge)](https://v0.app/chat/projects/v57yiJxeOA7)

## Overview

CredVeda is a comprehensive data analytics and AI solutions platform designed to help businesses make data-driven decisions with advanced analytics, AI-powered insights, and custom dashboards.

## Version History

### Version 2.1 - Footer Navigation Layout Update
- **Date**: Current
- **Changes**: 
  - **UI UPDATE**: Changed footer navigation from vertical to horizontal layout
  - Updated navigation links container to use flex-row instead of flex-col
  - Improved spacing between navigation items with increased gap (gap-6)
  - Enhanced visual alignment by centering navigation items horizontally
  - Maintained existing hover effects and styling while improving layout efficiency

### Version 2.0 - CTA Button Updates & Footer Branding
- **Date**: Previous
- **Changes**: 
  - **CTA UPDATE**: Updated all CTA buttons across the website to redirect to contact section
  - Added smooth scroll functionality to pricing section "Get Started" and "Contact Us" buttons
  - Updated showcase section play button to redirect to contact section
  - **FOOTER UPDATE**: Updated footer branding to match hero section byline "Stronger. Smarter. AI Integrated."
  - Simplified footer navigation to match header navigation (Features, Showcase, Pricing, Contact)
  - Removed extra navigation links from footer for cleaner design
  - Maintained consistent branding across all sections

### Version 1.9 - Testimonials Section Removal
- **Date**: Previous
- **Changes**: 
  - **UI UPDATE**: Removed "Coding made effortless" testimonials section from website display
  - Commented out TestimonialGridSection import in main page component
  - Commented out testimonials section rendering in page layout
  - Preserved all testimonial component code in codebase for future use
  - Maintained website functionality while hiding testimonials section

### Version 1.8 - Complete Rebranding from Pointer to CredVeda
- **Date**: Current
- **Changes**: 
  - **MAJOR REBRANDING**: Replaced all instances of "Pointer" with "CredVeda" throughout the codebase
  - Updated footer section brand name from "Pointer" to "CredVeda"
  - Replaced all testimonial quotes referencing "Pointer" with "CredVeda"
  - Updated branch names in parallel-agents component from "pointer/" to "credveda/"
  - Changed package.json project name from "my-v0-project" to "credveda-landing-page"
  - Maintained consistent branding across all user-facing content
  - Preserved all existing functionality while updating brand references

### Version 1.7 - Features Section Redesign
- **Date**: Current
- **Changes**: 
  - **MAJOR UI UPDATE**: Completely redesigned the features section from avatar-based testimonials to icon-based feature blocks
  - Replaced avatar images with professional Lucide React icons (BarChart3, Layout, Clock, Target, Shield, Database)
  - Updated feature content to 6 specific NBFC-focused capabilities:
    - Jurisdiction-Aware Analytics with regulatory compliance insights
    - Customizable Dashboards with drag-and-drop widgets
    - 30-Minute Data Refresh for real-time decision making
    - Departmental KPI Tracking across Sales, Credit, Collections
    - Zero Trust Network Integration with advanced security protocols
    - SQL Database Connectivity with native integration support
  - Maintained responsive bento grid layout (3 columns on desktop)
  - Applied uniform green accent color for visual consistency
  - Enhanced typography hierarchy with bold headings and concise descriptions
  - Preserved rounded corners, spacing, and background effects from original design

### Version 1.6 - Pricing Model Update
- **Date**: Current
- **Changes**: 
  - **PRICING UPDATE**: Changed all pricing plans from monthly to yearly billing
  - Removed monthly/annual toggle functionality from pricing section
  - Updated pricing display to show "/year" instead of "/month"
  - Simplified pricing data structure to use single price field
  - Enhanced user experience by removing complex pricing toggles

### Version 1.5 - Vercel References Removal
- **Date**: Current
- **Changes**: 
  - **CONTENT UPDATE**: Removed all Vercel redirect navigation logic and references
  - Removed Vercel badge and deployment URLs from README
  - Updated deployment button from "Deploy on Vercel" to generic "Deploy"
  - Removed Vercel-specific console log references in deployment component
  - Updated testimonial content to remove Vercel deployment references
  - Changed CEO testimonial company from "Vercel" to "DevCorp"
  - Replaced Vercel logo with Docker logo in integrations illustration

### Version 1.4 - Deployment Fix
- **Date**: Previous
- **Changes**: 
  - **BUG FIX**: Resolved React 19 compatibility issue causing deployment failures
  - Removed unused `vaul` package dependency that didn't support React 19
  - Deleted and regenerated package-lock.json to eliminate dependency conflicts
  - Fixed npm install errors during deployment pipeline
  - Ensured all dependencies are compatible with React 19

### Version 1.3 - FAQ Section Update
- **Date**: Current
- **Changes**: 
  - **CONTENT UPDATE**: Completely replaced FAQ content to align with CredVeda analytics platform
  - Updated 6 FAQ questions to focus on NBFC analytics platform capabilities
  - Added detailed information about database connectivity (SQL, PostgreSQL, MySQL, AWS Redshift)
  - Included comprehensive data security explanations (RBAC, RLS, enterprise integration)
  - Added user access management details with role-based permissions
  - Explained large dataset handling with PySpark and incremental data processing
  - Added dashboard customization and deployment process information
  - Updated section description from "Pointer development workflow" to "CredVeda NBFC analytics workflow"

### Version 1.2 - Contact Section Implementation
- **Date**: Previous
- **Changes**: 
  - **MAJOR UPDATE**: Completely redesigned the contact section to match CredVeda branding
  - Replaced generic "Coding made effortless" content with NBFC-focused messaging
  - Added functional contact form with fields: name, email, company, phone, message
  - Implemented form validation and submission handling with loading states
  - Added contact information section with email, phone, and office details
  - Updated section title to "Ready to Transform Your NBFC?"
  - Maintained consistent styling with background effects and color schemes
  - Fixed navigation scrolling to proper contact section functionality
  - Enhanced user experience with professional contact interface

### Version 1.1 - Pricing Update
- **Date**: Previous
- **Changes**: 
  - Updated pricing section to reflect Indian market pricing (₹1,50,000/- for Lite Plan, ₹2,00,000/- for Pro Plan)
  - Modified plan names from Free/Pro/Ultra to Lite Plan/Pro Plan/Enterprise Plan
  - Updated features to focus on data analytics, AI assistance, and business intelligence
  - Changed pricing context from developer tools to business analytics solutions

### Version 1.0 - Initial Release
- **Date**: Previous
- **Changes**: 
  - Initial landing page with basic pricing structure
  - Original developer-focused content and pricing

## Build your app

Continue building your app on:

**[https://v0.app/chat/projects/v57yiJxeOA7](https://v0.app/chat/projects/v57yiJxeOA7)**

## How It Works

1. Create and modify your project using [v0.app](https://v0.app)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Deploy your project using your preferred hosting platform