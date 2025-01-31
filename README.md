# Gibson Next.js App Template

This is a template repository for starting a new full-stack project using the Gibson API to manage your data. It is built using Next.js and TypeScript and comes with a type-safe client for the Gibson API. This repository serves as a template only and cannot be modified directly - please use it to create your own project.

## Features

- Next.js 15
- React 19
- TypeScript
- Type-safe client for the Gibson API
- React Query + tRPC client
- UI components with shadcn/ui
- Validation with zod
- Tailwind CSS
- Hot module replacement (HMR)
- Support for Server Side Rendering (SSR), Incremental Static Regeneration (ISR), and Client Side Rendering (CSR)
- React Server Components
- Server Actions (with examples)
- Next.js backend server (with example HTTP and tRPC API routes)

## Getting Started

### Quick Setup (Recommended)

The easiest way to get started is using our setup script. Run this command in your terminal:

```bash
curl -fsSL https://raw.githubusercontent.com/GibsonAI/next-app/main/setup.sh | bash
```

The script will:
1. Ask for your project name
2. Create a new directory for your project
3. Set up a fresh Git repository
4. Install all dependencies
5. Guide you through configuring environment variables
6. Build the project

### Manual Setup

If you prefer to set up manually, follow these steps:

1. Create a new directory for your project:
   ```bash
   mkdir my-gibson-app && cd my-gibson-app
   ```
2. Clone this template:
   ```bash
   git clone https://github.com/GibsonAI/next-app.git .
   ```
3. Remove the Git history and start fresh:
   ```bash
   rm -rf .git && git init
   ```
4. Install dependencies:
   ```bash
   npm install
   ```
5. Copy the environment file and configure your variables:
   ```bash
   cp .env.example .env
   ```
6. Build and start the development server:
   ```bash
   npm run build && npm run dev
   ```
