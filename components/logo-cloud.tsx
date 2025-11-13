import { InfiniteSlider } from '@/components/ui/infinite-slider'
import { ProgressiveBlur } from '@/components/ui/progressive-blur'

const logos = [
    { src: '/logos/Clientele Logos/Animall.png', alt: 'Animall Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/BDA group-01.png', alt: 'BDA Group Logo', width: 320, height: 200 },
    { src: '/logos/Clientele Logos/dorling-kindersley-seeklogo.png', alt: 'Dorling Kindersley Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/GHRD.webp', alt: 'GHRD Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/growtrees-01.png', alt: 'Growtrees Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Healofy.webp', alt: 'Healofy Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/iihd-01.png', alt: 'IIHD Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Isoft Logo-01.png', alt: 'Isoft Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/kisan agri-01.png', alt: 'Kisan Agri Logo', width: 320, height: 160 },
    { src: '/logos/Clientele Logos/Morepen-01.png', alt: 'Morepen Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/niva-bupa-health-insurance-logo-hd.png', alt: 'Niva Bupa Health Insurance Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Nostinos-01.png', alt: 'Nostinos Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Springer Nature.png', alt: 'Springer Nature Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Sunglow Logo.PNG', alt: 'Sunglow Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Supreme.png', alt: 'Supreme Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Uncle Delivery Logo-01.png', alt: 'Uncle Delivery Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Vivo.png', alt: 'Vivo Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Wiley.png', alt: 'Wiley Logo', width: 160, height: 80 },
    { src: '/logos/Clientele Logos/Wolters Kluwer.png', alt: 'Wolters Kluwer Logo', width: 160, height: 80 },
]

export default function LogoCloud() {
    return (
        <section className="bg-background overflow-hidden py-16">
            <div className="group relative m-auto max-w-7xl px-6">
                <div className="flex flex-col items-center md:flex-row">
                    <div className="md:max-w-44 md:border-r md:pr-6">
                        <p className="text-end text-xl font-bold">Trusted by</p>
                    </div>
                    <div className="relative py-6 md:w-[calc(100%-11rem)]">
                        <InfiniteSlider
                            speedOnHover={20}
                            speed={40}
                            gap={112}>
                            {logos.map((logo, index) => (
                                <div key={index} className="flex h-20 w-40 items-center justify-center">
                                    <img
                                        className="mx-auto h-20 w-40 object-contain dark:invert"
                                        src={logo.src}
                                        alt={logo.alt}
                                        width={logo.width}
                                        height={logo.height}
                                    />
                                </div>
                            ))}
                        </InfiniteSlider>

                        <div className="bg-linear-to-r from-background absolute inset-y-0 left-0 w-20"></div>
                        <div className="bg-linear-to-l from-background absolute inset-y-0 right-0 w-20"></div>
                        <ProgressiveBlur
                            className="pointer-events-none absolute left-0 top-0 h-full w-20"
                            direction="left"
                            blurIntensity={1}
                        />
                        <ProgressiveBlur
                            className="pointer-events-none absolute right-0 top-0 h-full w-20"
                            direction="right"
                            blurIntensity={1}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
