"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

import {
  videoTypes,
  faqs,
  processSteps,
  whyChooseUs,
} from "./_components/data";
import Link from "next/link";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Play, ArrowRight, CheckCircle } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
export default function VideoProduction() {
  const [activeService, setActiveService] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveService((prev) => (prev + 1) % videoTypes.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <section className="relative min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 flex items-center overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        {/* Floating Elements */}
        <div className="absolute top-20 right-20 w-32 h-32 bg-gradient-to-r from-[#B944EA]/10 to-[#00B7FF]/10 rounded-full blur-xl"></div>
        <div className="absolute bottom-20 left-20 w-24 h-24 bg-gradient-to-r from-[#00B7FF]/10 to-[#B944EA]/10 rounded-full blur-xl"></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              {/* Main Headline */}
              <div>
                <h1 className="text-6xl md:text-7xl font-black text-gray-900 leading-[0.9] tracking-tight mb-6">
                  Stories That
                  <span className="block bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                    Move Mountains
                  </span>
                </h1>
              </div>

              {/* Subtitle */}
              <div className="space-y-4">
                <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-light">
                  We craft{" "}
                  <span className="font-semibold text-[#B944EA]">
                    cinematic experiences
                  </span>{" "}
                  that captivate, inspire, and drive results.
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  From concept to final cut, we bring your vision to life with
                  unmatched creativity and precision.
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact-us"
                  className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
                >
                  <Play className="h-5 w-5" />
                  Start Your Project
                  <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="relative">
                {/* Main Image */}
                <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                  <Image
                    src="/VIDEO PRODUCTION/hero section.jpg"
                    alt="Video Production Team"
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Single Image */}
            <div className="relative">
              <div className="aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/VIDEO PRODUCTION/introduction.jpg"
                  alt="Our Story - Video Production Team"
                  width={600}
                  height={750}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                />
              </div>
            </div>

            {/* Content */}
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8 leading-tight">
                Our Story,
                <span className="bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent">
                  {" "}
                  Our Lens
                </span>
              </h2>
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  Welcome to{" "}
                  <span className="font-semibold text-[#B944EA]">
                    Kusum Innovations
                  </span>{" "}
                  – a leading video production company in Delhi-NCR that
                  transforms real moments into unforgettable visual stories. As
                  a full-service live shoot video production agency, we
                  specialize in creating high-quality videos that connect with
                  your audience, build trust, and amplify your brand presence.
                </p>
                <p>
                  From corporate films, product launch videos, brand
                  commercials, event coverage, and testimonial videos to social
                  media ads and promotional campaigns, we handle everything –
                  concept, scripting, shooting, editing, and final delivery –
                  under one roof.
                </p>
                <p>
                  At Kusum Innovations, we combine creative storytelling,
                  cinematic visuals, and advanced production technology to craft
                  videos that do more than just look good – they deliver
                  results. With industry-standard equipment, a skilled crew, and
                  years of experience, we ensure your video stands out in
                  today&apos;s competitive digital space.
                </p>
                <p>
                  When you choose Kusum Innovations, you&apos;re not just hiring
                  a production team – you&apos;re partnering with experts who
                  understand the power of live video content in driving
                  engagement and conversions. Whether it&apos;s a corporate
                  shoot, ad film, or event highlight, we bring your vision to
                  life with clarity, creativity, and impact.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section with Interactive Tabs */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Video Production Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive video solutions tailored to your brand&apos;s unique
              needs and objectives.
            </p>
          </div>

          {/* Service Tabs */}
          <div className="mb-12">
            <div className="flex flex-nowrap lg:flex-wrap overflow-x-auto lg:overflow-x-visible justify-start lg:justify-center gap-4 px-4 lg:px-0 pb-2 service-tabs-scroll">
              {videoTypes.map((service, index) => (
                <button
                  key={index}
                  onClick={() => setActiveService(index)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 ${
                    activeService === index
                      ? "bg-[#B944EA] text-white shadow-lg hover:bg-[#A03BD6]"
                      : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                  }`}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>

          {/* Active Service Display */}
          <Card className="border-0 shadow-none">
            <CardContent className="p-0">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <div className="text-4xl mb-6 flex items-center gap-2">
                    {videoTypes[activeService].icon}
                    <h3 className="text-3xl font-bold text-gray-900">
                      {videoTypes[activeService].title}
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    {videoTypes[activeService].description}
                  </p>
                </div>
                <div className="relative">
                  <div className="aspect-video rounded-3xl overflow-hidden shadow-2xl">
                    <Image
                      src={videoTypes[activeService].image}
                      alt={videoTypes[activeService].title}
                      width={800}
                      height={600}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23B944EA' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
            }}
          ></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Our Process: From Vision to Video
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A streamlined approach that ensures every project delivers
              exceptional results while exceeding expectations.
            </p>
          </div>

          {/* Process Steps */}
          <div className="space-y-24">
            {processSteps.map((step, index) => (
              <div
                key={index}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-16 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                {/* Content */}
                <Card
                  className={`border-0 shadow-lg ${
                    index % 2 === 1 ? "lg:col-start-2" : ""
                  }`}
                >
                  <CardContent className="p-8">
                    <div className="space-y-6">
                      {/* Step Number and Icon */}
                      <div className="flex items-center gap-4 mb-6">
                        <Badge
                          className={`inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-r ${step.color} text-white font-bold text-xl shadow-lg border-0`}
                        >
                          {step.step}
                        </Badge>

                        {/* Title */}
                        <h3 className="text-4xl font-bold text-gray-900 leading-tight">
                          {step.title}
                        </h3>
                      </div>

                      {/* Description */}
                      <p className="text-lg text-gray-600 leading-relaxed">
                        {step.description}
                      </p>

                      {/* Key Features */}
                      <div className="space-y-3">
                        {step.features.map((feature, i) => (
                          <div key={i} className="flex items-center gap-3">
                            <div className="w-2 h-2 bg-[#B944EA] rounded-full"></div>
                            <span className="text-gray-700">{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Image */}
                <div
                  className={`relative ${
                    index % 2 === 1 ? "lg:col-start-1" : ""
                  }`}
                >
                  <div className="relative group">
                    {/* Main Image */}
                    <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                      <Image
                        src={
                          index === 0
                            ? "/VIDEO PRODUCTION/process step 1.jpg"
                            : index === 1
                            ? "/VIDEO PRODUCTION/process step 2.jpg"
                            : "/VIDEO PRODUCTION/process step 3.jpg"
                        }
                        alt={step.title}
                        width={800}
                        height={600}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl font-bold text-gray-900 mb-8">
                Why Partner with Kusum Innovations?
              </h2>
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                At Kusum Innovations, we&apos;re more than just a video
                production company—we&apos;re your creative partner in bringing
                ideas to life.
              </p>
              <div className="space-y-4">
                {whyChooseUs.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-6 w-6 text-[#B944EA] flex-shrink-0 mt-0.5" />
                    <p className="text-gray-700">{item}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl">
                <Image
                  src="/VIDEO PRODUCTION/why choose us.jpg"
                  alt="Our Team"
                  width={800}
                  height={450}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions (FAQs)
            </h2>
            <p className="text-xl text-gray-600">
              Got questions about our video production services? Here are the
              answers you need.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-2xl border border-gray-200 px-6 data-[state=open]:shadow-lg transition-all duration-300"
              >
                <AccordionTrigger className="text-left font-semibold text-gray-900 text-lg hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10"></div>
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-5xl font-bold text-gray-900 mb-8">
            Searching for a Professional Video Production Company in Delhi?
          </h2>
          <p className="text-xl text-gray-600 mb-12 leading-relaxed">
            Let&apos;s bring your vision to life through expertly executed video
            production—from brand films and corporate videos to product
            promos—crafted to captivate and inspire unforgettable stories.
          </p>
          <div className="flex justify-center mb-12">
            <Link
              href="/contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 bg-[#B944EA] hover:bg-[#A03BD6] text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl group"
            >
              Get Free Quote
              <ArrowRight className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
