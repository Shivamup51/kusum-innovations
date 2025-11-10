"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

const heroSlides = [
    {
        title: "Transform Your Digital Presence",
        subtitle: "Turning Ideas Into Impact",
        quote1: "We craft exceptional digital experiences",
        quote2: "that drive real business results",
        image: "/Website Design/Hero section.jpg",
        service: "Website Development"
    },
    {
        title: "Create Stunning Visual Experiences",
        subtitle: "Design That Speaks Your Brand",
        quote1: "Visual storytelling that captivates",
        quote2: "and converts your audience",
        image: "/Designing/Hero section.jpg",
        service: "Designing"
    },
    {
        title: "Build Brands That Inspire",
        subtitle: "Strategic Marketing Solutions",
        quote1: "Data-driven campaigns that",
        quote2: "grow your business exponentially",
        image: "/SMM/Hero.jpg",
        service: "Social Media Marketing"
    },
    {
        title: "Drive Growth Through Innovation",
        subtitle: "Cutting-Edge Digital Solutions",
        quote1: "Innovative technology meets",
        quote2: "creative excellence",
        image: "/VIDEO PRODUCTION/hero section.jpg",
        service: "Video Production"
    }
]

export default function HeroSection() {
    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlideIndex((prev) => (prev + 1) % heroSlides.length)
        }, 5000) // Change slide every 5 seconds

        return () => clearInterval(interval)
    }, [])

    const currentSlide = heroSlides[currentSlideIndex]

    return (
        <section className="relative flex items-center overflow-hidden bg-gradient-to-br from-gray-50 via-white to-gray-100 pt-24 lg:pt-32 pb-16">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Text Content */}
                    <div className="text-left z-10">
                        <h1 
                            key={`title-${currentSlideIndex}`}
                            className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-4 animate-fade-in"
                        >
                            <span className="block">{currentSlide.title}</span>
                        </h1>

                        <p 
                            key={`subtitle-${currentSlideIndex}`}
                            className="text-2xl md:text-3xl text-gray-700 font-light mb-8 animate-fade-in"
                        >
                            {currentSlide.subtitle}
                        </p>

                        <div 
                            key={`quotes-${currentSlideIndex}`}
                            className="mb-10 space-y-2 animate-fade-in"
                        >
                            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                                &quot;{currentSlide.quote1}&quot;
                            </p>
                            <p className="text-xl md:text-2xl text-gray-800 font-semibold">
                                &quot;{currentSlide.quote2}&quot;
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 mb-6">
                            <Link href="/contact-us" className="w-full sm:w-auto">
                                <Button className="w-full sm:w-auto px-8 py-6 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                    Get Started Today
                                    <ArrowRight className="ml-2 h-5 w-5" />
                                </Button>
                            </Link>
                            <Link href="/about-us" className="w-full sm:w-auto">
                                <Button variant="outline" className="w-full sm:w-auto px-8 py-6 border-2 border-gray-300 hover:border-[#B944EA] text-gray-700 hover:text-[#B944EA] font-semibold rounded-full text-lg transition-all duration-300">
                                    Learn More
                                </Button>
                            </Link>
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="relative h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl">
                        <div 
                            key={`image-${currentSlideIndex}`}
                            className="absolute inset-0 animate-fade-in"
                        >
                            <Image
                                src={currentSlide.image}
                                alt={currentSlide.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center gap-2 mt-8">
                    {heroSlides.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentSlideIndex(index)}
                            className={`h-2 rounded-full transition-all duration-300 ${
                                index === currentSlideIndex
                                    ? "w-8 bg-[#B944EA]"
                                    : "w-2 bg-gray-300 hover:bg-gray-400"
                            }`}
                            aria-label={`Go to slide ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            <style jsx>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                        transform: translateY(20px);
                    }
                    to {
                        opacity: 1;
                        transform: translateY(0);
                    }
                }
                .animate-fade-in {
                    animation: fade-in 0.8s ease-in-out;
                }
            `}</style>
        </section>
    )
}
