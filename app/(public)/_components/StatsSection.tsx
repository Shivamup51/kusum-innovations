"use client"

const stats = [
    {
        number: "500+",
        label: "Projects Completed",
        description: "Successfully delivered digital solutions"
    },
    {
        number: "300+",
        label: "Happy Clients",
        description: "Trusted by businesses worldwide"
    },
    {
        number: "9+",
        label: "Years of Experience",
        description: "Delivering excellence since 2016"
    },
    {
        number: "20+",
        label: "Team Members",
        description: "Expert dedicated to your success"
    }
]

export default function StatsSection() {
    return (
        <section className="py-24 bg-gradient-to-br from-[#B944EA]/10 via-transparent to-[#00B7FF]/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 mb-4">
                        A Legacy of Excellence, Measured in Impact
                    </h2>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Each milestone reflects our commitment to creativity, innovation, and lasting partnerships that drive meaningful digital success.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="text-5xl md:text-6xl font-black bg-gradient-to-r from-[#B944EA] to-[#00B7FF] bg-clip-text text-transparent mb-2">
                                {stat.number}
                            </div>
                            <div className="text-lg font-bold text-gray-900 mb-1">
                                {stat.label}
                            </div>
                            <div className="text-sm text-gray-600">
                                {stat.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}

