"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { animationTypes, faqs, processSteps, whyChooseUs } from "./_components/data"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, ArrowRight, CheckCircle } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Animation2D() {
    const [activeService, setActiveService] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % animationTypes.length)
        }, 6000)
        return () => clearInterval(interval)
    }, [])

    return (
        <div className="min-h-screen bg-white">
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
                        <div className="space-y-4">
                            {/* Main Headline */}
                            <div>
                                <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                    <span className="block whitespace-nowrap">Animations That</span>
                                    <span className="block whitespace-nowrap bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                                        Inspire Action
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Subtitle */}
                            <div className="space-y-4">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                                    We create <span className="font-semibold text-[#B944EA]">2D and 3D animations</span> that simplify, engage, and captivate.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    From explainer videos to high-end 3D visuals, our animations tell stories that move audiences.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                                    <Play className="h-5 w-5" />
                                    Start Your Project
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
                                        src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=450&fit=crop&crop=center" 
                                        alt="2D Animation Services" 
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

            {/* Our Story Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        {/* Single Image */}
                        <div className="relative">
                            <div className="aspect-[3/2] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=600&h=450&fit=crop&crop=center" 
                                    alt="Our Story - Animation Team" 
                                    width={600}
                                    height={550}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Imagination in Motion
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At <span className="font-semibold text-[#B944EA]">Kusum Innovations</span>, we don&apos;t just design animations—we craft visual experiences that bring ideas to life. As a leading 2D and 3D animation company in Delhi-NCR, we transform complex concepts into compelling stories that educate, inspire, and convert.
                                </p>
                                <p>
                                    Whether you&apos;re launching a product, explaining a service, or engaging audiences on social media, our animation team combines creativity, strategy, and technology to deliver content that resonates. From character animations to cinematic 3D visualizations, we ensure every project reflects your brand identity and connects with your audience.
                                </p>
                                <p>
                                    With expertise across industries and tools like After Effects, Blender, Maya, and Cinema 4D, we create animations that merge imagination with precision. Our goal is simple—deliver powerful visuals that leave lasting impressions and drive real business outcomes.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Services Section with Interactive Tabs */}
            <section className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our 2D & 3D Animation Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            End-to-end animation solutions designed to engage, explain, and entertain.
                        </p>
                    </div>

                    {/* Service Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-x-visible justify-start lg:justify-center gap-4 px-4 lg:px-0 pb-2 service-tabs-scroll">
                            {animationTypes.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                                        activeService === index
                                            ? 'bg-[#B944EA] text-white shadow-lg hover:bg-[#A03BD6]'
                                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                                    }`}
                                >
                                    {service.title}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Active Service Display */}
                    <Card className="border-0 shadow-none">
                        <CardContent className="p-0">
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                                <div>
                                    <div className="text-4xl mb-6 flex items-center gap-2">
                                        {animationTypes[activeService].icon}
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {animationTypes[activeService].title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {animationTypes[activeService].description}
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                        <Image 
                                            src={animationTypes[activeService].image} 
                                            alt={animationTypes[activeService].title}
                                            width={800}
                                            height={600}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </section>

            {/* Process Section */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-20">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">From Concept to Screen</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A structured, creative process ensures every animation is smooth, impactful, and aligned with your goals.
                        </p>
                    </div>

                    {/* Process Steps */}
                    <div className="space-y-24">
                        {processSteps.map((step, index) => (
                            <div key={index} className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                                {/* Content */}
                                <Card className={`border-0 shadow-lg ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                                    <CardContent className="p-8">
                                        <div className="space-y-6">
                                            {/* Step Number and Icon */}
                                            <div className="flex items-center gap-4 mb-6">
                                                <Badge className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-lg border-0`}>
                                                    {step.step}
                                                </Badge>
                                            
                                                {/* Title */}
                                                <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                                                    {step.title}
                                                </h3>
                                            </div>

                                            {/* Description */}
                                            <p className="text-lg text-gray-600 leading-relaxed">
                                                {step.description}
                                            </p>

                                            {/* Key Features */}
                                            <div className="space-y-3">
                                                {step.features.map((feature, i) => (
                                                    <div key={i} className="flex items-center gap-3">
                                                        <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                                                        <span className="text-gray-700">{feature}</span>
                                                    </div>
                                                ))}
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>

                                {/* Image */}
                                <div className={`relative ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                                    <div className="relative group">
                                        {/* Main Image */}
                                        <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                            <Image 
                                                src={
                                                    index === 0 
                                                        ? "https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&h=600&fit=crop&crop=center"
                                                        : index === 1
                                                        ? "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=600&fit=crop&crop=center"
                                                        : index === 2
                                                        ? "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop&crop=center"
                                                        : index === 3
                                                        ? "https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?w=800&h=600&fit=crop&crop=center"
                                                        : "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=800&h=600&fit=crop&crop=center"
                                                }
                                                alt={step.title}
                                                width={800}
                                                height={600}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Why Choose Us */}
            <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8">Why Partner with Kusum Innovations?</h2>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                At Kusum Innovations, animation is more than visuals—it&apos;s storytelling with purpose.
                            </p>
                            <div className="space-y-4">
                                {whyChooseUs.map((item, index) => (
                                    <div key={index} className="flex items-start gap-3">
                                        <CheckCircle className="h-6 w-6 text-[#B944EA] flex-shrink-0 mt-0.5" />
                                        <p className="text-gray-700">{item}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?w=800&h=450&fit=crop&crop=center" 
                                    alt="Our Team" 
                                    width={800}
                                    height={450}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <p className="text-xl text-gray-600">
                            Your questions, our answers—let&apos;s simplify animation for you.
                        </p>
                    </div>
                    
                    <Accordion type="single" collapsible className="space-y-4">
                        {faqs.map((faq, index) => (
                            <AccordionItem key={index} value={`item-${index}`} className="bg-white rounded-2xl border border-gray-200 px-6 data-[state=open]:shadow-lg transition-all duration-300">
                                <AccordionTrigger className="text-left font-semibold text-gray-900 text-lg hover:no-underline">
                                    {faq.question}
                                </AccordionTrigger>
                                <AccordionContent className="text-gray-600 leading-relaxed">
                                    {faq.answer}
                                </AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-24 relative overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10"></div>
                <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-5xl font-bold text-gray-900 mb-8">
                        Let&apos;s Animate Your Story
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        Ready to bring your ideas to life? From 2D explainers to high-end 3D product videos, we craft animations that captivate and convert.
                    </p>
                    <div className="flex justify-center mb-12">
                        <Link 
                            href="/contact-us" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                        >
                            Start Your Animation
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                </div>
            </section>
        </div>
    )
}
