import HeroSection from "./_components/HeroSection"
import ContactInfoSection from "./_components/ContactInfoSection"
import StatsSection from "./_components/StatsSection"
import WhyChooseUsSection from "./_components/WhyChooseUsSection"
import ServicesSection from "./_components/ServicesSection"
import CTASection from "./_components/CTASection"
import TestimonialsSection from "./_components/TestimonialsSection"
import AboutSection from "./_components/AboutSection"

export default function Home() {
    return (
        <main className="min-h-screen">
            <HeroSection />
            <ContactInfoSection />
            <StatsSection />
            <WhyChooseUsSection />
            <ServicesSection />
            <CTASection />
            <TestimonialsSection />
            <AboutSection />
        </main>
    )
}