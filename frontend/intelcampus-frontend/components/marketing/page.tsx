import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/marketing/hero-section";
import { TutorialSection } from "@/components/marketing/tutorial-section";
import { CallToAction } from "@/components/marketing/call-to-action";

export default function MarketingHomePage() {
    return (
        <main className="flex min-h-screen flex-col">
            <Navbar />
            <HeroSection />
            <TutorialSection />
            <CallToAction />
            <Footer />
        </main>
    );
}
