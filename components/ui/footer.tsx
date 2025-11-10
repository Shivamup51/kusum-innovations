"use client"

import Link from "next/link"
import Image from "next/image"
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

export default function Footer() {
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
                        <div className="flex items-center mb-6" style={{ minHeight: '28px' }}>
                            <div className="relative mr-3 flex-shrink-0">
                                <Image
                                    src="/logo.png"
                                    alt="Kusum Innovations Logo"
                                    width={28}
                                    height={28}
                                    className="h-7 w-7 rounded-lg object-contain"
                                />
                            </div>
                            <span className="text-lg font-semibold leading-7">Kusum Innovations</span>
                        </div>
                        <p className="text-gray-300 leading-relaxed">
                            We create powerful digital experiences that captivate, connect, and convert. 
                            From strategy to execution, we bring your vision to life with creativity and precision.
                        </p>
                    </div>

                    {/* Services - Split into two columns */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 h-7 leading-7">Our Services</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                            {services.map((service, index) => (
                                <Link 
                                    key={index}
                                    href={service.href}
                                    className="text-gray-300 hover:text-white transition-colors duration-200 text-sm flex items-center group"
                                >
                                    <ArrowRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                                    {service.name}
                                </Link>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="lg:ml-8">
                        <h3 className="text-lg font-semibold mb-6 h-7 leading-7">Quick Links</h3>
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

                    {/* Social Links */}
                    <div>
                        <h3 className="text-lg font-semibold mb-6 h-7 leading-7">Follow Us</h3>
                        <div className="flex gap-3 mb-6">
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
                        
                        {/* Contact Info */}
                        <div className="space-y-3">
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="h-4 w-4 text-[#B944EA] flex-shrink-0" />
                                <span className="text-sm">+91 9654159277, +91 9873846683</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="h-4 w-4 text-[#B944EA] flex-shrink-0" />
                                <span className="text-sm">pooja@kusuminnovations.com</span>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <MapPin className="h-4 w-4 text-[#B944EA] flex-shrink-0" />
                                <span className="text-sm">Rohini, Delhi</span>
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
