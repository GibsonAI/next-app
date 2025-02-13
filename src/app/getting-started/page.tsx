import React from "react";
import { Code } from "@heroui/react";
import { CodeBlock } from "@/components/code-block";
import { ExternalLink } from "@/components/link";
import { Greeting } from "@/components/greeting";
import { Navigation } from "@/components/navigation";
import * as examples from "./examples";

export default function GettingStarted() {
  return (
    <div className="flex flex-col bg-background">
      <Navigation />
      <div className="flex flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)] text-md/10">
        <main>
          <h1 className="text-3xl font-bold">Getting Started</h1>
          <Greeting />
          <br />
          <h2 className="text-2xl font-bold">Features</h2>
          • Next.js 15
          <br />
          • React 19
          <br />
          • TypeScript
          <br />
          • Type-safe client for interacting with the Gibson API
          <br />
          • React Query + tRPC client that supports loading + error states,
          automatic caching, refetching, etc.
          <br />
          • HeroUI components (easily useable with other frameworks like
          shadcn/ui, radix-ui, etc.)
          <br />
          • Runtime validation with Zod
          <br />
          • Tailwind CSS
          <br />
          • Hot module replacement (HMR)
          <br />
          • Support for Server Side Rendering (SSR), Incremental Static
          Regeneration (ISR), and Client Side Rendering (CSR)
          <br />
          • React Server Components
          <br />
          • Server Actions (with examples)
          <br />
          • Next.js server (with example HTTP and tRPC API routes)
          <br />
          <br />
          <h2 className="text-2xl font-bold">Gibson Client</h2>
          You&apos;ll find your type-safe Gibson client in{" "}
          <Code>{`src/gibson/index.ts`}</Code>
          <br />
          You can use this client to make requests to your Gibson API{" "}
          <em>
            <b>from your server</b>
          </em>{" "}
          via <ExternalLink href="https://trpc.io/">tRPC</ExternalLink>{" "}
          procedures,{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#api-routes">
            API routes
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
            server components
          </ExternalLink>
          ,{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations">
            server actions
          </ExternalLink>
          , etc.
          <br />
          <br />
          <h3 className="text-xl font-bold">tRPC</h3>
          You can use the Gibson client in a tRPC procedure that will execute on
          the server:
          <CodeBlock
            code={examples.trpc}
            filename="server/trpc/routers/app.ts"
          />
          <br />
          And then call that tRPC procedure from a client-side component using
          the already configured <Code>useQuery</Code> hook from{" "}
          <ExternalLink href="https://tanstack.com/query/latest/docs/framework/react/overview">
            React Query
          </ExternalLink>
          :
          <CodeBlock
            code={examples.greeting}
            filename="src/components/greeting.tsx"
          />
          This approach supports loading + error states, automatic caching,
          refetching, and runtime validation via Zod.
          <br />
          <br />
          <h3 className="text-xl font-bold">Server Actions</h3>
          An alternative approach is to use the Gibson client in a{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations">
            server action
          </ExternalLink>
          :
          <CodeBlock
            code={examples.serverAction}
            filename="src/server/actions/greeting.ts"
          />
          <br />
          And then call that server action from a client-side component:
          <CodeBlock
            code={examples.clientAction}
            filename="src/components/client-action.tsx"
          />
          <br />
          <h3 className="text-xl font-bold">Server Components</h3>
          It&apos;s also safe to use the Gibson client in{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/rendering/server-components">
            server components
          </ExternalLink>
          :
          <CodeBlock
            code={examples.serverComponent}
            filename="src/components/server-component.tsx"
          />
          <br />
          <h3 className="text-xl font-bold">API Routes</h3>
          ...or in{" "}
          <ExternalLink href="https://nextjs.org/docs/app/building-your-application/upgrading/app-router-migration#api-routes">
            API routes
          </ExternalLink>
          :
          <CodeBlock
            code={examples.apiRoute}
            filename="src/app/api/greet/route.ts"
          />
          <br />
          <h3 className="text-xl font-bold">Conclusion</h3>
          The approach you choose should depend on your use case and
          preferences, however, the tRPC approach is recommended for most
          scenarios as it is by far the most flexible and handles runtime
          validation. If you want to call tRPC procedures from a server action
          or API route, you can use the <Code>createCaller</Code> function in
          <Code>server/trpc/caller.ts</Code>. Additional information on this
          approach is detailed{" "}
          <ExternalLink href="https://trpc.io/docs/server/server-side-calls">
            here
          </ExternalLink>
          .
        </main>
      </div>
    </div>
  );
}
