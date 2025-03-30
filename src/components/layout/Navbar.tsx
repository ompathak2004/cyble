"use client";

import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

interface NavItem {
  title: string;
  href: string;
  submenu?: SubmenuCategory[];
}

interface SubmenuCategory {
  title: string;
  label?: string;
  items: SubmenuItem[];
}

interface SubmenuItem {
  title: string;
  subtitle?: string;
  badge?: string;
  description?: string;
  href: string;
}

const navLinks: NavItem[] = [
  {
    title: "Products",
    href: "/products",
    submenu: [
      {
        title: "For Enterprises(B2B) and Governments",
        items: [
          {
            title: "Cyble Vision",
            subtitle: "For Enterprises",
            description: "Award-winning cyber threat intelligence platform, designed to provide enhanced security through real-time intelligence and threat detection.",
            href: "/products/cyble-vision"
          },
          {
            title: "Cyble Hawk",
            subtitle: "For Federal Bodies",
            description: "Protects sensitive information and assets from cyber threats with its specialized threat detection and intelligence capabilities built for federal bodies.",
            href: "/products/cyble-hawk"
          },
        ]
      },
      {
        title: "For Enterprises(B2B) and Individuals(B2C)",
        items: [
          {
            title: "AmIBreached",
            description: "Enables consumers and organizations to Identify, Prioritize and Mitigate darkweb risks.",
            href: "https://amibreached.com/"
          },
          {
            title: "Odin by Cyble",
            badge: "New",
            description: "The most advanced internet-scanning tool in the industry for real-time threat detection and cybersecurity",
            href: "https://odin.io"
          },
          {
            title: "The Cyber Express",
            subtitle: "Subscribe",
            description: "#1 Trending Cyber Security News and Magazine",
            href: "https://thecyberexpress.com/"
          },
        ]
      }
    ]
  },
  {
    title: "Solutions",
    href: "/solutions",
    submenu: [
      {
        title: "AI-Driven Cyber Threat Intelligence Solutions",
        label: "Powered by AI",
        items: [
          { title: "Attack Surface Management", href: "/solutions/attack-surface-management" },
          { title: "Brand Intelligence", href: "/solutions/brand-intelligence" },
          { title: "Cyber Threat Intelligence", href: "/solutions/cyber-threat-intelligence" },
          { title: "Dark Web Monitoring", href: "/solutions/dark-web-monitoring" },
          { title: "Vulnerability Management", href: "/solutions/vulnerability-management" },
          { title: "Takedown and Disruption", href: "/solutions/takedown-services" },
          { title: "Third Party Risk Management", href: "/solutions/third-party-risk-management" },
        ]
      }
    ]
  },
  {
    title: "Why Cyble?",
    href: "#",
  },
  {
    title: "Resources",
    href: "/resources",
  },
  {
    title: "Company",
    href: "#",
  },
  {
    title: "Partners",
    href: "#",
  }
];

const MobileMenuItem = ({ item }: { item: NavItem }) => {
  const [isOpen, setIsOpen] = useState(false);

  if (!item.submenu) {
    return (
      <li className="py-2">
        <Link href={item.href} className="block text-base font-semibold">
          {item.title}
        </Link>
      </li>
    );
  }

  return (
    <li className="py-2">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full text-base font-semibold"
      >
        {item.title}
        <span>{isOpen ? '−' : '+'}</span>
      </button>
      {isOpen && (
        <ul className="pl-4 mt-2 space-y-2">
          {item.submenu && item.submenu.flatMap((submenu) =>
            submenu.items.map((subitem, index) => (
              <li key={index} className="py-1">
                <Link href={subitem.href} className="block text-sm">
                  {subitem.title}
                </Link>
              </li>
            ))
          )}
        </ul>
      )}
    </li>
  );
};

export default function Navbar() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className="bg-background border-b border-border sticky top-0 z-50">
      <div className="container flex justify-between items-center h-16 py-2">
        <Link href="/" className="flex items-center">
          <span className="text-xl font-bold text-primary">
            {mounted && (
              <Image
                src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/01/cropped-Cyble-Threat-Intelligence-150x50.png"
                alt="Cyble Logo"
                width={120}
                height={35}
                priority
              />
            )}
          </span>
        </Link>

        <nav className="hidden lg:flex space-x-6">
          {navLinks.map((link, index) => (
            <div key={index} className="relative group">
              <Link
                href={link.href}
                className="text-foreground hover:text-primary font-medium py-2"
              >
                {link.title}
              </Link>

              {link.submenu && (
                <div className="absolute z-10 left-0 mt-2 w-[900px] hidden group-hover:block">
                  <div className="bg-white shadow-lg rounded-md p-6 grid grid-cols-2 gap-6">
                    {link.submenu.map((submenu, subIndex) => (
                      <div key={subIndex} className="col-span-1">
                        <h3 className="font-semibold text-sm text-gray-500 mb-4">
                          {submenu.title}
                          {submenu.label && (
                            <span className="ml-2 text-xs text-primary">{submenu.label}</span>
                          )}
                        </h3>
                        <ul className="space-y-4">
                          {submenu.items.map((item, itemIndex) => (
                            <li key={itemIndex}>
                              <Link href={item.href} className="flex items-start">
                                <div>
                                  <div className="font-medium text-foreground hover:text-primary">
                                    {item.title}
                                    {item.subtitle && (
                                      <span className="ml-2 text-xs text-primary">{item.subtitle}</span>
                                    )}
                                    {item.badge && (
                                      <span className="ml-2 text-xs text-white bg-primary px-1 py-0.5 rounded">
                                        {item.badge}
                                      </span>
                                    )}
                                  </div>
                                  {item.description && (
                                    <p className="text-sm text-gray-500 mt-1">{item.description}</p>
                                  )}
                                </div>
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          ))}
        </nav>

        <div className="hidden lg:flex items-center space-x-4">
          <Button variant="default" size="sm" asChild>
            <Link href="/request-demo">Free Demo</Link>
          </Button>
        </div>

        {mounted && (
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="lg:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[350px]">
              <div className="flex flex-col h-full">
                <div className="flex items-center justify-between mb-6">
                  <Link href="/" className="flex items-center">
                    <Image
                      src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/01/cropped-Cyble-Threat-Intelligence-150x50.png"
                      alt="Cyble Logo"
                      width={100}
                      height={30}
                    />
                  </Link>
                  <SheetTrigger asChild>
                    <Button variant="ghost" size="icon">
                      <X className="h-5 w-5" />
                      <span className="sr-only">Close menu</span>
                    </Button>
                  </SheetTrigger>
                </div>

                <nav className="flex-1">
                  <ul className="space-y-4">
                    {navLinks.map((link, index) => (
                      <MobileMenuItem key={index} item={link} />
                    ))}
                  </ul>
                </nav>

                <div className="mt-8 space-y-4">
                  <Button variant="outline" className="w-full" asChild>
                    <Link href="/request-demo">Free Demo</Link>
                  </Button>
                  <Button variant="default" className="w-full" asChild>
                    <Link href="/request-demo">Free Demo</Link>
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        )}
      </div>
    </header>
  );
}
