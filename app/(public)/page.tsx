import HeroSection from "./_components/HeroSection"
import StatsSection from "./_components/StatsSection"
import WhyChooseUsSection from "./_components/WhyChooseUsSection"
import ServicesSection from "./_components/ServicesSection"
import CTASection from "./_components/CTASection"
import TestimonialsSection from "./_components/TestimonialsSection"
import AboutSection from "./_components/AboutSection"
import LogoCloud from "@/components/logo-cloud"

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <LogoCloud/>
            <StatsSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <CTASection />
            <TestimonialsSection />
            <AboutSection />
        </main>
    )
}