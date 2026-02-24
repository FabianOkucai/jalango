import Image from "next/image";

export default function Hero() {
    return (
        <section className="relative h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
            <div className="relative z-10 w-full max-w-7xl px-6 flex flex-col items-center">
                {/* Main Portrait (Top) */}
                <div className="w-full flex justify-center mb-8 lg:mb-12">
                    <div className="relative w-full md:w-3/4 lg:w-2/3 h-[300px] sm:h-[400px] md:h-[450px] lg:h-[500px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-black/5">
                        <Image
                            src="/assets/images/langata_two.png"
                            alt="Phelix Odiwour Jalang'o"
                            fill
                            className="object-cover object-top"
                            priority
                        />
                    </div>
                </div>

                {/* Wise Saying (Bottom) */}
                <div className="text-center animate-reveal [animation-delay:0.2s] max-w-4xl">
                    <p className="text-xl md:text-3xl lg:text-5xl text-black/90 leading-tight font-playfair italic px-4">
                        &quot;Consistency is key to greatness.&quot;
                    </p>
                </div>
            </div>
        </section>
    );
}
