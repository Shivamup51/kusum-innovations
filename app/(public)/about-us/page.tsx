"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, CheckCircle, Star, Users, Target, Eye, Heart, Award, Linkedin, Calendar, MapPin, Phone, Mail } from "lucide-react"

export default function AboutUs() {
    const [activeValue, setActiveValue] = useState(0)

    const coreValues = [
        {
            title: "Self-definition",
            description: "We are clear in our purpose: to deliver diverse, technology-driven services that empower client success.",
            icon: Target
        },
        {
            title: "Transparency", 
            description: "We maintain open, honest communication and invite collaboration, critique, and dialogue.",
            icon: Eye
        },
        {
            title: "Authenticity",
            description: "We bring freshness and originality, blending industry trends with our unique creative approach.",
            icon: Heart
        },
        {
            title: "Accountability",
            description: "We take ownership of results, celebrating wins and addressing challenges with integrity.",
            icon: Award
        }
    ]

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveValue((prev) => (prev + 1) % coreValues.length)
        }, 4000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-[#00B7FF]/10 to-[#B944EA]/10 rounded-full blur-xl"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            {/* Main Headline */}
                            <div>
                                <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                    <span className="block whitespace-nowrap">Ideas That</span>
                                    <span className="block whitespace-nowrap bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                                        Inspire Impact
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Subtitle */}
                            <div className="space-y-4">
                                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                                    We build brands through <span className="font-semibold text-[#B944EA]">creativity, strategy, and innovation</span>.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    From vision to execution, we partner with you to craft experiences that connect, engage, and drive growth.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                                    <Users className="h-5 w-5" />
                                    Work With Us
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="relative">
                                {/* Main Image */}
                                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                    <Image 
                                        src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=center" 
                                        alt="About Kusum Innovations" 
                                        width={600}
                                        height={450}
                                        className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            About <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">Us</span>
                        </h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Content */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Founded on <span className="font-semibold text-[#B944EA]">29th June 2016</span>, Kusum Innovations is a trusted name in developing websites and mobile apps, digital marketing, and video production in Delhi-NCR. In a fast-paced industry where trends often overshadow creativity, we focus on delivering impactful strategies and visually compelling content.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Over the years, we&apos;ve had the privilege of working with a diverse range of clients—startups, established brands, and enterprises—helping them bring their ideas to life through innovative digital solutions.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    With a potent blend of creativity, technology, and strategic thinking, we craft experiences that not only look great but also drive real results. From designing intuitive websites and mobile apps to creating engaging ad campaigns and powerful visual stories, we are dedicated to helping brands connect, grow, and leave a lasting impression.
                                </p>
                            </div>
                        </div>

                        {/* Right Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=450&fit=crop&crop=center" 
                                    alt="About Kusum Innovations" 
                                    width={600}
                                    height={450}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission & Vision Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Mission */}
                        <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardContent className="p-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gradient-to-r from-[#B944EA] to-[#A03BD6] rounded-full">
                                        <Target className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900">Mission</h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    At Kusum Innovations, our mission is fuelled by ambition, creativity, and a relentless pursuit of excellence. We aim to be among the best advertising agencies and video production companies in the industry—delivering not just services, but experiences that inspire and engage.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Every project is guided by innovation, attention to detail, and a deep understanding of our client&apos;s vision. Through a powerful mix of digital marketing, creative content, and technology-driven solutions, we strive to fuel growth, boost visibility, and make a meaningful difference for the brands we serve.
                                </p>
                            </CardContent>
                        </Card>

                        {/* Vision */}
                        <Card className="p-8 hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                            <CardContent className="p-0">
                                <div className="flex items-center gap-4 mb-6">
                                    <div className="p-3 bg-gradient-to-r from-[#00B7FF] to-[#0099CC] rounded-full">
                                        <Eye className="h-6 w-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-black text-gray-900">Vision</h3>
                                </div>
                                <p className="text-lg text-gray-700 leading-relaxed mb-4">
                                    Our vision is bold: to redefine the advertising industry with creativity, fresh energy, and disruptive ideas. We aspire to help businesses rise above the noise, dominate their markets, and reach extraordinary heights.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    For us, success is measured in smiles, milestones, and the impact we create. From cutting-edge marketing strategies to innovative video production and digital solutions, we are committed to driving growth and accelerating success—becoming the trusted partner for brands looking to thrive.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </section>

            {/* Core Values Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            Core <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">Values</span>
                        </h2>
                        <p className="text-xl text-gray-600 max-w-5xl mx-auto">
                            At Kusum Innovations, our growth is rooted in strong values that guide everything we do:
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {coreValues.map((value, index) => {
                            const IconComponent = value.icon
                            return (
                                <Card 
                                    key={index} 
                                    className={`p-6 text-center hover:shadow-xl transition-all duration-300 cursor-pointer border-0 shadow-lg ${
                                        activeValue === index ? 'ring-2 ring-[#B944EA] scale-105' : ''
                                    }`}
                                    onClick={() => setActiveValue(index)}
                                >
                                    <CardContent className="p-0">
                                        <div className="p-4 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] rounded-full w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                                            <IconComponent className="h-8 w-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                                        <p className="text-gray-600 leading-relaxed">{value.description}</p>
                                    </CardContent>
                                </Card>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* About the Founder Section */}
            <section className="py-24 bg-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-6">
                            About the <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">Founder</span>
                        </h2>
                        <h3 className="text-2xl font-bold text-gray-800 mb-4">Pooja Jain</h3>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Left Image */}
                        <div className="relative">
                            <div className="aspect-[3/4] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="/founder.png"
                                    alt="Pooja Jain - Founder" 
                                    width={600}
                                    height={700}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                                />
                            </div>
                        </div>

                        {/* Right Content */}
                        <div className="space-y-6">
                            <div className="space-y-4">
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    At the heart of Kusum Innovations is its visionary founder, <span className="font-semibold text-[#B944EA]">Pooja Jain</span>, whose journey is defined by creativity, strategy, and impact. With an MBA in Marketing and over <span className="font-semibold text-[#B944EA]">13 years</span> of diverse experience in sales, marketing, and video production, she has mastered the art of blending creativity with business acumen to deliver solutions that drive measurable growth.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Since establishing Kusum Innovations in 2016, Pooja has led the company with a mission to bridge the gap between design, technology, and storytelling. Her approach is rooted in solution selling—understanding client needs deeply and delivering experiences that not only look exceptional but also achieve real business objectives.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Her expertise spans across developing marketing strategies, crafting powerful brand stories, and producing high-quality video content that inspires audiences. What sets her apart is her ability to combine strategic thinking with artistic execution, ensuring every project is purposeful, distinctive, and impactful.
                                </p>
                                <p className="text-lg text-gray-700 leading-relaxed">
                                    Approachable, visionary, and committed to excellence, Pooja continues to shape Kusum Innovations into a trusted creative partner for brands across industries—transforming ideas into experiences that captivate, connect, and create lasting impressions.
                                </p>
                            </div>
                           
                            {/* LinkedIn Link */}
                            <div className="mt-6">
                                <Link 
                                    href="https://www.linkedin.com/in/entreprenuerpoojajain/" 
                                    target="_blank"
                                    className="inline-flex items-center gap-3 px-6 py-3 bg-[#0077B5] hover:bg-[#005885] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                                >
                                    <Linkedin className="h-5 w-5" />
                                    Connect on LinkedIn
                                    <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-10">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
                        Ready to Create Something Amazing?
                    </h2>
                    <p className="text-xl text-white/90 mb-8 leading-relaxed">
                        Let&apos;s transform your ideas into impactful experiences that drive growth and inspire your audience.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-white hover:bg-gray-100 text-[#B944EA] font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                            <Users className="h-5 w-5" />
                            Start Your Project
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
