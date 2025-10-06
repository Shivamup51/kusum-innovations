"use client"

import { useState, useEffect } from "react"
import Image from "next/image"

import { photographyTypes, faqs, processSteps, whyChooseUs } from "./_components/data"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Camera, ArrowRight, CheckCircle, Star } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function Photography() {
    const [activeService, setActiveService] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setActiveService((prev) => (prev + 1) % photographyTypes.length)
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
                                <h1 className="text-4xl md:text-4xl lg:text-5xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                                    <span className="block whitespace-nowrap">Capturing Moments,</span>
                                    <span className="block whitespace-nowrap bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                                        Creating Impressions
                                    </span>
                                </h1>
                            </div>
                            
                            {/* Subtitle */}
                            <div className="space-y-4">
                                <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light">
                                    We craft <span className="font-semibold text-[#B944EA]">visuals that tell stories</span>—captivating, connecting, and creating lasting impressions.
                                </p>
                                <p className="text-lg text-gray-600 leading-relaxed">
                                    From concept to final frame, we transform visions into unforgettable imagery that inspires and engages.
                                </p>
                            </div>
                            
                            {/* CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Link href="/contact-us" className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group">
                                    <Camera className="h-5 w-5" />
                                    Book Your Session
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
                                        src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=450&fit=crop&crop=center" 
                                        alt="Photography Services" 
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
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=600&h=450&fit=crop&crop=center" 
                                    alt="Our Story - Photography Team" 
                                    width={600}
                                    height={550}
                                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                                />
                            </div>
                        </div>

                        {/* Content */}
                        <div>
                            <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                                Introduction
                            </h2>
                            <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                                <p>
                                    At <span className="font-semibold text-[#B944EA]">Kusum Innovations</span>, we specialize in professional photography services that go beyond just pictures—we create stories. As one of the top photography companies in Delhi-NCR, we deliver tailored shoots for brands, businesses, and individuals who want impact. From product launches and interiors to food menus and corporate portraits, our lens is guided by creativity, detail, and purpose.
                                </p>
                                <p>
                                    Photography, to us, is storytelling with light. Every frame is crafted to communicate your brand's essence, showcase your individuality, and capture emotions that connect with your audience. From concept to execution, our team ensures clarity, consistency, and visual excellence across all platforms.
                                </p>
                                <p>
                                    With a client-first approach and passion for storytelling, we transform ideas into compelling imagery. Partner with Kusum Innovations to inspire, engage, and grow your brand visually.
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
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Our Photography Services</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive photography solutions crafted to capture your brand's vision and story.
                        </p>
                    </div>

                    {/* Service Tabs */}
                    <div className="mb-12">
                        <div className="flex flex-wrap justify-center gap-4">
                            {photographyTypes.map((service, index) => (
                                <button
                                    key={index}
                                    onClick={() => setActiveService(index)}
                                    className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
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
                                        {photographyTypes[activeService].icon}
                                        <h3 className="text-3xl font-bold text-gray-900">
                                            {photographyTypes[activeService].title}
                                        </h3>
                                    </div>
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {photographyTypes[activeService].description}
                                    </p>
                                </div>
                                <div className="relative">
                                    <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                                        <Image 
                                            src={photographyTypes[activeService].image} 
                                            alt={photographyTypes[activeService].title}
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
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">From Vision to Lens</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            A seamless approach that transforms concepts into photographs that inspire, engage, and deliver results.
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
                                                        ? "https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=600&fit=crop&crop=center"
                                                        : "https://images.unsplash.com/photo-1554224311-beee4ece3c0b?w=800&h=600&fit=crop&crop=center"
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
                                At Kusum Innovations, we are more than just photographers—we're your creative partner in telling stories that captivate and endure.
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
                            <div className="aspect-video bg-gradient-to-br from-[#B944EA]/10 to-[#00B7FF]/10 rounded-3xl flex items-center justify-center relative overflow-hidden">
                                <Image 
                                    src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=800&h=450&fit=crop&crop=center" 
                                    alt="Our Team" 
                                    width={800}
                                    height={450}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                                <div className="relative z-10 text-center text-white">
                                    <div className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto mb-4">
                                        <Star className="h-10 w-10 text-white" />
                                    </div>
                                    <p className="text-xl font-medium">Your Vision, Our Lens</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* FAQs */}
            <section className="py-24 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-5xl font-bold text-gray-900 mb-6">Frequently Asked Questions (FAQs)</h2>
                        <p className="text-xl text-gray-600">
                            Clarity through answers—your photography queries, explained.
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
                        Ready to capture your story?
                    </h2>
                    <p className="text-xl text-gray-600 mb-12 leading-relaxed">
                        We transform moments into compelling visuals—creative shoots, product imagery, interiors, and more—that elevate brands and create lasting impressions with purposeful, precise, and artistic photography.
                    </p>
                    <div className="flex justify-center mb-12">
                        <Link 
                            href="/contact-us" 
                            className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                        >
                            Book Your Session
                            <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </div>
                    <div className="text-center">
                        <p className="text-lg font-medium text-[#B944EA] mb-2">
                            "Every frame tells a story. Let's shoot something amazing together."
                        </p>
                        <p className="text-gray-600">Contact us today to book your session or request a custom quote.</p>
                    </div>
                </div>
            </section>
        </div>
    )
}
