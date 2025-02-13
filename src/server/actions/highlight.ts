"use server";

import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
} from "@shikijs/transformers";

export async function highlight(
  code: string,
  language?: string,
  filename?: string,
  theme?: string
) {
  const lang = language ?? filename?.split(".").pop() ?? "tsx";
  const html = await codeToHtml(code.trim(), {
    lang,
    theme: theme === "dark" ? "aurora-x" : "github-light",
    transformers: [
      transformerNotationHighlight({
        matchAlgorithm: "v3",
      }),
      transformerNotationDiff({
        matchAlgorithm: "v3",
      }),
    ],
  });
  return html;
}
