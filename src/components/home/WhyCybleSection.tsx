import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

const stats = [
  { number: "10X", label: "Faster Threat Detection" },
  { number: "50X", label: "Cyber Threat Intelligence Analysts" },
  { number: "100%", label: "Customer Satisfaction Rate" },
  { number: "8B+", label: "Records Processed" },
];

export default function WhyCybleSection() {
  return (
    <section className="py-16 bg-white">
      <div className="container">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Why Cyble?</h2>
          <div className="w-24 h-0.5 bg-primary mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="bg-gray-100 rounded-md p-8 grid grid-cols-2 gap-8">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <p className="text-3xl md:text-4xl font-bold text-primary">{stat.number}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>

            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">Meet The Threat Intelligence Experts</h3>
              <p className="text-gray-600 mb-6">
                Cyble's team consists of leading cybersecurity experts, threat intelligence analysts, and digital risk specialists with extensive experience in identifying, analyzing, and mitigating cyber threats.
              </p>
              <Button variant="default" asChild>
                <Link href="/about-us">Learn More About Us</Link>
              </Button>
            </div>
          </div>

          <div>
            <div className="relative rounded-lg overflow-hidden">
              <Image
                src="https://cdn-khlfb.nitrocdn.com/JPtKKXLsjJbtelUWnenRbIbVJOerqPTK/assets/images/optimized/rev-717c118/cyble.com/wp-content/uploads/2024/08/odin-landing-sc-2.webp"
                alt="Unified Threat Intelligence Platform"
                width={600}
                height={400}
                className="w-full object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                <h3 className="text-white text-xl font-bold mb-2">Unified Threat Intelligence Platform With 5X+ Capabilities and 85+ Use Cases</h3>
                <Button variant="outline" size="sm" className="text-white border-white hover:bg-white hover:text-black" asChild>
                  <Link href="/products/cyble-vision">Explore the Platform</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
