# Gibson Next.js App

This is a frontend template for starting a new project using the Gibson API to manage your data. It is built using Next.js and TypeScript and comes with a type-safe client for the Gibson API.

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

1. Create a new repository from this template
2. Clone the repository to your local machine
3. Install dependencies with `npm install`
4. Create a `.env` file and add the variables from `.env.example` (including your Gibson API key and OpenAPI spec URL)
5. Generate the Gibson types from the OpenAPI spec with `npm run typegen`
6. Run the development server with `npm run dev`
