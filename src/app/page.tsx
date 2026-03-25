import { Hero } from "@/components/sections/Hero";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TrustSection } from "@/components/sections/TrustSection";
import { GallerySection } from "@/components/sections/GallerySection";
import { Testimonials } from "@/components/sections/Testimonials";
import { FAQ } from "@/components/sections/FAQ";
import { CTASection } from "@/components/sections/CTASection";
import { FadeIn } from "@/components/ui/FadeIn";

export default function Home() {
  return (
    <div className="flex flex-col">
      <FadeIn delay={0.1}><Hero /></FadeIn>
      <FadeIn delay={0.2}><ServicesGrid /></FadeIn>
      <FadeIn delay={0.2}><TrustSection /></FadeIn>
      <FadeIn delay={0.2}><GallerySection /></FadeIn>
      <FadeIn delay={0.2}><Testimonials /></FadeIn>
      <FadeIn delay={0.2}><FAQ /></FadeIn>
      <FadeIn delay={0.1}><CTASection /></FadeIn>
    </div>
  );
}
