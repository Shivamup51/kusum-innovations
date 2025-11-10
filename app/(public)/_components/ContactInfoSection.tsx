"use client"

import { Clock, Phone, MapPin } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

export default function ContactInfoSection() {
    return (
        <section className="py-16 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Working Hours */}
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="flex flex-col items-center mb-4">
                                <Clock className="h-10 w-10 text-[#B944EA] mb-3" />
                                <h3 className="text-lg font-bold text-gray-900">Working Hours</h3>
                            </div>
                            <p className="text-gray-600">
                                Monday to Saturday<br />
                                08:00 AM - 08:00 PM
                            </p>
                        </CardContent>
                    </Card>

                    {/* Contact Us */}
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="flex flex-col items-center mb-4">
                                <Phone className="h-10 w-10 text-[#B944EA] mb-3" />
                                <h3 className="text-lg font-bold text-gray-900">Contact Us</h3>
                            </div>
                            <p className="text-gray-600">
                                <a href="tel:+918868879387" className="hover:text-[#B944EA] transition-colors">
                                    +91 8868879387
                                </a>
                                <br />
                                <a href="mailto:info@kusuminnovations.com" className="hover:text-[#B944EA] transition-colors">
                                    info@kusuminnovations.com
                                </a>
                            </p>
                        </CardContent>
                    </Card>

                    {/* Our Location */}
                    <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                        <CardContent className="p-6 text-center">
                            <div className="flex flex-col items-center mb-4">
                                <MapPin className="h-10 w-10 text-[#B944EA] mb-3" />
                                <h3 className="text-lg font-bold text-gray-900">Our Location</h3>
                            </div>
                            <p className="text-gray-600">
                                D 16, Basement, Hauz Khas<br />
                                New Delhi-110016
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    )
}

