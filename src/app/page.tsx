"use client";

import * as React from "react";
import Image from "next/image";
import { BookText } from "lucide-react";
import GibsonLogo from "@/components/gibson-logo";
import { Navigation } from "@/components/navigation";

export default function Home() {
  return (
    <div className="flex flex-col h-screen bg-background">
      <Navigation />
      <div className="flex items-center justify-center flex-grow p-8 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-2 items-center sm:items-start">
          <GibsonLogo width={320} height={88} />
          <p>Example Next.js app with a type-safe query client</p>
          <div className="flex gap-2 items-center flex-col sm:flex-row mt-2">
            <a
              className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://docs.gibsonai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <BookText className="w-5 h-5" />
              Documentation
            </a>
            <a
              className="rounded-full border border-solid border-black/[.08] dark:border-white/[.145] transition-colors flex items-center justify-center gap-2 hover:bg-[#f2f2f2] dark:hover:bg-[#1a1a1a] hover:border-transparent text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5"
              href="https://app.gibsonai.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                aria-hidden
                src="/logo.svg"
                alt="Gibson logo"
                width={20}
                height={20}
              />
              Launch Gibson →
            </a>
          </div>
        </main>
      </div>
    </div>
  );
}
