import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="bg-[#211b1e] text-white py-16">
      <div className="container">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Need Support With Ongoing Cyber Incident?</h2>
          <p className="text-gray-300 mb-8 text-lg">
            Talk to our cybersecurity experts about your cyber incident concerns. Our team is available 24/7 to help you respond to and recover from cyber attacks.
          </p>
          <Button size="lg" asChild>
            <Link href="/report-an-incident">Talk to Sales</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
