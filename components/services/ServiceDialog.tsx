"use client"

import Image from "next/image"

import { Dialog, DialogContent, DialogTitle } from "@/components/ui/dialog"

interface ServiceItem {
    icon: string
    title: string
    description: string
    image: string
}

interface ServiceDialogProps {
    isOpen: boolean
    onClose: () => void
    service: ServiceItem | null
}

export default function ServiceDialog({ isOpen, onClose, service }: ServiceDialogProps) {
    if (!service) return null

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="max-w-6xl max-h-[95vh] overflow-y-auto p-4">
                <DialogTitle className="sr-only">{service.title}</DialogTitle>
                <div className="space-y-6">
                    {/* Icon and Title */}
                    <div className="text-4xl flex items-center gap-3">
                        <span>{service.icon}</span>
                        <h3 className="text-3xl font-bold text-gray-900">
                            {service.title}
                        </h3>
                    </div>
                    
                    {/* Description */}
                    <p className="text-lg text-gray-600 leading-relaxed">
                        {service.description}
                    </p>
                    
                    {/* Image */}
                    <div className="relative w-full">
                        <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                            <Image 
                                src={service.image} 
                                alt={service.title}
                                width={1000}
                                height={600}
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    )
}

