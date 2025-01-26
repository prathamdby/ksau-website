import { Github, Twitter, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-black text-gray-400 border-t border-green-500/20 relative overflow-hidden">
      <div className="absolute inset-0 bg-grid opacity-5"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">ksau</h3>
            <p className="text-sm">
              Empowering users with fast, secure, and effortless file uploads.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="hover:text-green-500 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-green-500 transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#testimonials"
                  className="hover:text-green-500 transition-colors"
                >
                  Testimonials
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Resources</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  API Reference
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-green-500 transition-colors">
                  Community
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Connect</h4>
            <div className="flex flex-wrap gap-4">
              {[Github, Twitter, Linkedin, Mail].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="hover:text-green-500 transition-all duration-300 ease-out relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-0 after:bg-green-500 after:transition-all hover:after:w-full"
                >
                  <Icon className="h-6 w-6" />
                </a>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-green-500/20 text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} ksau. All rights reserved.
          </p>
          <p className="text-sm mt-2">Created by Sauraj, Hakimi, and Pratham</p>
        </div>
      </div>
    </footer>
  );
}
