[![GibsonAI](https://github.com/user-attachments/assets/26bc1002-f878-4995-a6c5-eb8d5eb69c28)](https://gibsonai.com/)

# Next.js Template

This is a template repository for starting a new full-stack project using the Gibson API to manage your data. It is built using Next.js and TypeScript and comes with a type-safe client for the Gibson API. This repository serves as a template only and cannot be modified directly - please use it to create your own project.

## Features

- Next.js 15
- React 19
- TypeScript
- Type-safe client for interacting with the Gibson API
- React Query + tRPC client that supports loading + error states, automatic caching, refetching, etc.
- HeroUI components (easily useable with other frameworks like shadcn/ui, radix-ui, etc.)
- Runtime validation with Zod
- Tailwind CSS
- Hot module replacement (HMR)
- Support for Server Side Rendering (SSR), Incremental Static Regeneration (ISR), and Client Side Rendering (CSR)
- React Server Components
- Server Actions (with examples)
- Next.js server (with example HTTP and tRPC API routes)

## Getting Started

### Quick Setup (Recommended)

The easiest way to get started is using our setup script. Run this command in your terminal:

```bash
bash <(curl -s https://raw.githubusercontent.com/GibsonAI/next-app/main/setup.sh)
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

1. Clone this template:

   ```bash
   git clone https://github.com/GibsonAI/next-app.git my-gibson-app && cd my-gibson-app
   ```

2. Remove the Git history and start fresh:

   ```bash
   rm -rf .git && git init
   ```

3. Install dependencies:

   ```bash
   npm install
   ```

4. Copy the environment file and configure your variables:

   ```bash
   cp .env.example .env
   ```

5. Generate the type-safe API client and start the development server:

   ```bash
   npm run typegen && npm run dev
   ```
