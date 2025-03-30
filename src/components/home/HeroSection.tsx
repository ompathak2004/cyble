"use client";

import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

export default function HeroSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative bg-[#211b1e] text-white overflow-hidden py-16 md:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-6">
              Proactive Cybersecurity <br />
              <span className="text-primary">With Cyble</span>
            </h1>
            <p className="text-lg mb-8 text-gray-300">
              Cyble has a unified Threat Intelligence platform, AI-powered analytics, and an extensive repository of actionable intelligence for progressive threat monitoring and mitigation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" asChild>
                <Link href="/request-demo">Talk to Our Team</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/products/cyble-vision">Explore Platform</Link>
              </Button>
            </div>

            <div className="mt-12">
                <p className="text-sm font-medium mb-4 text-center">
                <span className="text-red-500">Did</span> You <span className="text-red-500">Know?</span>
                </p>
              <div className="grid grid-cols-3 gap-6">
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">50x</p>
                  <p className="text-xs text-gray-400">More data processing
                  than others</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    95%
                  </p>
                  <p className="text-xs text-gray-400">Signal to Noise Ratio</p>
                </div>
                <div className="text-center">
                  <p className="text-xl md:text-2xl font-bold text-primary">
                    4Bn+</p>
                  <p className="text-xs text-gray-400">IPs and 150 Ports Scanned Daily</p>
                </div>
              </div>
            </div>
          </div>

          <div className="hidden lg:block relative">
            {mounted && (
              <div className="relative">
                <Image
                  src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2025/01/cyble-vision-best-threat-intelligence-company-2.png"
                  alt="Cyble Platform"
                  width={600}
                  height={400}
                  className="object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-[#211b1e] via-transparent to-transparent opacity-30"></div>
              </div>
            )}
          </div>
        </div>
      </div>

      <div className="container mt-16">
        <div className="text-center mb-8">
          <h2 className="text-xl font-bold">Trusted by Leading Global Enterprises</h2>
        </div>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
          {mounted && (
            <>
              <div className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2025/01/Gartner-47-1.png" alt="Client Logo" width={100} height={40} />
              </div>
              <div className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/07/G2-rating.png" alt="Client Logo" width={100} height={40} />
              </div>
              <div className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/07/infosec-award.png" alt="Client Logo" width={100} height={40} />
              </div>
              <div className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/08/Y_Combinator_Logo.png" alt="Client Logo" width={100} height={40} />
              </div>
              <div className="w-24 h-12 flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity">
                <Image src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/07/frost.png" alt="Client Logo" width={100} height={40} />
              </div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
