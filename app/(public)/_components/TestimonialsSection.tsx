"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Sarah Johnson",
        role: "CEO, TechStart Inc.",
        content: "Kusum Innovations transformed our digital presence completely. Their creative approach and technical expertise helped us achieve 300% growth in online engagement. Highly recommended!",
        company: "TechStart Inc.",
        image: "/blog/2D vs 3D Animation Choosing the Right Medium for Your Brand Story-15.jpg"
    },
    {
        id: 2,
        name: "Michael Chen",
        role: "Marketing Director, BrandCo",
        content: "Working with Kusum Innovations was a game-changer. Their video production and social media strategies increased our brand visibility by 250%. Exceptional team and results!",
        company: "BrandCo",
        image: "/blog/From Scrolls to Sales Turning Your Social Media into a Revenue Machine-11.jpg"
    },
    {
        id: 3,
        name: "Emily Rodriguez",
        role: "Founder, DesignStudio",
        content: "The team at Kusum Innovations understood our vision perfectly. Their design work and website development exceeded all expectations. Our conversion rates improved significantly!",
        company: "DesignStudio",
        image: "/blog/Minimalism vs Maximalism Which Design Trend Will Rule 2026-14.jpg"
    },
    {
        id: 4,
        name: "David Park",
        role: "CTO, InnovateLabs",
        content: "Kusum Innovations delivered a stunning mobile app that our users love. Their attention to detail and innovative solutions made all the difference. Outstanding work!",
        company: "InnovateLabs",
        image: "/blog/Building Scalable Mobile Applications-02.jpg"
    },
    {
        id: 5,
        name: "Lisa Wang",
        role: "Brand Manager, FashionForward",
        content: "Their animation and video production services brought our brand story to life. The engagement and response from our audience has been phenomenal. Thank you!",
        company: "FashionForward",
        image: "/blog/From Script to Screen The Art of Storytelling in Corporate Videos-06.jpg"
    },
    {
        id: 6,
        name: "James Anderson",
        role: "Digital Strategist, GrowthHub",
        content: "Kusum Innovations helped us build a comprehensive digital strategy that drove real results. Their SEO and paid advertising campaigns increased our leads by 400%. Incredible partnership!",
        company: "GrowthHub",
        image: "/blog/SEO in 2026 What Will Really Matter in Google Next Algorithm Update-01.jpg"
    }
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000) // Change testimonial every 5 seconds

        return () => clearInterval(interval)
    }, [])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        What Our Clients Say
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real stories from real clients who have experienced the Kusum Innovations difference.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B944EA] to-[#00B7FF]"></div>
                        <CardContent className="p-8 md:p-12">
                            <Quote className="h-12 w-12 text-[#B944EA] mb-6 opacity-20" />
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                                &quot;{currentTestimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                {/* Circular Profile Image */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#B944EA]/20 ring-2 ring-[#B944EA]/10">
                                        <Image
                                            src={currentTestimonial.image}
                                            alt={currentTestimonial.name}
                                            width={64}
                                            height={64}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                // Fallback to a placeholder if image doesn't exist
                                                e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle fill='%23B944EA' cx='32' cy='32' r='32'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3E" + currentTestimonial.name.charAt(0) + "%3C/text%3E%3C/svg%3E"
                                            }}
                                        />
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900">
                                        {currentTestimonial.name}
                                    </h4>
                                    <p className="text-gray-600">
                                        {currentTestimonial.role}
                                    </p>
                                    <p className="text-sm text-[#B944EA] font-semibold mt-1">
                                        {currentTestimonial.company}
                                    </p>
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Indicator Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "w-8 bg-[#B944EA]"
                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
