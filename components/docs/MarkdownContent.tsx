"use client";

import React, { ReactNode } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeSlug from "rehype-slug";
import { cn } from "@/lib/utils";
import { CodeBlock } from "./CodeBlock";

interface MarkdownContentProps {
  content: string;
  className?: string;
}

const CustomH1 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h1
    className={cn(
      "mt-2 scroll-m-20 text-3xl md:text-4xl font-bold tracking-tight text-foreground first:mt-0",
      className,
    )}
    {...props}
  />
);

const CustomH2 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h2
    className={cn(
      "mt-8 md:mt-10 scroll-m-20 border-b pb-2 text-2xl md:text-3xl font-semibold tracking-tight text-foreground first:mt-0",
      className,
    )}
    {...props}
  />
);

const CustomH3 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h3
    className={cn(
      "mt-6 md:mt-8 scroll-m-20 text-xl md:text-2xl font-semibold tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
);

const CustomH4 = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLHeadingElement>) => (
  <h4
    className={cn(
      "mt-4 md:mt-6 scroll-m-20 text-lg md:text-xl font-semibold tracking-tight text-foreground",
      className,
    )}
    {...props}
  />
);

const CustomP = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLParagraphElement>) => (
  <p
    className={cn(
      "leading-7 text-sm md:text-base text-muted-foreground [&:not(:first-child)]:mt-4 md:[&:not(:first-child)]:mt-6",
      className,
    )}
    {...props}
  />
);

const CustomUl = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLUListElement>) => (
  <ul
    className={cn(
      "my-4 md:my-6 ml-4 md:ml-6 list-disc space-y-1.5 md:space-y-2 text-sm md:text-base text-muted-foreground [&>li]:mt-1.5 md:[&>li]:mt-2",
      className,
    )}
    {...props}
  />
);

const CustomOl = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLOListElement>) => (
  <ol
    className={cn(
      "my-4 md:my-6 ml-4 md:ml-6 list-decimal space-y-1.5 md:space-y-2 text-sm md:text-base text-muted-foreground [&>li]:mt-1.5 md:[&>li]:mt-2",
      className,
    )}
    {...props}
  />
);

const CustomBlockquote = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLQuoteElement>) => (
  <blockquote
    className={cn(
      "mt-6 border-l-2 border-primary pl-6 italic text-muted-foreground",
      className,
    )}
    {...props}
  />
);

const CustomCode = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) => (
  <code
    className={cn(
      "relative rounded bg-muted px-[0.3rem] py-[0.2rem] font-mono text-sm text-primary",
      className,
    )}
    {...props}
  />
);

const CustomPre = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLPreElement>) => (
  <CodeBlock className={className} {...props} />
);

const CustomA = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLAnchorElement>) => (
  <a
    className={cn(
      "font-medium text-primary underline underline-offset-4 hover:text-primary/80",
      className,
    )}
    {...props}
  />
);

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div
      className={cn(
        "prose prose-stone dark:prose-invert max-w-4xl mx-auto w-full px-4 md:px-6",
        className,
      )}
    >
      <ReactMarkdown
        remarkPlugins={[remarkGfm]}
        rehypePlugins={[rehypeRaw, rehypeSlug]}
        components={{
          h1: CustomH1,
          h2: CustomH2,
          h3: CustomH3,
          h4: CustomH4,
          p: CustomP,
          ul: CustomUl,
          ol: CustomOl,
          blockquote: CustomBlockquote,
          code: CustomCode,
          pre: CustomPre,
          a: CustomA,
        }}
      >
        {content}
      </ReactMarkdown>
    </div>
  );
}
