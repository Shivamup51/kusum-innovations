"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CTASection() {
    return (
        <section className="py-24 relative overflow-hidden bg-gradient-to-br from-gray-50 to-white">
            <div className="absolute inset-0 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10"></div>
            <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                    Let's Start Your Digital Journey
                </h2>
                <p className="text-xl text-gray-600 mb-10 leading-relaxed">
                    Your path to digital success starts with a single step—and we're here to walk it with you. Whether you're launching a new project, planning your digital transformation, or just exploring options, Kusum Innovations' team is standing by.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                    <Link href="/contact-us">
                        <Button className="px-8 py-6 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full text-lg transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Book Your Consultation
                            <ArrowRight className="ml-2 h-5 w-5" />
                        </Button>
                    </Link>
                </div>
            </div>
        </section>
    )
}

