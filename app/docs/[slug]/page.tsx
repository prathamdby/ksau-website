import fs from "fs";
import path from "path";
import { notFound } from "next/navigation";
import { MarkdownContent } from "@/components/docs/MarkdownContent";
import { Separator } from "@/components/ui/separator";
import {
  BookText,
  Code2,
  FlaskConical,
  HelpCircle,
  Settings,
  BookOpen,
} from "lucide-react";

const getIcon = (slug: string) => {
  const icons = {
    "post-installation": Settings,
    api: Code2,
    examples: BookText,
    advanced: FlaskConical,
    troubleshooting: HelpCircle,
    installation: BookOpen,
  };
  return icons[slug as keyof typeof icons] || BookText;
};

const getTitle = (slug: string) => {
  const titles = {
    "post-installation": "Post Installation Guide",
    api: "API Reference",
    examples: "Examples and Usage",
    advanced: "Advanced Features",
    troubleshooting: "Troubleshooting",
    installation: "Installation Guide",
  };
  return titles[slug as keyof typeof titles] || slug;
};

const getDescription = (slug: string) => {
  const descriptions = {
    "post-installation": "Configure and customize your ksau installation",
    api: "Complete API documentation and endpoints",
    examples: "Learn through practical examples and code snippets",
    advanced: "Unlock the full power of ksau with advanced configurations",
    troubleshooting: "Solutions to common issues and problems",
    installation: "Get started with ksau in minutes",
  };
  return descriptions[slug as keyof typeof descriptions] || "";
};

const getBackgroundImage = (slug: string) => {
  return "";
};

export default function DocPage({ params }: { params: { slug: string } }) {
  let markdownContent: string;

  try {
    const filePath = path.join(process.cwd(), "docs", `${params.slug}.md`);
    markdownContent = fs.readFileSync(filePath, "utf8");
  } catch (error) {
    notFound();
  }

  const Icon = getIcon(params.slug);

  return (
    <article className="min-h-screen pb-8 md:pb-12">
      <div className="relative">
        <div className="relative pt-6 md:pt-8 lg:pt-12">
          <div className="mx-auto max-w-3xl space-y-4 px-4 sm:px-6 lg:px-8">
            <div className="flex items-start space-x-4">
              <div className="rounded-lg border bg-card/50 backdrop-blur p-2.5 transition-transform active:scale-95">
                <Icon className="h-6 w-6 text-primary" />
              </div>
              <div className="space-y-2">
                <h1 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl lg:text-5xl">
                  {getTitle(params.slug)}
                </h1>
                <p className="text-lg text-muted-foreground sm:text-xl">
                  {getDescription(params.slug)}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto max-w-3xl px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-10">
          <div className="rounded-lg border bg-card/50 backdrop-blur p-4 sm:p-6 lg:p-8 transition-colors hover:bg-card/60">
            <div className="space-y-1.5">
              <h3 className="font-semibold leading-none tracking-tight">
                Documentation
              </h3>
              <p className="text-sm text-muted-foreground">
                Learn everything you need to know about ksau
              </p>
            </div>
            <Separator className="my-6" />
            <MarkdownContent content={markdownContent} />
          </div>
        </div>
      </div>
    </article>
  );
}
