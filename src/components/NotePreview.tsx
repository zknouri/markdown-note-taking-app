import { MarkdownHooks } from "react-markdown";
import remarkGfm from "remark-gfm";
import remarkMath from "remark-math";
import rehypeRaw from "rehype-raw";
import rehypeKatex from "rehype-katex";
import rehypeStarryNight from "rehype-starry-night";

import type { NotePreviewProps } from "../utils/types";

export default function NotePreview({ markdown }: NotePreviewProps) {
  return (
    <div className="prose-base prose-a:text-sky-500 prose-a:hover:text-sky-600 prose-a:underline prose-h1:pb-2 prose-h1:font-bold prose-h1:border-b prose-h1:border-b-stone-400 prose-h2:pb-1 prose-h2:font-bold prose-h2:border-b prose-h2:border-b-stone-300 prose-code:bg-stone-200 prose-code:rounded-sm prose-pre:bg-stone-200 prose-ul:list-disc prose-ol:list-decimal prose-table:text-center prose-table:table-auto prose-thead:bg-stone-200 prose-tr:even:bg-stone-200 prose-th:p-2 prose-th:border prose-th:border-stone-300 prose-td:p-2 prose-td:border prose-td:border-stone-300 prose-blockquote:border-l-5 prose-blockquote:border-l-stone-300 w-full h-lvh bg-stone-100 p-2 overflow-x-hidden overflow-y-scroll">
      <MarkdownHooks
        rehypePlugins={[rehypeRaw, rehypeStarryNight, rehypeKatex]}
        remarkPlugins={[remarkGfm, remarkMath]}
      >
        {markdown}
      </MarkdownHooks>
    </div>
  );
}
