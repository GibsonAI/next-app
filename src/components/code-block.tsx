"use client";

import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { highlight } from "@/server/actions/highlight";
import { CopyButton } from "@/components/copy-button";
import type { BundledLanguage } from "shiki";

export function CodeBlock({
  code,
  language,
  filename,
}: {
  code: string;
  language?: BundledLanguage;
  filename?: string;
}) {
  const { theme } = useTheme();
  const [html, setHtml] = useState<string>();
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const highlightCode = async () => {
      const html = await highlight(code, language, filename, theme);
      setHtml(html);
    };
    highlightCode();
  }, [code, language, filename, theme]);

  if (!html) {
    return null;
  }

  return (
    <div
      className="relative overflow-hidden rounded-s-lg"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="absolute right-4 top-4 flex items-center justify-end">
        {isHovered ? (
          <CopyButton code={code} />
        ) : (
          <div className="text-sm text-neutral-400">{filename ?? language}</div>
        )}
      </div>
      <div
        className="border-2 border-neutral-300 rounded-lg text-sm [&>pre]:overflow-x-auto [&>pre]:!bg-transparent [&>pre]:py-3 [&>pre]:pl-4 [&>pre]:pr-5 [&>pre]:leading-snug [&_code]:block [&_code]:w-fit [&_code]:min-w-full"
        dangerouslySetInnerHTML={{ __html: html }}
      ></div>
    </div>
  );
}
