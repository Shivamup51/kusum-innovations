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
                            src="/founder.png"
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
                            At Kusum Innovations, we believe digital success is not just about creating beautiful designs—it's about rediscovering your brand's potential, restoring market confidence, and reclaiming your competitive edge. Located in the heart of Delhi, our agency offers a sanctuary for those seeking comprehensive, creative, and cutting-edge digital solutions.
                        </p>
                        <p className="text-lg text-gray-700 leading-relaxed mb-6">
                            Whether you're launching a new product, managing brand identity, or recovering from digital setbacks, our expert team combines advanced design with evidence-based strategies to create customized solutions tailored to your goals. With a strong emphasis on client education, proactive care, and long-term growth, we help you move forward, feel stronger, and achieve digital excellence, so you can return to the marketplace you love with confidence and ease.
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

