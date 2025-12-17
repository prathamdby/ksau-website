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
      "mt-2 scroll-m-20 text-3xl md:text-4xl font-bold font-mono text-text-primary first:mt-0",
      "text-glow-sm",
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
      "mt-12 md:mt-16 scroll-m-20 pb-3 text-2xl md:text-3xl font-semibold font-mono text-text-primary first:mt-0",
      "border-b border-terminal-border",
      "flex items-center gap-3",
      "before:content-['##'] before:text-phosphor-400 before:text-xl",
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
      "mt-8 md:mt-10 scroll-m-20 text-xl md:text-2xl font-semibold font-mono text-text-primary",
      "flex items-center gap-2",
      "before:content-['###'] before:text-phosphor-400 before:text-base",
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
      "mt-6 md:mt-8 scroll-m-20 text-lg md:text-xl font-semibold font-mono text-text-primary",
      "flex items-center gap-2",
      "before:content-['####'] before:text-phosphor-400/70 before:text-sm",
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
      "leading-7 text-base font-mono text-text-secondary [&:not(:first-child)]:mt-4 md:[&:not(:first-child)]:mt-6",
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
      "my-6 ml-6 space-y-2 text-base font-mono text-text-secondary",
      "[&>li]:relative [&>li]:pl-6",
      "[&>li]:before:content-['▸'] [&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-phosphor-400",
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
      "my-6 ml-6 space-y-2 text-base font-mono text-text-secondary",
      "[&>li]:relative [&>li]:pl-8",
      "[&>li]:before:absolute [&>li]:before:left-0 [&>li]:before:text-phosphor-400",
      "list-none counter-reset-[item]",
      "[&>li]:counter-increment-[item]",
      "[&>li]:before:content-[counter(item)'.']",
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
      "my-6 border-l-2 border-phosphor-400 pl-6 font-mono text-text-secondary",
      "bg-phosphor-400/5 py-4 pr-4",
      "relative",
      "before:content-['>'] before:absolute before:left-2 before:text-phosphor-400",
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
      "relative rounded bg-phosphor-400/10 px-1.5 py-0.5 font-mono text-sm text-phosphor-400",
      "border border-phosphor-400/20",
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
      "font-mono text-phosphor-400 underline underline-offset-4 hover:text-phosphor-300 transition-colors",
      "decoration-phosphor-400/30 hover:decoration-phosphor-400",
      className,
    )}
    {...props}
  />
);

export function MarkdownContent({ content, className }: MarkdownContentProps) {
  return (
    <div className={cn("w-full", className)}>
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
