import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/home/HeroSection";
import SolutionsSection from "@/components/home/SolutionsSection";
import WhyCybleSection from "@/components/home/WhyCybleSection";
import CtaSection from "@/components/home/CtaSection";

export default function Home() {
  return (
    <MainLayout>
      <HeroSection />
      <SolutionsSection />
      <WhyCybleSection />
      <CtaSection />
    </MainLayout>
  );
}
