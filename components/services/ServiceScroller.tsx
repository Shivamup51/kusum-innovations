"use client"

import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react"

interface ServiceItem {
    icon: string
    title: string
    description: string
    image: string
}

interface ServiceScrollerProps {
    services: ServiceItem[]
    onServiceClick: (service: ServiceItem, index: number) => void
}

export default function ServiceScroller({ services, onServiceClick }: ServiceScrollerProps) {
    const scrollContainerRef = useRef<HTMLDivElement>(null)
    const [showLeftArrow, setShowLeftArrow] = useState(false)
    const [showRightArrow, setShowRightArrow] = useState(true)

    useEffect(() => {
        const checkScroll = () => {
            if (scrollContainerRef.current) {
                const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                setShowLeftArrow(scrollLeft > 0)
                setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
            }
        }

        checkScroll()
        window.addEventListener('resize', checkScroll)
        return () => window.removeEventListener('resize', checkScroll)
    }, [])

    const scroll = (direction: 'left' | 'right') => {
        if (scrollContainerRef.current) {
            const scrollAmount = 400
            const currentScroll = scrollContainerRef.current.scrollLeft
            const newScroll = direction === 'left' 
                ? currentScroll - scrollAmount 
                : currentScroll + scrollAmount
            
            scrollContainerRef.current.scrollTo({
                left: newScroll,
                behavior: 'smooth'
            })

            setTimeout(() => {
                if (scrollContainerRef.current) {
                    const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
                    setShowLeftArrow(scrollLeft > 0)
                    setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
                }
            }, 300)
        }
    }

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current
            setShowLeftArrow(scrollLeft > 0)
            setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 10)
        }
    }

    return (
        <div className="relative">
            {/* Left Arrow */}
            {showLeftArrow && (
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B944EA] hover:text-white border border-gray-200"
                    aria-label="Scroll left"
                >
                    <ChevronLeft className="h-6 w-6" />
                </button>
            )}

            {/* Scrollable Container */}
            <div
                ref={scrollContainerRef}
                onScroll={handleScroll}
                className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 px-2 scroll-smooth"
                style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
                {services.map((service, index) => (
                    <button
                        key={index}
                        onClick={() => onServiceClick(service, index)}
                        className="flex-shrink-0 w-[350px] text-left"
                    >
                        <Card className="group h-full hover:shadow-2xl transition-all duration-300 border border-gray-200 shadow-lg cursor-pointer overflow-hidden p-0">
                            <div className="relative h-48 overflow-hidden">
                                <Image
                                    src={service.image}
                                    alt={service.title}
                                    fill
                                    className="object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                            </div>
                            <CardContent className="p-4">
                                <div className="text-3xl mb-2">{service.icon}</div>
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-[#B944EA] transition-colors duration-300">
                                    {service.title}
                                </h3>
                                <p className="text-gray-600 mb-3 leading-relaxed text-sm line-clamp-3">
                                    {service.description}
                                </p>
                                <div className="flex items-center text-[#B944EA] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                    Learn more
                                    <ArrowRight className="ml-1 h-4 w-4" />
                                </div>
                            </CardContent>
                        </Card>
                    </button>
                ))}
            </div>

            {/* Right Arrow */}
            {showRightArrow && (
                <button
                    onClick={() => scroll('right')}
                    className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-lg hover:shadow-xl transition-all duration-300 hover:bg-[#B944EA] hover:text-white border border-gray-200"
                    aria-label="Scroll right"
                >
                    <ChevronRight className="h-6 w-6" />
                </button>
            )}

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </div>
    )
}

