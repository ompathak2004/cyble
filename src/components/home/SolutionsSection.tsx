"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";

const solutions = [
  {
    title: "Attack Surface Management",
    description: "Identify and mitigate threats across your entire attack surface to ensure digital safety.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Attack-Surface-Management-dashboard.webp",
    href: "/solutions/attack-surface-management",
  },
  {
    title: "Brand Intelligence",
    description: "Comprehensive protection against online brand abuse, including brand impersonation, phishing, and fraudulent domains.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Brand-Intelligence-Dashboard.webp",
    href: "/solutions/brand-intelligence",
  },
  {
    title: "Cyber Threat Intelligence",
    description: "Leverage AI-driven analysis and continuous threat monitoring to gain insights and enhance your organization's defense against emerging cyber threats.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Cyber-Threat-Intelligence-dashboard-1.webp",
    href: "/solutions/cyber-threat-intelligence",
  },
  {
    title: "Dark Web And Cyber Crime Monitoring",
    description: "Monitor the dark web and underground forums to stay vigilant and help shield businesses from sophisticated cyberattacks.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Dark-Web-and-Cyber-Crime-Monitoring-Dashboard.webp",
    href: "/solutions/dark-web-monitoring",
  },
  {
    title: "Vulnerability Management",
    description: "Utilize advanced scanning and risk evaluation strategies to get in real-time view of your organization's vulnerabilities.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Vulnerability-Management-Dashboard.webp",
    href: "/solutions/vulnerability-management",
  },
  {
    title: "Takedown & Disruption",
    description: "Combat online fraud and impersonation with Cyble's takedown services.",
    icon: "https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/09/Takedown-amp-Disruption-Dashboard.webp",
    href: "/solutions/takedown-services",
  },
];

export default function SolutionsSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-16 bg-gray-50">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Cyble's Cyber Threat Intelligence Solutions</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
              <CardContent className="p-6">
                <div className="h-36 mb-6 flex items-center justify-center">
                  {mounted && (
                    <Image
                      src={solution.icon}
                      alt={solution.title}
                      width={150}
                      height={100}
                      className="object-contain"
                    />
                  )}
                </div>
                <h3 className="text-lg font-bold mb-2 text-center">{solution.title}</h3>
                <p className="text-sm text-gray-600 mb-6 text-center">
                  {solution.description}
                </p>
                <div className="flex justify-center">
                  <Button variant="link" asChild>
                    <Link href={solution.href}>
                      Learn more →
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" asChild>
            <Link href="/solutions">View All Solutions</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
