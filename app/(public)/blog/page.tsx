"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User, Search, TrendingUp, BookOpen, Tag, ChevronRight } from "lucide-react"
import { blogPosts } from "./_components/blogData"

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const categories = ["All", "Design", "Development", "Marketing", "Business", "Technology"]

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    const featuredPosts = blogPosts.filter(post => post.featured).slice(0, 3)

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
                        <p className="text-lg md:text-xl  text-gray-700 leading-relaxed font-light max-w-3xl mx-auto mb-8">
                            Discover the latest trends, insights, and stories from the world of <span className="font-semibold text-[#B944EA]">digital innovation</span>.
                        </p>
                        
                        {/* Search Bar */}
                        <div className="max-w-2xl mx-auto relative">
                            <div className="relative">
                                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search articles, topics, or tags..."
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-full shadow-lg focus:outline-none focus:ring-2 focus:ring-[#B944EA] focus:border-transparent text-lg"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured Posts Section */}
            <section className="py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-12">
                        <TrendingUp className="h-6 w-6 text-[#B944EA]" />
                        <h2 className="text-3xl font-black text-gray-900">Featured Articles</h2>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {featuredPosts.map((post, index) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="block">
                                <Card className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg cursor-pointer h-full">
                                    <div className="relative">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-[#B944EA] text-white border-0">
                                                {post.category}
                                            </Badge>
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
                                        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-[#B944EA] transition-colors duration-300 line-clamp-2">
                                            {post.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-3">
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

            {/* Categories & All Posts Section */}
            <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center gap-3 mb-8">
                        <BookOpen className="h-6 w-6 text-[#B944EA]" />
                        <h2 className="text-3xl font-black text-gray-900">All Articles</h2>
                    </div>

                    {/* Category Filter */}
                    <div className="flex flex-wrap gap-3 mb-12">
                        {categories.map((category) => (
                            <Button
                                key={category}
                                variant={activeCategory === category ? "default" : "outline"}
                                onClick={() => setActiveCategory(category)}
                                className={`rounded-full transition-all duration-300 ${
                                    activeCategory === category
                                        ? "bg-[#B944EA] hover:bg-[#A03BD6] text-white border-0"
                                        : "bg-white hover:bg-gray-50 text-gray-700 border-gray-200 hover:border-[#B944EA]"
                                }`}
                            >
                                {category}
                            </Button>
                        ))}
                    </div>

                    {/* Posts Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredPosts.map((post) => (
                            <Link key={post.id} href={`/blog/${post.id}`} className="block">
                                <Card className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg cursor-pointer h-full">
                                    <div className="relative">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={post.image}
                                                alt={post.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-[#B944EA] text-white border-0">
                                                {post.category}
                                            </Badge>
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
                                        
                                        {/* Tags */}
                                        <div className="flex flex-wrap gap-2 mb-4">
                                            {post.tags.slice(0, 2).map((tag) => (
                                                <Badge key={tag} variant="outline" className="text-xs border-gray-200 text-gray-600">
                                                    <Tag className="h-3 w-3 mr-1" />
                                                    {tag}
                                                </Badge>
                                            ))}
                                        </div>

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
