import { Lightbulb, Globe, Zap, Code, Monitor } from "lucide-react"

export const websiteTypes = [
    {
        title: "Custom Business Websites",
        description: "We design and develop fully customized websites aligned with your brand, audience, and goals. From corporate websites to personal portfolios, our solutions focus on clean design, intuitive navigation, and scalability. Every website is built to establish credibility, engage users, and deliver measurable business impact—ensuring your digital presence becomes a powerful growth engine.",
        icon: "🌐",
        image: "/Website Design/Custom.jpg"
    },
    {
        title: "Ecommerce Websites",
        description: "Our ecommerce development services empower you to sell smarter and scale faster. From Shopify and WooCommerce to Magento and custom platforms, we create user-friendly shopping experiences with secure payment gateways, catalogue management, and seamless checkout. Designed for performance and conversions, our ecommerce websites boost sales, strengthen customer loyalty, and deliver exceptional ROI across devices.",
        icon: "🛒",
        image: "/Website Design/ecommerce.jpg"
    },
    {
        title: "WordPress & CMS Development",
        description: "Manage your website with ease through user-friendly content management systems. As a trusted WordPress and CMS development company, we deliver responsive, SEO-friendly websites optimized for speed and functionality. From blogs to corporate portals, our CMS solutions allow easy updates, scalability, and long-term flexibility—empowering businesses to stay agile in a competitive digital landscape.",
        icon: "📝",
        image: "/Website Design/CMS.jpg"
    },
    {
        title: "Web Portals & Dashboards",
        description: "We build powerful web portals and dashboards tailored to industries like education, finance, retail, and healthcare. With secure logins, advanced integrations, and interactive data visualization, our portals simplify workflows and improve collaboration. Each solution is designed to deliver seamless user experiences while enabling organizations to make informed, data-driven decisions with confidence and efficiency.",
        icon: "📊",
        image: "/Website Design/Web Portals.jpg"
    },
    {
        title: "UI/UX & Responsive Design",
        description: "Our UI/UX design services ensure your website looks stunning and functions flawlessly across devices. From wireframes and prototypes to final interfaces, we focus on intuitive navigation and engaging layouts. Every design is mobile-first, responsive, and conversion-driven—enhancing user satisfaction, boosting engagement, and turning casual visitors into loyal customers through impactful digital experiences.",
        icon: "🎨",
        image: "/Website Design/UI & UX.jpg"
    },
    {
        title: "Website Maintenance & Optimization",
        description: "We ensure your website stays secure, fast, and up to date with our maintenance and optimization services. From fixing bugs and updating plugins to enhancing performance and SEO readiness, we handle it all. Our proactive monitoring ensures websites evolve with user needs and industry standards—delivering long-term stability, growth, and consistent online performance.",
        icon: "⚡",
        image: "/Website Design/Website Maintenance.jpg"
    }
]

export const faqs = [
    {
        question: "How much does website development cost?",
        answer: "The cost of website development varies based on the project's complexity, features, and design requirements. We offer flexible pricing models and can provide a detailed quote after understanding your specific needs."
    },
    {
        question: "What is the typical timeline for completing a website?",
        answer: "A project's timeline is determined by its complexity and overall scope. A basic website might take a few weeks, while a complex e-commerce platform could take several months. We'll provide a detailed timeline in your project proposal."
    },
    {
        question: "Will my website be mobile-friendly and SEO-optimized?",
        answer: "Yes, all websites we develop are fully responsive, ensuring a seamless experience across devices. Basic on-page SEO optimization is included to help improve your website's visibility in search engines."
    },
    {
        question: "Will I be able to manage and update the website on my own after launch?",
        answer: "Absolutely. We build websites on user-friendly platforms that allow you to make content updates with ease. We also provide training or documentation to help you manage your site independently."
    },
    {
        question: "Do you provide ongoing support and maintenance?",
        answer: "Yes, we offer post-launch support to address any issues and provide regular maintenance plans to ensure your website remains secure, updated, and running smoothly."
    },
    {
        question: "What specific web design and development services do you offer?",
        answer: "We provide a comprehensive suite of services, including custom website design, e-commerce development, mobile app development, UI/UX design, website maintenance, and digital marketing integration. We specialize in creating responsive and user-friendly digital experiences."
    },
    {
        question: "How do you ensure projects stay on schedule?",
        answer: "We use project management tools and methodologies to track progress, communicate effectively, and ensure timely delivery. We keep you in the loop with regular progress updates and key milestone achievements."
    }
]

export const processSteps = [
    {
        step: "01",
        title: "Discovery & Planning",
        description: "We start by understanding your business, goals, and audience. Through requirement gathering, competitor analysis, and user research, we lay the foundation for success. This stage ensures the website strategy is aligned with your objectives, giving clarity on design direction, technology stack, and features for maximum business impact.",
        icon: Lightbulb,
        color: "from-blue-500 to-purple-600",
        bgColor: "bg-blue-50",
        features: [
            "Requirement Gathering & Research",
            "Competitor Analysis",
            "Information Architecture"
        ]
    },
    {
        step: "02", 
        title: "Design & Prototyping",
        description: "Our creative team translates ideas into engaging visuals. From mood boards to interactive prototypes, we design websites that are modern, intuitive, and responsive. Every layout is user-centred, ensuring navigation flows seamlessly across devices while reflecting your brand identity with consistency and creativity.",
        icon: Globe,
        color: "from-purple-500 to-pink-600",
        bgColor: "bg-purple-50",
        features: [
            "Wireframes & Mock-ups",
            "Interactive Prototypes",
            "UI/UX Storyboarding"
        ]
    },
    {
        step: "03",
        title: "Development & Integration", 
        description: "Here's where strategy meets execution. Using cutting-edge technologies, we build scalable, secure, and high-performance websites. From CMS and ecommerce to complex web applications, every site is coded for speed, responsiveness, and functionality—integrating APIs, payment gateways, and tools to meet your business needs effectively.",
        icon: Code,
        color: "from-pink-500 to-red-600",
        bgColor: "bg-pink-50",
        features: [
            "Full-Stack Development",
            "CMS & Ecommerce Setup",
            "API & Third-Party Integrations"
        ]
    },
    {
        step: "04",
        title: "Testing & Launch", 
        description: "Before going live, we perform rigorous testing across devices, browsers, and environments. From functionality and speed to SEO checks and security audits, we ensure your website is flawless. Once approved, we deploy with precision, delivering a fully optimized, secure, and launch-ready website for immediate impact.",
        icon: Monitor,
        color: "from-red-500 to-orange-600",
        bgColor: "bg-red-50",
        features: [
            "Functionality Testing",
            "SEO & Performance Checks",
            "Secure Deployment"
        ]
    },
    {
        step: "05",
        title: "Support & Growth", 
        description: "We continue to support your website with regular updates, performance monitoring, and optimization. Our maintenance ensures websites remain secure, fast, and future-ready. With data-driven insights and scalable improvements, we keep your digital presence evolving to meet changing audience expectations and business growth opportunities.",
        icon: Zap,
        color: "from-orange-500 to-yellow-600",
        bgColor: "bg-orange-50",
        features: [
            "Maintenance & Monitoring",
            "Performance Optimization",
            "Continuous Improvements"
        ]
    }
]

export const whyChooseUs = [
    "9+ years of industry expertise",
    "Dedicated in-house team of designers & developers",
    "SEO-friendly and scalable websites",
    "Transparent communication & on-time delivery",
    "Affordable packages for startups & enterprises",
    "Experience across ecommerce, corporate, and custom solutions",
    "Long-term support beyond launch",
    "Cutting-edge technology stack for future-ready websites"
]
