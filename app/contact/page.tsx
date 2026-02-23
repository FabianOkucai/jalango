import Link from "next/link";
import SocialLinks from "@/components/SocialLinks";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center bg-white overflow-hidden p-6">
                <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20">
                    <Link href="/" className="text-2xl font-black tracking-tighter serif">
                        PHELIX
                    </Link>
                    <Link
                        href="/"
                        className="px-8 py-3 border-2 border-black/10 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all text-black font-bold"
                    >
                        Back Home
                    </Link>
                </nav>

                <div className="relative z-10 w-full max-w-5xl text-center">
                    {/* Wise Saying */}
                    <div className="animate-reveal mb-16">
                        <p
                            className="text-3xl md:text-5xl lg:text-5xl text-black/90 leading-tight font-serif italic"
                            style={{ fontFamily: "'Playfair Display', serif" }}
                        >
                            &quot;The only limit to your realization of tomorrow will be your doubts of today.&quot;
                        </p>
                    </div>

                    {/* Social Handles */}
                    <SocialLinks />
                </div>
            </section>
        </main>
    );
}
