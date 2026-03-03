import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { TutorialSection } from "@/components/marketing/tutorial-section";
import { TestimonialsSection } from "@/components/marketing/testimonials-section";
import { PricingSection } from "@/components/marketing/pricing-section";
import { CallToAction } from "@/components/marketing/call-to-action";

export const metadata: Metadata = {
    title: "Home",
    description:
        "IntelCampus - Intelligent ranking, analytics, and performance tracking platform for modern education.",
};

export default function MarketingPage() {
    return (
        <div className="flex min-h-screen flex-col bg-background">
            <Navbar />

            <main className="flex-1">
                <HeroSection />
                <TutorialSection />
                <TestimonialsSection />
                <PricingSection />
                <CallToAction />
            </main>

            <Footer />
        </div>
    );
}