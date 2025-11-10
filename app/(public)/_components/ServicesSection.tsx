"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react"

const services = [
    {
        title: "Website Development",
        description: "Custom, responsive websites that reflect your brand and drive conversions. From corporate websites to e-commerce platforms, we build digital experiences that engage and convert.",
        link: "/services/website-development",
        image: "/Website Design/Hero Section.jpg"
    },
    {
        title: "Designing",
        description: "Stunning visual identities, logos, and brand communication materials. We create cohesive brand systems that elevate perception and leave lasting impressions.",
        link: "/services/designing",
        image: "/Designing/Hero section.jpg"
    },
    {
        title: "Video Production",
        description: "Professional video content that tells your story and engages audiences. From corporate films to product demos, we craft cinematic experiences that inspire trust.",
        link: "/services/video-production",
        image: "/VIDEO PRODUCTION/hero section.jpg"
    },
    {
        title: "2D & 3D Animation",
        description: "Captivating animations that bring your ideas and products to life. Whether it's explainer videos or character animations, we create memorable visual experiences.",
        link: "/services/2d-animation",
        image: "/VIDEO PRODUCTION/hero section.jpg"
    },
    {
        title: "Mobile App Development",
        description: "Native and cross-platform mobile apps for iOS and Android. High-performance apps with modern UI/UX that deliver seamless user experiences.",
        link: "/services/mobile-app-development",
        image: "/App Development/Hero section.jpg"
    },
    {
        title: "Social Media Marketing",
        description: "Strategic social media campaigns that grow your audience and engagement. We craft content that feels personal, authentic, and compelling.",
        link: "/services/social-media-marketing",
        image: "/SMM/Hero.jpg"
    },
    {
        title: "Photography",
        description: "Professional photography services for products, events, and branding. High-quality imagery that showcases your brand in the best light.",
        link: "/services/photography",
        image: "/PHOTOGRAPHY/Hero Section.jpg"
    },
    {
        title: "SEO Services",
        description: "Boost your search rankings and drive organic traffic to your website. Data-driven SEO strategies that maximize visibility and conversions.",
        link: "/services/search-engine-optimisation",
        image: "/SEO/Hero Section.jpg"
    },
    {
        title: "Audio Services",
        description: "Professional audio production, voiceovers, and sound design. We craft audio identities that resonate, inspire, and endure.",
        link: "/services/audio-services",
        image: "/AUDIO/Hero section.jpg"
    },
    {
        title: "Paid Advertising",
        description: "ROI-focused ad campaigns that increase leads, sales, and brand exposure. Smarter targeting and strategic storytelling that turn campaigns into revenue machines.",
        link: "/services/paid-advertising",
        image: "/PAID ADVERTISING/Hero section.jpg"
    }
]

export default function ServicesSection() {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const checkScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                setShowLeftArrow(scrollLeft > 0)
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
            }
        }

        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            const currentScroll = scrollContainerRef.current.scrollLeft
            const newScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount
            
            scrollContainerRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            })

            // Update arrow visibility after scroll
            setTimeout(() => {
                if (scrollContainerRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                    setShowLeftArrow(scrollLeft > 0)
                    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
                }
            }, 300)
        }
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    return (
        <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Our Services
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Comprehensive digital solutions delivered by experienced professionals.
                    </p>
                </div>

                <div className="relative">
                    {/* Left Arrow */}
                    {showLeftArrow && (
                        <button
                            onClick={() => scroll('left')}
                            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B944EA] hover:text-white border border-gray-200"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                    )}

                    {/* Scrollable Container */}
                    <div
                        ref={scrollContainerRef}
                        onScroll={handleScroll}
                        className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 scroll-smooth"
                        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                    >
                        {services.map((service, index) => (
                            <Link key={index} href={service.link} className="flex-shrink-0 w-[350px]">
                                <Card className="group h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg cursor-pointer overflow-hidden p-0">
                                    <div className="relative h-48 overflow-hidden">
                                        <Image
                                            src={service.image}
                                            alt={service.title}
                                            fill
                                            className="object-cover group-hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                    <CardContent className="p-4">
                                        <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#B944EA] transition-colors duration-300">
                                            {service.title}
                                        </h3>
                                        <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3">
                                            {service.description}
                                        </p>
                                        <div className="flex items-center text-[#B944EA] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                            Learn more
                                            <ArrowRight className="ml-1 h-4 w-4" />
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    {/* Right Arrow */}
                    {showRightArrow && (
                        <button
                            onClick={() => scroll('right')}
                            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B944EA] hover:text-white border border-gray-200"
                            aria-label="Scroll right"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    )}
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    )
}
