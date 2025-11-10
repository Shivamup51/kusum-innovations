"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Target, Zap, Award } from "lucide-react"

const features = [
    {
        icon: Users,
        title: "Expert Team",
        description: "Certified professionals skilled in design, development, and digital marketing"
    },
    {
        icon: Target,
        title: "Results-Driven",
        description: "Every project tailored to your business goals and measurable outcomes"
    },
    {
        icon: Zap,
        title: "Modern Solutions",
        description: "Cutting-edge tools and technologies in a fast-paced digital environment"
    },
    {
        icon: Award,
        title: "Proven Track Record",
        description: "Transparent tracking with measurable results and client satisfaction"
    }
]

export default function WhyChooseUsSection() {
    const [highlightedIndex, setHighlightedIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setHighlightedIndex((prev) => (prev + 1) % features.length)
        }, 2000) // Change highlighted card every 2 seconds

        return () => clearInterval(interval)
    }, [])

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Why Choose Kusum Innovations
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Excellence That Moves You Forward – Advanced solutions, personalized service, and results-driven support.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon
                        const isHighlighted = index === highlightedIndex
                        return (
                            <Card 
                                key={index} 
                                className={`group transition-all duration-500 ${
                                    isHighlighted 
                                        ? 'border-2 border-[#B944EA] shadow-2xl scale-105 bg-gradient-to-br from-[#B944EA]/5 to-[#00B7FF]/5' 
                                        : 'border border-gray-200 shadow-lg hover:shadow-xl'
                                }`}
                            >
                                <CardContent className="p-8 text-center relative">
                                    <div className={`w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-r from-[#B944EA] to-[#00B7FF] flex items-center justify-center transition-transform duration-300 shadow-lg ${
                                        isHighlighted ? 'scale-110' : 'group-hover:scale-110'
                                    }`}>
                                        <Icon className="h-10 w-10 text-white" />
                                    </div>
                                    <h3 className={`text-xl font-bold mb-3 transition-colors duration-300 ${
                                        isHighlighted ? 'text-[#B944EA]' : 'text-gray-900 group-hover:text-[#B944EA]'
                                    }`}>
                                        {feature.title}
                                    </h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        {feature.description}
                                    </p>
                                </CardContent>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
