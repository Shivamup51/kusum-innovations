"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Calendar, Clock, User, Search, Filter, TrendingUp, BookOpen, Tag, ChevronRight } from "lucide-react"

export default function Blog() {
    const [activeCategory, setActiveCategory] = useState("All")
    const [searchQuery, setSearchQuery] = useState("")

    const categories = ["All", "Design", "Development", "Marketing", "Business", "Technology"]

    const blogPosts = [
        {
            id: 1,
            title: "The Future of Web Design: Trends to Watch in 2024",
            excerpt: "Explore the latest web design trends that are shaping the digital landscape and how they can transform your online presence.",
            content: "Web design is constantly evolving, and 2024 brings exciting new trends that are reshaping how we think about digital experiences...",
            author: "Sarah Johnson",
            date: "2024-01-15",
            readTime: "5 min read",
            category: "Design",
            image: "/blog-img.png",
            featured: true,
            tags: ["Web Design", "UI/UX", "Trends"]
        },
        {
            id: 2,
            title: "Building Scalable Mobile Apps: Best Practices",
            excerpt: "Learn the essential strategies for creating mobile applications that can grow with your business and user base.",
            content: "Mobile app development requires careful planning to ensure your application can handle growth and maintain performance...",
            author: "Mike Chen",
            date: "2024-01-12",
            readTime: "7 min read",
            category: "Development",
            image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=center",
            featured: false,
            tags: ["Mobile", "Development", "Scalability"]
        },
        {
            id: 3,
            title: "Digital Marketing Strategies That Actually Work",
            excerpt: "Discover proven digital marketing techniques that drive real results and help businesses grow in the competitive online space.",
            content: "In today's digital landscape, having a solid marketing strategy is crucial for business success...",
            author: "Emily Rodriguez",
            date: "2024-01-10",
            readTime: "6 min read",
            category: "Marketing",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center",
            featured: true,
            tags: ["Marketing", "Strategy", "Growth"]
        },
        {
            id: 4,
            title: "The Psychology of Color in Brand Design",
            excerpt: "Understanding how colors influence consumer behavior and how to use them effectively in your brand identity.",
            content: "Color psychology plays a crucial role in brand perception and consumer decision-making...",
            author: "David Park",
            date: "2024-01-08",
            readTime: "4 min read",
            category: "Design",
            image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&h=400&fit=crop&crop=center",
            featured: false,
            tags: ["Branding", "Psychology", "Design"]
        },
        {
            id: 5,
            title: "AI and Machine Learning in Modern Web Development",
            excerpt: "How artificial intelligence is revolutionizing web development and what it means for the future of digital experiences.",
            content: "Artificial intelligence is no longer a futuristic concept but a present reality in web development...",
            author: "Alex Thompson",
            date: "2024-01-05",
            readTime: "8 min read",
            category: "Technology",
            image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop&crop=center",
            featured: false,
            tags: ["AI", "Machine Learning", "Web Development"]
        },
        {
            id: 6,
            title: "Building a Successful Startup: Lessons Learned",
            excerpt: "Key insights and practical advice from entrepreneurs who have successfully built and scaled their businesses.",
            content: "Starting a business is challenging, but learning from those who have succeeded can provide valuable insights...",
            author: "Lisa Wang",
            date: "2024-01-03",
            readTime: "9 min read",
            category: "Business",
            image: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=600&h=400&fit=crop&crop=center",
            featured: true,
            tags: ["Startup", "Entrepreneurship", "Business"]
        }
    ]

    const filteredPosts = blogPosts.filter(post => {
        const matchesCategory = activeCategory === "All" || post.category === activeCategory
        const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                            post.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
        return matchesCategory && matchesSearch
    })

    const featuredPosts = blogPosts.filter(post => post.featured)

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
                            <Card key={post.id} className="group overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 shadow-lg">
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
                                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-[#B944EA] hover:text-[#A03BD6] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                            Read More
                                            <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
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
                            <Card key={post.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
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
                                        <Link href={`/blog/${post.id}`} className="inline-flex items-center gap-1 text-[#B944EA] hover:text-[#A03BD6] font-semibold text-sm group-hover:gap-2 transition-all duration-300">
                                            Read More
                                            <ChevronRight className="h-4 w-4" />
                                        </Link>
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>

                    {/* Load More Button */}
                    <div className="text-center mt-12">
                        <Button className="px-8 py-3 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl">
                            Load More Articles
                            <ArrowRight className="h-5 w-5 ml-2" />
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
