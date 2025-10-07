"use client"

import { useState } from "react"
import Link from "next/link"
import { 
    Facebook, 
    Instagram, 
    Linkedin, 
    Twitter, 
    Youtube, 
    MessageCircle, 
    Mail, 
    Phone, 
    MapPin,
    ArrowRight
} from "lucide-react"
import { Button } from "./button"
import { Input } from "./input"

export default function Footer() {
    const [email, setEmail] = useState("")

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        // Handle newsletter subscription
        console.log("Newsletter subscription:", email)
        setEmail("")
    }

    const services = [
        { name: "Photography", href: "/services/photography" },
        { name: "Video Production", href: "/services/video-production" },
        { name: "Designing", href: "/services/designing" },
        { name: "2D Animation", href: "/services/2d-animation" },
        { name: "Mobile App Development", href: "/services/mobile-app-development" },
        { name: "Paid Advertising", href: "/services/paid-advertising" },
        { name: "Social Media Marketing", href: "/services/social-media-marketing" },
        { name: "Website Development", href: "/services/website-development" },
        { name: "Audio Services", href: "/services/audio-services" },
        { name: "SEO", href: "/services/search-engine-optimisation" }
    ]

    const quickLinks = [
        { name: "About Us", href: "/about" },
        { name: "Our Services", href: "/services" },
        { name: "Portfolio", href: "/portfolio" },
        { name: "Contact Us", href: "/contact-us" },
        { name: "Blog", href: "/blog" },
        { name: "Careers", href: "/careers" }
    ]

    const socialLinks = [
        {
            name: "Facebook",
            url: "https://www.facebook.com/kusuminnovations",
            icon: Facebook,
            color: "hover:text-blue-600"
        },
        {
            name: "Instagram", 
            url: "https://www.instagram.com/kidpl2016/",
            icon: Instagram,
            color: "hover:text-pink-600"
        },
        {
            name: "LinkedIn",
            url: "https://www.linkedin.com/company/kusum-innovations-and-developments-private-limited/",
            icon: Linkedin,
            color: "hover:text-blue-700"
        },
        {
            name: "Twitter",
            url: "https://x.com/kusuminnovation/",
            icon: Twitter,
            color: "hover:text-blue-400"
        },
        {
            name: "YouTube",
            url: "https://www.youtube.com/@kusuminnovations",
            icon: Youtube,
            color: "hover:text-red-600"
        },
        {
            name: "WhatsApp",
            url: "https://wa.me/919873846683",
            icon: MessageCircle,
            color: "hover:text-green-600"
        }
    ]

    return (
        <footer className="bg-gray-900 text-white">
            {/* Main Footer Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {/* Company Info */}
                    <div className="lg:col-span-1">
                        <div className="flex items-center mb-6">
                            <div className="w-10 h-10 bg-gradient-to-r from-[#B944EA] to-[#00B7FF] rounded-lg flex items-center justify-center mr-3">
                                <span className="text-white font-bold text-lg">K</span>
                            </div>
                            <span className="text-xl font-bold">Kusum Innovations</span>
                        </div>
                        <p className="text-gray-300 mb-6 leading-relaxed">
                            We create powerful digital experiences that captivate, connect, and convert. 
                            From strategy to execution, we bring your vision to life with creativity and precision.
                        </p>
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-4 w-4 text-[#B944EA]" />
                                <span className="text-sm">+91 9654159277, +91 9873846683</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-4 w-4 text-[#B944EA]" />
                                <span className="text-sm">pooja@kusuminnovations.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-4 w-4 text-[#B944EA]" />
                                <span className="text-sm">Rohini, Delhi</span>
                            </div>
                        </div>
                    </div>

                    {/* Services */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Our Services</h3>
                        <ul className="space-y-3">
                            {services.slice(0, 6).map((service, index) => (
                                <li key={index}>
                                    <Link 
                                        href={service.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {service.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map((link, index) => (
                                <li key={index}>
                                    <Link 
                                        href={link.href}
                                        className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                    >
                                        <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter & Social */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6">Stay Updated</h3>
                        <p className="text-gray-300 text-sm mb-4">
                            Subscribe to our newsletter for the latest updates and insights.
                        </p>
                        
                        <form onSubmit={handleNewsletterSubmit} className="mb-6">
                            <div className="flex gap-2">
                                <Input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="bg-gray-800 border-gray-700 text-white placeholder-gray-400 focus:border-[#B944EA] focus:ring-[#B944EA]"
                                    required
                                />
                                <Button 
                                    type="submit"
                                    size="sm"
                                    className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] hover:opacity-90"
                                >
                                    Subscribe
                                </Button>
                            </div>
                        </form>

                        {/* Social Links */}
                        <div>
                            <h4 className="text-sm font-medium mb-3">Follow Us</h4>
                            <div className="flex gap-3">
                                {socialLinks.map((social, index) => (
                                    <a
                                        key={index}
                                        href={social.url}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center text-gray-400 transition-all duration-200 ${social.color} hover:bg-gray-700`}
                                    >
                                        <social.icon className="h-4 w-4" />
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="border-t border-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                            <div className="text-gray-400 text-sm">
                            © 2025 Kusum Innovations. All rights reserved.
                        </div>
                </div>
            </div>
        </footer>
    )
}
