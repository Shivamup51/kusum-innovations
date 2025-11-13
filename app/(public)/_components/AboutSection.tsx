"use client"

import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function AboutSection() {
    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    {/* Left Side - Image */}
                    <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                        <Image
                            src="/about.jpg"
                            alt="About Kusum Innovations"
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Right Side - Text Content */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            About Kusum Innovations
                        </h2>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            At Kusum Innovations, we believe digital success is more than just great design — it&apos;s about unlocking your brand&apos;s true potential and creating meaningful connections that inspire trust and growth. As a creative agency specializing in digital marketing, video production, and brand strategy, we combine innovation with insight to craft experiences that elevate your business and strengthen your market presence.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Driven by creativity and powered by technology, we deliver strategic, result-oriented digital solutions that help brands stand out in a crowded marketplace. From crafting compelling videos and intuitive websites to managing full-scale campaigns, our team transforms ideas into impact — helping your brand connect, grow, and thrive in the digital era.
                        </p>
                        <Link href="/about-us">
                            <Button className="px-8 py-6 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                                Learn More
                                <ArrowRight className="ml-2 h-5 w-5" />
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

