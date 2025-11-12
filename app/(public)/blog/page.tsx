"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Clock, User, ChevronRight } from "lucide-react"
import { blogPosts } from "./_components/blogData"

export default function Blog() {

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative py-24 bg-gradient-to-br from-gray-50 via-white to-gray-100 overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute inset-0 opacity-5">
                    <div className="absolute inset-0" style={{
                        backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                    }}></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full blur-xl"></div>
                <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-[#00B7FF]/10 to-[#B944EA]/10 rounded-full blur-xl"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">Insights & Inspiration</span>
                        </h1>
                        <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-light max-w-3xl mx-auto">
                            Discover the latest trends, insights, and stories from the world of <span className="font-semibold text-[#B944EA]">digital innovation</span>.
                        </p>
                    </div>
                </div>
            </section>

            {/* Blog Posts Section */}
            <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {blogPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="block">
                                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer h-full p-0">
                                    <div className="relative m-0 p-0">
                                        <div className="aspect-[16/10] overflow-hidden m-0 p-0">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 m-0 p-0"
                                            />
                                        </div>
                                       
                                    </div>
                                    <CardContent className="p-6">
                                        <div className="flex items-center gap-4 text-sm text-gray-500 mb-3">
                                            <div className="flex items-center gap-1">
                                                <Calendar className="h-4 w-4" />
                                                {new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
                                            </div>
                                            <div className="flex items-center gap-1">
                                                <Clock className="h-4 w-4" />
                                                {post.readTime}
                                            </div>
                                        </div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#B944EA] transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                            {post.excerpt}
                                        </p>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center gap-2">
                                                <User className="h-4 w-4 text-gray-400" />
                                                <span className="text-sm text-gray-600">{post.author}</span>
                                            </div>
                                            <div className="inline-flex items-center gap-1 text-[#B944EA] group-hover:text-[#A03BD6] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                                Read More
                                                <ChevronRight className="h-4 w-4" />
                                            </div>
                                        </div>
                                    </CardContent>
                                </Card>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
