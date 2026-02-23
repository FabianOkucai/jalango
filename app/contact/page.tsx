import Image from "next/image";

export default function Contact() {
    return (
        <main className="min-h-screen bg-white text-black">
            {/* Hero Section */}
            <section className="relative h-screen flex flex-col justify-center items-center bg-white overflow-hidden p-6">
                <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-between items-center z-20">
                    <a href="/" className="text-2xl font-black tracking-tighter serif">PHELIX</a>
                    <a href="/" className="px-8 py-3 border-2 border-black/10 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all text-black font-bold">
                        Back Home
                    </a>
                </nav>

                <div className="relative z-10 w-full max-w-5xl text-center">
                    {/* Wise Saying */}
                    <div className="animate-reveal mb-16">
                        <p className="text-3xl md:text-5xl lg:text-6xl text-black/90 leading-tight font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
                            &quot;Consistency is key to greatness.&quot;
                        </p>
                    </div>

                    {/* Social Handles */}
                    <div className="animate-reveal grid md:grid-cols-3 gap-8" style={{ animationDelay: '0.2s' }}>
                        <a href="#" className="p-8 border border-black/5 rounded-3xl hover:bg-black hover:text-white transition-all group">
                            <span className="text-sm tracking-widest uppercase mb-4 block text-black/40 group-hover:text-white/40">Twitter / X</span>
                            <span className="text-2xl font-bold">@JalasOfficial</span>
                        </a>
                        <a href="#" className="p-8 border border-black/5 rounded-3xl hover:bg-black hover:text-white transition-all group">
                            <span className="text-sm tracking-widest uppercase mb-4 block text-black/40 group-hover:text-white/40">Instagram</span>
                            <span className="text-2xl font-bold">@jalangoo</span>
                        </a>
                        <a href="#" className="p-8 border border-black/5 rounded-3xl hover:bg-black hover:text-white transition-all group">
                            <span className="text-sm tracking-widest uppercase mb-4 block text-black/40 group-hover:text-white/40">YouTube</span>
                            <span className="text-2xl font-bold">Jalang&apos;o TV</span>
                        </a>
                    </div>

                    <div className="mt-20 animate-reveal" style={{ animationDelay: '0.4s' }}>
                        <p className="text-black/40 text-sm tracking-widest uppercase mb-4">Direct Email</p>
                        <a href="mailto:info@jalango.co.ke" className="text-3xl md:text-4xl font-black hover:text-accent transition-colors">info@jalango.co.ke</a>
                    </div>
                </div>
            </section>
        </main>
    );
}
