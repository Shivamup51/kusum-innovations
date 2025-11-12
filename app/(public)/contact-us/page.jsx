"use client"

import { useState } from "react"
import Image from "next/image"
import { MapPin, Phone, Mail, Clock, Send, CheckCircle, MessageSquare, Users, Award, Facebook, Instagram, Linkedin, Youtube, MessageCircle, X } from "lucide-react"
import Navbar from "@/components/ui/navbar"

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
        
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || "Failed to send email")
            }

            setIsSubmitted(true)
            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                phone: "",
                company: "",
                service: "",
                message: ""
            })
        } catch (error) {
            console.error("Error sending email:", error)
            alert(error.message || "Failed to send message. Please try again later.")
        } finally {
            setIsSubmitting(false)
        }
    }

    const services = [
        "Photography",
        "Video Production", 
        "Designing",
        "2D/3D Animations",
        "Mobile App Development",
        "Paid Advertising",
        "Social Media Marketing",
        "Website Development",
        "Audio Services",
        "SEO"
    ]


    const contactInfo = [
        {
            icon: Phone,
            title: "Phone",
            details: ["9654159277", "9873846683"]
        },
        {
            icon: Mail,
            title: "Email",
            details: ["pooja@kusuminnovations.com"]
        },
        {
            icon: MapPin,
            title: "Address",
            details: ["Rohini, Delhi"]
        },
        {
            icon: Clock,
            title: "Timing",
            details: ["Monday to Saturday", "10:00 am to 7:00 pm"]
        }
    ]

    const emailContacts = [
        {
            title: "Sales Enquiries",
            emails: ["pooja@kusuminnovations.com", "sales@kusuminnovations.com"]
        },
        {
            title: "Job Applications",
            emails: ["career@kusuminnovations.com"]
        },
        {
            title: "Voice Artists",
            emails: ["voiceartist@kusuminnovations.com"]
        }
    ]

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/kusuminnovations",
            icon: Facebook,
            color: "text-blue-600"
        },
        {
            name: "Instagram", 
            url: "https://www.instagram.com/kidpl2016/",
            icon: Instagram,
            color: "text-pink-600"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/kusum-innovations-and-developments-private-limited/",
            icon: Linkedin,
            color: "text-blue-700"
        },
        {
            name: "Twitter (x)",
            url: "https://x.com/kusuminnovation/",
            icon: X,
            color: "text-gray-900"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@kusuminnovations",
            icon: Youtube,
            color: "text-red-600"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/919873846683",
            icon: MessageCircle,
            color: "text-green-600"
        }
    ]

    return (
        <div className="min-h-screen bg-gray-50">
            <Navbar />
            
            {/* Hero Section */}
            <section className="pt-20 pb-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h1 className="text-4xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 mt-12">
                                Let&apos;s Create Something 
                                <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent"> Extraordinary</span> Together
                            </h1>
                            <p className="text-xl text-gray-600 max-w-3xl mb-4">
                                At Kusum Innovations, we believe every great collaboration starts with a conversation. Whether you&apos;re looking for powerful video production, creative design, strategic marketing, or digital growth solutions — our team is here to listen, guide, and bring your vision to life.
                            </p>
                            <p className="text-lg text-gray-600 max-w-3xl">
                                We&apos;re not just service providers — we&apos;re partners invested in your success. Let&apos;s discuss your goals, challenges, and opportunities, and build strategies that drive real results.
                            </p>
                        </div>
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                                <Image 
                                    src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=800&h=600&fit=crop&crop=center" 
                                    alt="Contact Us" 
                                    width={800}
                                    height={600}
                                    className="w-full h-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Contact Form & Info Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                        {/* Contact Form */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 min-h-[600px]">
                            <h2 className="text-3xl font-bold text-gray-900 mb-6">Get In Touch</h2>
                            
                            {isSubmitted ? (
                                <div className="text-center py-12">
                                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                        <CheckCircle className="h-10 w-10 text-green-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-4">Message Sent Successfully!</h3>
                                    <p className="text-gray-600 mb-8">
                                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
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
                                            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                                Full Name *
                                            </label>
                                            <input
                                                type="text"
                                                id="name"
                                                name="name"
                                                required
                                                value={formData.name}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-colors duration-200"
                                                placeholder="Your full name"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Email Address *
                                            </label>
                                            <input
                                                type="email"
                                                id="email"
                                                name="email"
                                                required
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-colors duration-200"
                                                placeholder="your@email.com"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-colors duration-200"
                                                placeholder="+91 98765 43210"
                                            />
                                        </div>
                                        <div>
                                            <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company
                                            </label>
                                            <input
                                                type="text"
                                                id="company"
                                                name="company"
                                                value={formData.company}
                                                onChange={handleInputChange}
                                                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#B944EA] focus:border-transparent transition-colors duration-200"
                                                placeholder="Your company name"
                                            />
                                        </div>
                                    </div>
                                    
                                    <div>
                                        <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                                            Service Interested In
                                        </label>
                                        <select
                                            id="service"
                                            name="service"
                                            value={formData.service}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg  transition-colors duration-200"
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
                                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                            Message *
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            required
                                            rows={2}
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg transition-colors duration-200 resize-none"
                                            placeholder="Tell us about your project..."
                                        />
                                    </div>
                                    
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="w-full bg-gradient-to-r from-[#B944EA] to-[#00B7FF] text-white font-semibold py-4 px-6 rounded-lg hover:opacity-90 transition-opacity duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
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
                        <div className="space-y-8 min-h-[600px]">
                            {/* Contact Details */}
                            <div className="bg-white rounded-2xl shadow-lg p-8 h-full">
                                <h3 className="text-2xl font-bold text-gray-900 mb-6">Contact Details</h3>
                                <div className="space-y-6">
                                    {contactInfo.map((info, index) => (
                                        <div key={index} className="flex items-start gap-4">
                                            <div className={`w-12 h-12 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] rounded-xl flex items-center justify-center flex-shrink-0`}>
                                                <info.icon className="h-6 w-6 text-white" />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="font-semibold text-gray-900 mb-1">{info.title}</h4>
                                                {info.title === "Phone" || info.title === "Timing" ? (
                                                    <div className="flex flex-wrap gap-2">
                                                        {info.details.map((detail, i) => (
                                                            <p key={i} className="text-gray-600">{detail}</p>
                                                        ))}
                                                    </div>
                                                ) : (
                                                    <div className="space-y-1">
                                                        {info.details.map((detail, i) => (
                                                            <p key={i} className="text-gray-600">{detail}</p>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Email IDs and Social Media Section */}
            <section className="py-16 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Email Contacts */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Email IDs</h3>
                            <div className="space-y-4">
                                {emailContacts.map((contact, index) => (
                                    <div key={index}>
                                        <h4 className="font-semibold text-gray-900 mb-2">{contact.title}:</h4>
                                        {contact.emails.map((email, i) => (
                                            <a 
                                                key={i}
                                                href={`mailto:${email}`}
                                                className="block text-[#B944EA] hover:text-[#A03BD6] transition-colors duration-200 mb-1"
                                            >
                                                {email}
                                            </a>
                                        ))}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Social Media */}
                        <div className="bg-white rounded-2xl shadow-lg p-8 flex-1">
                            <h3 className="text-2xl font-bold text-gray-900 mb-6">Follow Us</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors duration-200"
                                    >
                                        <social.icon className={`h-6 w-6 ${social.color}`} />
                                        <span className="text-gray-700 font-medium">{social.name}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Google Map Section
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                            Find Us Here
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            Visit our office in Rohini, Delhi. We&apos;re here to help you bring your creative vision to life.
                        </p>
                    </div>
                    
                    <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
                        <div className="h-96 w-full">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3499.123456789!2d77.123456789!3d28.123456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDA3JzI0LjQiTiA3N8KwMDcnMjQuNCJF!5e0!3m2!1sen!2sin!4v1234567890123!5m2!1sen!2sin"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                title="Kusum Innovations Location"
                            ></iframe>
                        </div>
                        <div className="p-6 bg-white">
                            <div className="flex items-center gap-3">
                                <MapPin className="h-6 w-6 text-[#B944EA]" />
                                <div>
                                    <h3 className="font-semibold text-gray-900">Kusum Innovations</h3>
                                    <p className="text-gray-600">Rohini, Delhi, India</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section> */}
        </div>
    )
}