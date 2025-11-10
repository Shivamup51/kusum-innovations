"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X, ChevronDown, PhoneCall } from "lucide-react";
import { Button } from "./button";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const services = [
    { name: "Designing", icon: "🎨", desc: "Creative visual solutions", href: "/services/designing" },
    { name: "Website Development", icon: "💻", desc: "Modern web experiences", href: "/services/website-development" },
    { name: "Mobile App Development", icon: "📱", desc: "Native & cross-platform", href: "/services/mobile-app-development" },
    { name: "Social Media Marketing", icon: "📢", desc: "Engage your audience", href: "/services/social-media-marketing" },
    { name: "Search Engine Optimisation", icon: "🔍", desc: "Boost your visibility", href: "/services/search-engine-optimisation" },
    { name: "Paid Advertising", icon: "💰", desc: "Targeted campaigns", href: "/services/paid-advertising" },
    { name: "Video Production", icon: "🎬", desc: "Professional content", href: "/services/video-production" },
    { name: "2D/ 3D Animations", icon: "🎭", desc: "Bring ideas to life", href: "/services/2d-animation" },
    { name: "Photography", icon: "📸", desc: "Capture moments", href: "/services/photography" },
    { name: "Audio Services", icon: "🎵", desc: "Sound that resonates", href: "/services/audio-services" },
  ];

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about-us" },
    { name: "Services", href: "#", hasDropdown: true },
    { name: "Blog", href: "/blog" },
    { name: "Contact Us", href: "/contact-us" },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-20">
            {/* Logo */}
            <div className="flex-shrink-0 group">
              <Link href="/" className="flex items-center space-x-3">
                <div className="relative">
                  <Image
                    src="/logo.png"
                    alt="Ki Logo"
                    width={40}
                    height={40}
                    className="h-17 w-17 rounded-full transition-transform duration-300 group-hover:scale-110"
                  />
                  <div
                    className="absolute -inset-1 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-300 blur-sm"
                    style={{
                      background: "linear-gradient(to right, #B944EA, #00B7FF)",
                    }}
                  ></div>
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
                          <div
                            className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                            style={{
                              background: "linear-gradient(to right, #B944EA, #00B7FF)",
                            }}
                          ></div>
                        </button>

                        {/* Services Mega Menu */}
                        {isServicesOpen && (
                          <div
                            className="absolute top-full left-1/2 transform -translate-x-1/2 w-[800px] bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-gray-200/50 p-6 animate-in slide-in-from-top-2 duration-300"
                            onMouseEnter={() => setIsServicesOpen(true)}
                            onMouseLeave={() => setIsServicesOpen(false)}
                          >
                            <div className="grid grid-cols-2 gap-4">
                              {/* First Column */}
                              <div className="space-y-2">
                                {services.slice(0, 5).map((service, index) => (
                                  <Link
                                    key={index}
                                    href={service.href || "#"}
                                    className="block"
                                  >
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
                              
                              {/* Second Column */}
                              <div className="space-y-2">
                                {services.slice(5, 10).map((service, index) => (
                                  <Link
                                    key={index + 5}
                                    href={service.href || "#"}
                                    className="block"
                                  >
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
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        href={item.href}
                        className="relative px-4 py-2 text-gray-700 hover:text-[#B944EA] font-medium transition-all duration-200 hover:bg-gray-50/50 rounded-lg group"
                      >
                        {item.name}
                        <div
                          className="absolute bottom-0 left-0 w-0 h-0.5 transition-all duration-300 group-hover:w-full"
                          style={{
                            background: "linear-gradient(to right, #B944EA, #00B7FF)",
                          }}
                        ></div>
                      </Link>
                    )}
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <div className="hidden lg:flex items-center space-x-4">
              <Link href="/contact-us">
                <Button
                  variant="outline"
                  className="hover:bg-[#B944EA]/90 hover:text-white bg-[#B944EA] text-white font-medium rounded-full cursor-pointer"
                >
                  <PhoneCall className="h-4 w-4 mr-2" />
                  Let&apos;s connect
                </Button>
              </Link>
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

      {/* Mobile Navigation - Simple dropdown */}
      {isMenuOpen && (
        <div className="lg:hidden w-full bg-white/95 backdrop-blur-xl shadow-lg border-t border-gray-200/50 px-6 py-4 mt-20">
          <div className="space-y-2">
            {navItems.map((item) => (
              <div key={item.name}>
                {item.hasDropdown ? (
                  <div>
                    <button
                      onClick={() => setIsServicesOpen(!isServicesOpen)}
                      className="w-full flex items-center justify-between px-2 py-3 text-gray-700 hover:text-[#B944EA] hover:bg-gray-50/50 rounded-lg transition-all duration-200"
                    >
                      <span className="font-medium">{item.name}</span>
                      <ChevronDown
                        className={`h-4 w-4 transition-transform duration-200 ${
                          isServicesOpen ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {isServicesOpen && (
                      <div className="ml-4 mt-2 space-y-1">
                        {services.map((service, index) => (
                          <Link
                            key={index}
                            href={service.href || "#"}
                            onClick={() => setIsMenuOpen(false)}
                            className="flex items-center space-x-3 px-2 py-2 text-gray-600 hover:text-[#B944EA] hover:bg-gray-50/50 rounded-lg transition-all duration-200"
                          >
                            <span className="text-lg">{service.icon}</span>
                            <span className="text-sm">{service.name}</span>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="block px-2 py-3 text-gray-700 hover:text-[#B944EA] hover:bg-gray-50/50 rounded-lg transition-all duration-200 font-medium"
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
          </div>

          <div className="mt-6 border-t border-gray-200/50 pt-4">
            <Link href="/contact-us">
            <Button
              variant="outline"
              className="w-full px-6 py-3 text-[#B944EA] font-medium rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              <PhoneCall className="h-4 w-4 mr-2" />
              Let&apos;s connect
            </Button>
            </Link>
          </div>
        </div>
      )}
    </>
  );
}
