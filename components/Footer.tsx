const socials = {
  main: [
    {
      url: "https://github.com/global-index-source",
      label: "GitHub",
    },
    {
      url: "https://t.me/ksau_update",
      label: "Telegram",
    },
  ],
  team: [
    { url: "https://x.com/k_sauraj", label: "Sauraj" },
    { url: "https://x.com/hakimifrd", label: "Hakimi" },
    { url: "https://x.com/prathamdby", label: "Pratham" },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-green-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 py-4 sm:py-6 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col gap-4 sm:gap-6">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-3 w-full sm:w-auto">
              <a
                href="/"
                className="text-lg font-semibold text-white hover:text-green-500 transition-colors"
                aria-label="ksau Home"
              >
                ksau
              </a>
              <p className="text-sm opacity-75">
                Empowering users with fast, secure file uploads
              </p>
            </div>

            <nav
              className="flex flex-wrap gap-4 sm:gap-6 text-sm w-full sm:w-auto justify-start sm:justify-end"
              aria-label="Primary footer navigation"
            >
              {socials.main.map(({ url, label }, index) => (
                <a
                  key={index}
                  href={url}
                  className="hover:text-green-500 transition-colors opacity-75 hover:opacity-100"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visit ksau ${label}`}
                  role="link"
                >
                  {label}
                </a>
              ))}
            </nav>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-sm border-t border-green-500/10 pt-4 gap-3 sm:gap-0">
            <p className="opacity-75 order-2 sm:order-1">
              <span>&copy; {new Date().getFullYear()}</span>
              <span className="mx-1">ksau</span>
            </p>
            <nav
              className="flex flex-wrap items-center gap-3 order-1 sm:order-2 w-full sm:w-auto"
              aria-label="Team links"
            >
              <span className="opacity-50 w-full sm:w-auto">Team:</span>
              <div className="flex flex-wrap gap-3">
                {socials.team.map(({ url, label }, index) => (
                  <a
                    key={index}
                    href={url}
                    className="hover:text-green-500 transition-colors opacity-75 hover:opacity-100"
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`Visit ${label}'s profile`}
                    role="link"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
