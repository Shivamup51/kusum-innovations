"use client"

import { useState } from "react"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Users, Award } from "lucide-react"
import Navbar from "@/components/Navbar"

export default function ContactUs() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        company: "",
        service: "",
        message: ""
    })
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [isSubmitted, setIsSubmitted] = useState(false)

    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)
        
        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false)
            setIsSubmitted(true)
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: ""
            })
        }, 2000)
    }

    const contactInfo = [
        {
            icon: MapPin,
            title: "Office Address",
            details: ["123 Business District", "Delhi NCR, India", "110001"],
            color: "text-[#B944EA]"
        },
        {
            icon: Phone,
            title: "Phone Number",
            details: ["+91 98765 43210", "+91 11 2345 6789"],
            color: "text-[#00B7FF]"
        },
        {
            icon: Mail,
            title: "Email Address",
            details: ["hello@kusuminnovations.com", "info@kusuminnovations.com"],
            color: "text-[#B944EA]"
        },
        {
            icon: Clock,
            title: "Working Hours",
            details: ["Mon - Fri: 9:00 AM - 6:00 PM", "Sat: 10:00 AM - 4:00 PM", "Sun: Closed"],
            color: "text-[#00B7FF]"
        }
    ]

    const services = [
        "Video Production",
        "Website Development",
        "Mobile App Development",
        "Social Media Marketing",
        "SEO Services",
        "Paid Advertising",
        "Designing",
        "Photography",
        "Audio Services",
        "2D/3D Animations"
    ]

    const stats = [
        { number: "500+", label: "Projects Completed", icon: Award },
        { number: "200+", label: "Happy Clients", icon: Users },
        { number: "5+", label: "Years Experience", icon: Clock },
        { number: "24/7", label: "Support Available", icon: MessageSquare }
    ]

    return (
        <div className="min-h-screen bg-white">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Get In <span className="text-[#B944EA]">Touch</span>
                        </h1>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
                            Ready to bring your vision to life? Let's discuss your project and create something amazing together.
                        </p>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        {stats.map((stat, index) => (
                            <div key={index} className="text-center">
                                <div className="w-16 h-16 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <stat.icon className="h-8 w-8 text-white" />
                                </div>
                                <div className="text-3xl font-bold text-gray-900 mb-2">{stat.number}</div>
                                <div className="text-gray-600">{stat.label}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Main Contact Section */}
            <section className="py-20 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8">
                            <div className="mb-8">
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Send us a Message</h2>
                                <p className="text-gray-600">
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                                    <p className="text-gray-600 mb-6">
                                        Thank you for reaching out. We'll get back to you soon.
                                    </p>
                                    <button 
                                        onClick={() => setIsSubmitted(false)}
                                        className="px-6 py-3 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                                    >
                                        Send Another Message
                                    </button>
                                </div>
                            ) : (
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                name="name"
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Name
                                            </label>
                                            <input
                                                type="text"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select a service</option>
                                            {services.map((service, index) => (
                                                <option key={index} value={service}>
                                                    {service}
                                                </option>
                                            ))}
                                        </select>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            required
                                            rows={10}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-all duration-200 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                <Send className="h-5 w-5" />
                                                Send Message
                                            </>
                                        )}
                                    </button>
                                </form>
                            )}
                        </div>

                        {/* Contact Information */}
                        <div className="space-y-8">
                            <div>
                                <h2 className="text-3xl font-bold text-gray-900 mb-4">Contact Information</h2>
                                <p className="text-gray-600 mb-8">
                                    We're here to help! Reach out to us through any of the channels below.
                                </p>
                            </div>

                            <div className="space-y-6">
                                {contactInfo.map((info, index) => (
                                    <div key={index} className="flex items-start gap-4 p-6 bg-white rounded-xl shadow-sm border border-gray-200">
                                        <div className={`w-12 h-12 bg-gray-100 rounded-lg flex items-center justify-center flex-shrink-0`}>
                                            <info.icon className={`h-6 w-6 ${info.color}`} />
                                        </div>
                                        <div>
                                            <h3 className="text-lg font-semibold text-gray-900 mb-2">{info.title}</h3>
                                            {info.details.map((detail, idx) => (
                                                <p key={idx} className="text-gray-600">{detail}</p>
                                            ))}
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Quick Contact Buttons */}
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <a 
                                    href="tel:+919876543210"
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:border-[#B944EA] hover:text-[#B944EA] transition-all duration-200"
                                >
                                    <Phone className="h-5 w-5" />
                                    Call Now
                                </a>
                                <a 
                                    href="mailto:hello@kusuminnovations.com"
                                    className="flex items-center justify-center gap-3 px-6 py-4 bg-white border border-gray-300 rounded-lg hover:border-[#00B7FF] hover:text-[#00B7FF] transition-all duration-200"
                                >
                                    <Mail className="h-5 w-5" />
                                    Email Us
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Map Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Find Us</h2>
                        <p className="text-gray-600">
                            Visit our office in Delhi NCR for in-person consultations.
                        </p>
                    </div>
                    
                    <div className="bg-gray-200 rounded-2xl h-96 flex items-center justify-center">
                        <div className="text-center">
                            <MapPin className="h-16 w-16 text-gray-400 mx-auto mb-4" />
                            <p className="text-gray-600 text-lg">Interactive Map Coming Soon</p>
                            <p className="text-gray-500">123 Business District, Delhi NCR, India</p>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="py-20 bg-gradient-to-br from-[#B944EA]/10 to-[#00B7FF]/10">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">
                        Ready to Start Your Project?
                    </h2>
                    <p className="text-xl text-gray-600 mb-8">
                        Let's discuss your ideas and turn them into reality. Get in touch with us today!
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a 
                            href="#contact-form"
                            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] text-white font-semibold rounded-lg hover:opacity-90 transition-opacity duration-200"
                        >
                            <MessageSquare className="h-5 w-5" />
                            Start a Conversation
                        </a>
                        <a 
                            href="tel:+919876543210"
                            className="inline-flex items-center gap-3 px-8 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:border-[#B944EA] hover:text-[#B944EA] transition-all duration-200"
                        >
                            <Phone className="h-5 w-5" />
                            Call Us Now
                        </a>
                    </div>
                </div>
            </section>
        </div>
    )
}