import Link from "next/link";

const socials = {
  main: [
    { url: "https://github.com/global-index-source", label: "GitHub" },
    { url: "https://t.me/ksau_update", label: "Telegram" },
    { url: "/docs", label: "Docs" },
  ],
  team: [
    { url: "https://x.com/k_sauraj", label: "Sauraj" },
    { url: "https://x.com/hakimifrd", label: "Hakimi" },
    { url: "https://x.com/prathamdby", label: "Pratham" },
  ],
};

function FooterLink({
  href,
  children,
  external = false,
}: {
  href: string;
  children: React.ReactNode;
  external?: boolean;
}) {
  const linkProps = external
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Link
      href={href}
      className="text-text-tertiary hover:text-phosphor-400 transition-colors"
      {...linkProps}
    >
      {children}
    </Link>
  );
}

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-border bg-terminal-bg">
      <div className="absolute inset-0 bg-terminal-grid opacity-5" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-8">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
              <Link
                href="/"
                className="flex items-center gap-1 text-text-primary hover:text-phosphor-400 transition-colors"
              >
                <span className="text-phosphor-400 font-bold">{">"}</span>
                <span className="font-bold">ksau</span>
                <span className="text-text-ghost text-xs ml-2">v1.0.0</span>
              </Link>

              <span className="hidden sm:block text-border">|</span>

              <p className="text-sm text-text-ghost">
                Fast, secure file uploads from the terminal
              </p>
            </div>

            <nav className="flex flex-wrap items-center gap-6 text-sm">
              {socials.main.map((link) => (
                <FooterLink
                  key={link.label}
                  href={link.url}
                  external={link.url.startsWith("http")}
                >
                  {link.label}
                </FooterLink>
              ))}
            </nav>
          </div>

          <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm">
            <div className="flex items-center gap-2 text-text-ghost">
              <span className="text-phosphor-400">$</span>
              <span>echo "© {currentYear} ksau"</span>
            </div>

            <div className="flex flex-wrap items-center gap-2 text-text-ghost">
              <span>Built by</span>
              <div className="flex items-center gap-3">
                {socials.team.map((member, index) => (
                  <span key={member.label} className="flex items-center gap-3">
                    <FooterLink href={member.url} external>
                      {member.label}
                    </FooterLink>
                    {index < socials.team.length - 1 && (
                      <span className="text-border">·</span>
                    )}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="h-1 bg-gradient-to-r from-transparent via-phosphor-400/20 to-transparent" />
    </footer>
  );
}
