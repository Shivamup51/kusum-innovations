import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div className="sm:pt-20 md:pt-24 pt-20 lg:pt-0">
            {children}
            <Footer />
        </div>
        </>
        )
}