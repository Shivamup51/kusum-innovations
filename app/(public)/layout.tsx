import Navbar from "@/components/ui/navbar";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
    return (
        <>
            <Navbar />
            <div>
            {children}
        </div>
        </>
        )
}