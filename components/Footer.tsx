const socials = [
  {
    url: "https://github.com/global-index-source",
    label: "GitHub Organization",
  },
  { url: "https://x.com/k_sauraj", label: "Sauraj" },
  { url: "https://x.com/hakimifrd", label: "Hakimi" },
  { url: "https://x.com/prathamdby", label: "Pratham" },
];

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-green-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="container mx-auto px-6 py-4 relative z-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="flex items-center gap-3">
            <h3 className="text-lg font-semibold text-white">ksau</h3>
            <p className="text-sm opacity-75">
              Empowering users with fast, secure file uploads
            </p>
          </div>

          <div className="flex items-center gap-4 text-sm opacity-75">
            <span>&copy; {new Date().getFullYear()}</span>
            <span className="text-green-500/50">•</span>
            {socials.map(({ url, label }, index) => (
              <span key={index}>
                <a
                  href={url}
                  className="hover:text-green-500 transition-colors"
                >
                  {label}
                </a>
                {index < socials.length - 1 && (
                  <span className="text-green-500/50 mx-2">•</span>
                )}
              </span>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
