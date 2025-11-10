"use client"

import { useParams } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, Calendar, Clock, User, Tag, Facebook, Twitter, Linkedin } from "lucide-react"
import { blogPosts } from "../_components/blogData"

export default function BlogPost() {
    const params = useParams()
    const postId = parseInt(params.id as string)
    
    const post = blogPosts.find(p => p.id === postId)

    if (!post) {
        return (
            <div className="min-h-screen bg-white flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Post Not Found</h1>
                    <p className="text-gray-600 mb-8">The blog post you&apos;re looking for doesn&apos;t exist.</p>
                    <Link href="/blog" className="inline-flex items-center gap-2 px-6 py-3 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300">
                        <ArrowLeft className="h-5 w-5" />
                        Back to Blog
                    </Link>
                </div>
            </div>
        )
    }

    // Format content with proper line breaks and markdown-style formatting
    const formatContent = (content: string) => {
        const paragraphs = content.split('\n\n').filter(p => p.trim())
        
        return paragraphs.map((paragraph, index) => {
            const trimmed = paragraph.trim()
            
            // Check if it's a heading
            if (trimmed.startsWith('## ')) {
                return (
                    <h2 key={index} className="text-3xl font-bold text-gray-900 mt-10 mb-6 first:mt-0">
                        {trimmed.replace('## ', '')}
                    </h2>
                )
            }
            
            // Check if it's a bold text line (starts and ends with **)
            if (trimmed.startsWith('**') && trimmed.endsWith('**') && trimmed.split('**').length === 3) {
                return (
                    <p key={index} className="text-xl text-gray-800 font-semibold mb-6 leading-relaxed">
                        {trimmed.replace(/\*\*/g, '')}
                    </p>
                )
            }
            
            // Check if paragraph contains bold text
            if (trimmed.includes('**')) {
                const parts = trimmed.split(/(\*\*.*?\*\*)/g)
                return (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                        {parts.map((part, i) => {
                            if (part.startsWith('**') && part.endsWith('**')) {
                                return <strong key={i} className="font-semibold text-gray-900">{part.replace(/\*\*/g, '')}</strong>
                            }
                            return <span key={i}>{part}</span>
                        })}
                    </p>
                )
            }
            
            // Check if it's a bullet point
            if (trimmed.startsWith('•')) {
                return (
                    <p key={index} className="text-lg text-gray-700 mb-3 pl-6 leading-relaxed">
                        {trimmed}
                    </p>
                )
            }
            
            // Check if it contains arrow (→)
            if (trimmed.includes('→')) {
                return (
                    <p key={index} className="text-lg text-gray-700 mb-4 pl-6 leading-relaxed">
                        {trimmed}
                    </p>
                )
            }
            
            // Regular paragraph
            if (trimmed) {
                return (
                    <p key={index} className="text-lg text-gray-700 leading-relaxed mb-6">
                        {trimmed}
                    </p>
                )
            }
            
            return null
        }).filter(Boolean)
    }

    // Get related posts (same category, excluding current post)
    const relatedPosts = blogPosts
        .filter(p => p.category === post.category && p.id !== post.id)
        .slice(0, 3)

    return (
        <div className="min-h-screen bg-white py-16 px-4 sm:px-6 lg:px-8 md:py-18 lg:py-20">
            {/* Hero Section */}
            <section className="py-12 bg-gradient-to-br from-gray-50 to-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8"> 
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-gray-900 leading-tight mb-6">
                        {post.title}
                    </h1>
                    
                    <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                        {post.excerpt}
                    </p>

                    {/* Meta Information */}
                    <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8 pb-8 border-b border-gray-200">
                        <div className="flex items-center gap-2">
                            <User className="h-5 w-5 text-[#B944EA]" />
                            <span className="font-medium">{post.author}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar className="h-5 w-5 text-[#B944EA]" />
                            <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <Clock className="h-5 w-5 text-[#B944EA]" />
                            <span>{post.readTime}</span>
                        </div>
                    </div>

                    {/* Featured Image */}
                    <div className="relative mb-12 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="aspect-[16/9]">
                            <Image
                                src={post.image}
                                alt={post.title}
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-12 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                    <article className="prose prose-lg max-w-none">
                        <div className="text-lg text-gray-700 leading-relaxed">
                            {formatContent(post.content)}
                        </div>
                    </article>

                    {/* Tags */}
                    <div className="mt-12 pt-8 border-t border-gray-200">
                        <div className="flex flex-wrap items-center gap-3">
                            <Tag className="h-5 w-5 text-gray-400" />
                            {post.tags.map((tag) => (
                                <Badge key={tag} variant="outline" className="border-gray-200 text-gray-600">
                                    {tag}
                                </Badge>
                            ))}
                        </div>
                    </div>

                    {/* Share Section */}
                    <div className="mt-8 pt-8 border-t border-gray-200">
                        <div className="flex items-center gap-4">
                            <span className="text-gray-600 font-medium">Share this article:</span>
                            <div className="flex gap-3">
                                <a
                                    href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 hover:bg-blue-600 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                                >
                                    <Facebook className="h-5 w-5" />
                                </a>
                                <a
                                    href={`https://twitter.com/intent/tweet?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}&text=${encodeURIComponent(post.title)}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 hover:bg-blue-400 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                                >
                                    <Twitter className="h-5 w-5" />
                                </a>
                                <a
                                    href={`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(typeof window !== 'undefined' ? window.location.href : '')}`}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="w-10 h-10 bg-gray-100 hover:bg-blue-700 rounded-full flex items-center justify-center text-gray-600 hover:text-white transition-all duration-200"
                                >
                                    <Linkedin className="h-5 w-5" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Related Posts */}
            {relatedPosts.length > 0 && (
                <section className="py-16 bg-gradient-to-br from-gray-50 to-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <h2 className="text-3xl font-black text-gray-900 mb-12">Related Articles</h2>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                            {relatedPosts.map((relatedPost) => (
                                <Card key={relatedPost.id} className="group overflow-hidden hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
                                    <div className="relative">
                                        <div className="aspect-[16/10] overflow-hidden">
                                            <Image
                                                src={relatedPost.image}
                                                alt={relatedPost.title}
                                                width={400}
                                                height={250}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        </div>
                                        <div className="absolute top-4 left-4">
                                            <Badge className="bg-[#B944EA] text-white border-0">
                                                {relatedPost.category}
                                            </Badge>
                                        </div>
                                    </div>
                                    <CardContent className="p-6">
                                        <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-[#B944EA] transition-colors duration-300 line-clamp-2">
                                            {relatedPost.title}
                                        </h3>
                                        <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                            {relatedPost.excerpt}
                                        </p>
                                        <Link 
                                            href={`/blog/${relatedPost.id}`} 
                                            className="inline-flex items-center gap-1 text-[#B944EA] hover:text-[#A03BD6] font-semibold text-sm group-hover:gap-2 transition-all duration-300"
                                        >
                                            Read More
                                            <ArrowLeft className="h-4 w-4 rotate-180" />
                                        </Link>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="py-16 bg-white">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Ready to Bring Your Ideas to Life?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Let&apos;s discuss how we can help transform your vision into reality.
                    </p>
                    <Link 
                        href="/contact-us" 
                        className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
                    >
                        Get in Touch
                        <ArrowLeft className="h-5 w-5 rotate-180" />
                    </Link>
                </div>
            </section>
        </div>
    )
}

