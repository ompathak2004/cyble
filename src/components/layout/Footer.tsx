import Link from "next/link";
import Image from "next/image";

const footerLinks = [
  {
    title: "Threat Intelligence Products & Platforms",
    links: [
      { name: "AmIBreached", href: "https://amibreached.com/" },
      { name: "Cyble Vision", href: "/products/cyble-vision" },
      { name: "Cyble Hawk", href: "/products/cyble-hawk" },
      { name: "Odin", href: "https://odin.io" },
      { name: "The Cyber Express", href: "https://thecyberexpress.com/" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { name: "Attack Surface Management", href: "/solutions/attack-surface-management" },
      { name: "Brand Intelligence", href: "/solutions/brand-intelligence" },
      { name: "Cyber Threat Intelligence", href: "/solutions/cyber-threat-intelligence" },
      { name: "Dark Web Monitoring", href: "/solutions/dark-web-monitoring" },
      { name: "Third Party Risk Management", href: "/solutions/third-party-risk-management" },
      { name: "Vulnerability Management", href: "/solutions/vulnerability-management" },
      { name: "Physical Threat Intelligence", href: "/solutions/physical-security-intelligence" },
    ],
  },
  {
    title: "Resources",
    links: [
      { name: "Thought Leadership", href: "/thought-leadership" },
      { name: "Knowledge Hub", href: "/knowledge-hub" },
      { name: "Research Reports", href: "/resources/research-reports" },
      { name: "Whitepapers", href: "/whitepapers" },
      { name: "Events", href: "/upcoming-events" },
      { name: "Webinars", href: "/webinars" },
      { name: "Incident Management", href: "/solutions/incident-management" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about-us" },
      { name: "Leadership Team", href: "/leadership-team" },
      { name: "Press", href: "/press" },
      { name: "Careers", href: "/careers" },
      { name: "Integrations", href: "/cyble-integrations" },
      { name: "Contact Us", href: "/contact" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="bg-[#211b1e] text-white pt-16 pb-8">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          <div className="col-span-1">
            <Link href="/" className="block mb-6">
              <Image
                src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2025/02/Cyble-logo-with-R-symbol-white-red-1024x266.webp"
                alt="Cyble Logo"
                width={120}
                height={35}
              />
            </Link>
            <div className="flex space-x-4 mt-4">
              <a href="https://twitter.com/cyble_io" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/cyble/" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a href="https://www.youtube.com/channel/UCOoMh7V8BJLRkKdgNkHjQxw" target="_blank" rel="noreferrer" className="w-8 h-8 flex items-center justify-center bg-white/10 rounded-full">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                  <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
                </svg>
              </a>
            </div>
            <div className="mt-6">
              <Link
                href="/request-demo"
                className="border border-primary bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded inline-block font-medium transition-colors"
              >
                Book A Demo
              </Link>
            </div>
          </div>
          {footerLinks.map((category, idx) => (
            <div key={idx} className="col-span-1">
              <h3 className="text-sm font-semibold uppercase mb-4">{category.title}</h3>
              <ul className="space-y-2">
                {category.links.map((link, linkIdx) => (
                  <li key={linkIdx}>
                    <Link href={link.href} className="text-gray-300 hover:text-white text-sm">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-gray-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-sm text-gray-400">© 2025 Cyble, Inc. All rights reserved. | <Link href="/privacy-policy" className="hover:text-white">Privacy Policy</Link></p>
            </div>
            <div>
                <p className="text-sm text-gray-400">Made with ❤️ for Cupertino</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
