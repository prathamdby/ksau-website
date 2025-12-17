import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/docs/MarkdownContent";
import { GlowBadge } from "@/components/ui/glow-text";

const getMetadata = (slug: string) => {
  const metadata: Record<string, { title: string; description: string; command: string; status: string }> = {
    installation: {
      title: "Installation Guide",
      description: "Get started with ksau in minutes",
      command: "ksau install",
      status: "stable",
    },
    "post-installation": {
      title: "Post Installation",
      description: "Configure and customize your installation",
      command: "ksau config",
      status: "stable",
    },
    api: {
      title: "API Reference",
      description: "Complete API documentation and endpoints",
      command: "ksau api",
      status: "stable",
    },
    examples: {
      title: "Examples",
      description: "Practical examples and code snippets",
      command: "ksau examples",
      status: "stable",
    },
    advanced: {
      title: "Advanced Features",
      description: "Unlock the full power of ksau",
      command: "ksau --advanced",
      status: "beta",
    },
    troubleshooting: {
      title: "Troubleshooting",
      description: "Solutions to common issues",
      command: "ksau --help",
      status: "stable",
    },
  };
  return metadata[slug] || {
    title: slug,
    description: "",
    command: `ksau ${slug}`,
    status: "stable",
  };
};

export default async function DocPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  let markdownContent: string;

  try {
    const filePath = path.join(process.cwd(), "docs", `${slug}.md`);
    markdownContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    notFound();
  }

  const meta = getMetadata(slug);

  return (
    <article className="min-h-screen">
      {/* Header */}
      <div className="border-b border-terminal-border bg-terminal-surface/50 backdrop-blur">
        <div className="mx-auto max-w-4xl px-6 py-8 md:py-12">
          <div className="space-y-4">
            {/* Command Line */}
            <div className="flex items-center gap-2 font-mono text-sm text-text-tertiary">
              <span className="text-phosphor-400">$</span>
              <span>{meta.command}</span>
            </div>

            {/* Title & Status */}
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="text-3xl md:text-4xl font-bold text-text-primary font-mono">
                {meta.title}
              </h1>
              <GlowBadge pulse={meta.status === "beta"}>
                {meta.status}
              </GlowBadge>
            </div>

            {/* Description */}
            <p className="text-lg text-text-secondary font-mono max-w-2xl">
              {meta.description}
            </p>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-4xl px-6 py-8 md:py-12">
        <MarkdownContent content={markdownContent} />
      </div>
    </article>
  );
}
