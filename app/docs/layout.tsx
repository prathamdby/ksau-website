import { DocsLayout } from "@/components/docs/DocsLayout";

interface DocsLayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: DocsLayoutProps) {
  return <DocsLayout>{children}</DocsLayout>;
}
