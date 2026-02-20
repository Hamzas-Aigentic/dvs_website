import { DVSLogo } from "@/components/ui/dvs-logo";

const footerLinks = [
  { label: "Services", href: "#services" },
  { label: "Our Process", href: "#process" },
  { label: "Why DVS", href: "#why-dvs" },
  { label: "Tech Stack", href: "#tech" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="border-t border-neutral-200 bg-white py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {/* Brand */}
          <div className="space-y-4">
            <DVSLogo size={0.3} showSubtitle />
            <p className="text-sm leading-relaxed text-neutral-500">
              AI systems that ship. Production-grade automation, intelligent
              tools, and full-stack AI delivery.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Navigate
            </h4>
            <nav className="flex flex-col gap-2">
              {footerLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-neutral-500 transition-colors hover:text-blue-500"
                >
                  {link.label}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-neutral-400">
              Get in Touch
            </h4>
            <a
              href="mailto:hamza@digitalvaultsolutionsllc.com"
              className="block text-sm text-neutral-500 transition-colors hover:text-blue-500"
            >
              hamza@digitalvaultsolutionsllc.com
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t border-neutral-200 pt-8 sm:flex-row">
          <span className="text-xs text-neutral-400">
            &copy; {new Date().getFullYear()} Digital Vault Solutions. All rights
            reserved.
          </span>
          <span className="text-xs text-neutral-400">
            Built with the same care we put into every client project.
          </span>
        </div>
      </div>
    </footer>
  );
}
