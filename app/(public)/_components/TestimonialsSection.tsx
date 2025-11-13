"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

const testimonials = [
    {
        id: 1,
        name: "Dr Jayeeta Bhattacharjee",
        role: "Regional Manager-Corporate Sales @ Wiley",
        content: "Pooja is a thorough professional. She patiently discusses and understands her client's requirements and efficiently executes them. She is an absolute \"Go-Getter\" and wouldn't stop until she has delivered her best. I have known her for almost 8+ years and have developed a strong friendship while working together. She has the quality to go the extra mile for her customers each time, she is honest and punctual, and above all extremely cost-efficient. I wish her all the luck and may her hard work take her to the heights of success.",
        image: ""
    },
    {
        id: 2,
        name: "Soni Chauhan",
        role: "Head - People and Culture- ISOFT Group",
        content: "I highly recommend KI as a reliable and creative partner for corporate gifting and video production. We have worked with them for the past two years, and they have consistently delivered exceptional quality and timely results. Their team brings innovative ideas, attention to detail, and a strong commitment to client satisfaction. From thoughtful gifting solutions to impactful video campaigns, KI ensures every project reflects creativity and professionalism. They are a dependable partner for brands looking to create lasting impressions through meaningful and engaging experiences.",
        image: ""
    },
    {
        id: 4,
        name: "Sneha Pathak",
        role: "Co-Founder- Jomiso Consulting",
        content: "She was very patient with all my requests and bringing my idea to life. Her creativity, hard work and professional ethics are commendable. I had a great experience while working with her.",
        image: ""
    },
    {
        id: 5,
        name: "Vikalp Sharma",
        role: "People Development- VIVO",
        content: "We at VIVO India were looking for a team who could fulfil our requirement in a short span of time. Pooja & her team ensured that the project was completed well before timeline with minimum follow ups. One of the few people I have come across who is dedicated to work as if her entire career is at stake. It has further enhanced the reputation. Will work in future on other projects. Keep up the good work.",
        image: ""
    },
    {
        id: 6,
        name: "Subrata Namnit Patra",
        role: "Managing Partner @ IdeaCapital",
        content: "I have known Pooja for quite a few numbers of years. She has worked directly with me and helped and supported our teams on several challenging projects. She is smart, dedicated, and hard-working. Her hands-on and varied experience in the startup ecosystem has helped her coordinate highly effectively. Also, her working closely with people (startups, colleagues, and others) has made her suitable for an analyst role.",
        image: ""
    },
    {
        id: 7,
        name: "Suneel Kumar",
        role: "Partner @Aristotle Consultancy",
        content: "We have worked on couple of projects with Pooja and her team and we are happy the way they manage projects. Best quality, competitive budgets and always approachable team. I recommend Pooja and her team for their best services and professional approach to complete the tasks. They were always approachable during and after the project and consider all our requests positively.",
        image: ""
    },
    {
        id: 8,
        name: "Kanika Manocha",
        role: "Human Resource Manager- ID Tech",
        content: "Pooja was our vendor when we were looking for corporate gifting solutions. She is a very grounded always focused on delivering the best service. She believes in building strong client relationships. She puts in sincere efforts to ensure client satisfaction and always goes the extra mile to meet expectations. I highly recommend Pooja for her dedication, and client-focused approach.",
        image: ""
    }
]

export default function TestimonialsSection() {
    const [currentIndex, setCurrentIndex] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prev) => (prev + 1) % testimonials.length)
        }, 5000) // Change testimonial every 5 seconds

        return () => clearInterval(interval)
    }, [])

    const currentTestimonial = testimonials[currentIndex]

    return (
        <section className="py-24 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        Our Clients, Their Stories
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Real feedback from brands that experienced the value, trust, and creativity of Kusum Innovations.
                    </p>
                </div>

                <div className="max-w-4xl mx-auto">
                    <Card className="border-0 shadow-2xl relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-[#B944EA] to-[#00B7FF]"></div>
                        <CardContent className="p-8 md:p-12">
                            <Quote className="h-12 w-12 text-[#B944EA] mb-6 opacity-20" />
                            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8 font-light">
                                &quot;{currentTestimonial.content}&quot;
                            </p>
                            <div className="flex items-center gap-4">
                                {/* Circular Profile Image */}
                                <div className="relative flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full overflow-hidden border-4 border-[#B944EA]/20 ring-2 ring-[#B944EA]/10">
                                        {currentTestimonial.image ? (
                                            <Image
                                                src={currentTestimonial.image}
                                                alt={currentTestimonial.name}
                                                width={64}
                                                height={64}
                                                className="w-full h-full object-cover"
                                                onError={(e) => {
                                                    // Fallback to a placeholder if image doesn't exist
                                                    e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='64' height='64' viewBox='0 0 64 64'%3E%3Ccircle fill='%23B944EA' cx='32' cy='32' r='32'/%3E%3Ctext x='50%25' y='50%25' dominant-baseline='middle' text-anchor='middle' fill='white' font-size='24' font-weight='bold'%3E" + currentTestimonial.name.charAt(0) + "%3C/text%3E%3C/svg%3E"
                                                }}
                                            />
                                        ) : (
                                            <div className="w-full h-full bg-[#B944EA] flex items-center justify-center text-white text-2xl font-bold">
                                                {currentTestimonial.name.charAt(0)}
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="flex-1">
                                    <h4 className="text-lg font-bold text-gray-900">
                                        {currentTestimonial.name}
                                    </h4>
                                    {currentTestimonial.role && (
                                        <p className="text-gray-600">
                                            {currentTestimonial.role}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </CardContent>
                    </Card>

                    {/* Indicator Dots */}
                    <div className="flex justify-center gap-2 mt-8">
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`h-2 rounded-full transition-all duration-300 ${
                                    index === currentIndex
                                        ? "w-8 bg-[#B944EA]"
                                        : "w-2 bg-gray-300 hover:bg-gray-400"
                                }`}
                                aria-label={`Go to testimonial ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}
