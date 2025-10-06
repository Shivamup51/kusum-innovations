"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, ChevronDown, Sparkles, ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "./button"

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [isServicesOpen, setIsServicesOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 10)
        }
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const services = [
        { name: "Designing", icon: "🎨", desc: "Creative visual solutions" , href: "/services/designing"   },
        { name: "Website Development", icon: "💻", desc: "Modern web experiences" },
        { name: "Mobile App Development", icon: "📱", desc: "Native & cross-platform" , href: "#" },
        { name: "Social Media Marketing", icon: "📢", desc: "Engage your audience" , href: "#" },
        { name: "Search Engine Optimisation", icon: "🔍", desc: "Boost your visibility" , href: "#" },
        { name: "Paid Advertising", icon: "💰", desc: "Targeted campaigns" , href: "#" },
        { name: "Video Production", icon: "🎬", desc: "Professional content" , href: "/services/video-production" },
        { name: "2D/ 3D Animations", icon: "🎭", desc: "Bring ideas to life" , href: "#" },
        { name: "Photography", icon: "📸", desc: "Capture moments" , href: "/services/photography" },
        { name: "Audio Services", icon: "🎵", desc: "Sound that resonates" , href: "#" }
    ]

    const navItems = [
        { name: "Home", href: "#" },
        { name: "About Us", href: "#" },
        { name: "Services", href: "#", hasDropdown: true },
        { name: "Blog", href: "#" },
        { name: "Contact Us", href: "/contact-us" }
    ]

    return (
        <>
            <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled 
                    ? 'bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50' 
                    : 'bg-transparent'
            }`}>
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between items-center h-20">
                        {/* Logo */}
                        <div className="flex-shrink-0 group">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="relative">
                                    <Image
                                        src="/logo.png"
                                        alt="Ki Logo"
                                        width={70}
                                        height={70}
                                        className="h-17 w-17 rounded-full transition-transform duration-300 group-hover:scale-110"
                                    />
                                    <div className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm" style={{background: 'linear-gradient(to right, #B944EA, #00B7FF)'}}></div>
                                </div>
                            </Link>
                        </div>

                        {/* Desktop Navigation */}
                        <div className="hidden lg:block">
                            <div className="flex items-center space-x-1">
                                {navItems.map((item) => (
                                    <div key={item.name} className="relative">
                                        {item.hasDropdown ? (
                                            <div className="relative group">
                                                <button
                                                    className="relative px-4 py-2 text-gray-700 hover:text-gray-900 font-medium transition-all duration-200 group-hover:bg-gray-50/50 rounded-lg cursor-pointer"
                                                    onMouseEnter={() => setIsServicesOpen(true)}
                                                >
                                                    <span className="flex items-center gap-1 text-[#B944EA]">
                                                        {item.name}
                                                        <ChevronDown className="h-4 w-4 transition-transform duration-200 group-hover:rotate-180" />
                                                    </span>
                                                    <div className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{background: 'linear-gradient(to right, #B944EA, #00B7FF)'}}></div>
                                                </button>
                                                
                                                {/* Services Mega Menu */}
                                                {isServicesOpen && (
                                                    <div 
                                                        className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-4 animate-in slide-in-from-top-2 duration-300"
                                                        onMouseEnter={() => setIsServicesOpen(true)}
                                                        onMouseLeave={() => setIsServicesOpen(false)}
                                                    >
                                                        <div className="grid grid-cols-2 gap-3">
                                                            {services.map((service, index) => (
                                                                <Link key={index} href={service.href || "#"} className="block">
                                                                    <div className="group p-3 rounded-md hover:bg-gradient-to-br hover:from-purple-50 hover:to-cyan-50 transition-all duration-300 cursor-pointer border border-transparent hover:border-purple-200/50">
                                                                        <div className="flex items-center space-x-3">
                                                                            <span className="text-xl group-hover:scale-110 transition-transform duration-300">
                                                                                {service.icon}
                                                                            </span>
                                                                            <div className="flex-1">
                                                                                <h4 className="font-semibold text-sm text-gray-900 group-hover:text-[#B944EA] transition-colors duration-300">
                                                                                    {service.name}
                                                                                </h4>
                                                                                <p className="text-xs text-gray-600 mt-1">
                                                                                    {service.desc}
                                                                                </p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            ))}
                                                        </div>
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="relative px-4 py-2 text-gray-700 hover:text-[#B944EA] font-medium transition-all duration-200 hover:bg-gray-50/50 rounded-lg group"
                                            >
                                                {item.name}
                                                <div className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full" style={{background: 'linear-gradient(to right, #B944EA, #00B7FF)'}}></div>
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* CTA Button */}
                        <div className="hidden lg:flex items-center space-x-4">
                            <Button 
                            variant="outline"
                            className="hover:bg-[#B944EA] hover:text-white bg-[#B944EA] text-white font-medium rounded-full cursor-pointer">
                                Get Quote
                            </Button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="lg:hidden">
                            <Button
                                variant="outline"
                                onClick={() => setIsMenuOpen(!isMenuOpen)}
                                className="p-2 rounded-lg text-gray-700 hover:text-[#B944EA] hover:bg-gray-100/50 transition-all duration-200"
                            >
                                {isMenuOpen ? (
                                    <X className="h-6 w-6" />
                                ) : (
                                    <Menu className="h-6 w-6" />
                                )}
                            </Button>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Mobile Navigation Overlay */}
            {isMenuOpen && (
                <div className="lg:hidden fixed inset-0 z-40">
                    <div className="fixed inset-0 bg-black/20 backdrop-blur-sm" onClick={() => setIsMenuOpen(false)}></div>
                    <div className="fixed top-0 right-0 h-full w-80 bg-white/95 backdrop-blur-xl shadow-2xl border-l border-gray-200/50">
                        <div className="p-6">
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center space-x-3">
                                    <Image
                                        src="/logo.png"
                                        alt="Ki Logo"
                                        width={70}
                                        height={70}
                                        className="h-20 w-20 rounded-full"
                                    />
                                </div>
                            </div>
                            
                            <div className="space-y-2">
                                {navItems.map((item) => (
                                    <div key={item.name}>
                                        {item.hasDropdown ? (
                                            <div>
                                                <Button
                                                    variant="outline"
                                                    onClick={() => setIsServicesOpen(!isServicesOpen)}
                                                    className="w-full flex items-center justify-between px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-lg transition-all duration-200"
                                                >
                                                    <span className="font-medium">{item.name}</span>
                                                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isServicesOpen ? 'rotate-180' : ''}`} />
                                                </Button>
                                                
                                                {isServicesOpen && (
                                                    <div className="ml-4 mt-2 space-y-1">
                                                        {services.map((service, index) => (
                                                            <div
                                                                key={index}
                                                                className="flex items-center space-x-3 px-4 py-2 text-gray-600 hover:text-[#B944EA] hover:bg-gray-50/50 rounded-lg transition-all duration-200 cursor-pointer"
                                                            >
                                                                <span className="text-lg">{service.icon}</span>
                                                                <span className="text-sm">{service.name}</span>
                                                            </div>
                                                        ))}
                                                    </div>
                                                )}
                                            </div>
                                        ) : (
                                            <Link
                                                href={item.href}
                                                className="block px-4 py-3 text-gray-700 hover:text-gray-900 hover:bg-gray-50/50 rounded-lg transition-all duration-200 font-medium"
                                                onClick={() => setIsMenuOpen(false)}
                                            >
                                                {item.name}
                                            </Link>
                                        )}
                                    </div>
                                ))}
                            </div>
                            
                            <div className="mt-8 pt-6 border-t border-gray-200/50">
                                <Button 
                                variant="outline"
                                className="w-full px-6 py-3 text-[#B944EA] font-medium rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer">
                                    Get Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    )
}   