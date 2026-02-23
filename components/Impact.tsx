import Image from "next/image";

const impactItems = [
    {
        title: "Uplifting Our Mothers",
        label: "Women Empowerment",
        description: "Empowering the backbone of Lang'ata. Through specialized grants and table banking initiatives, we are supporting women-led enterprises to ensure economic independence for every household.",
        image: "/assets/images/langata.png",
    },
    {
        title: "World-Class Learning",
        label: "Education",
        description: "Upgrading schools like Ngong' Forest Booth Girls High School. We are ensuring every student has access to modern, safe, and inspiring environments to foster the next generation of leaders.",
        image: "/assets/images/langata_three.png",
    },
    {
        title: "Health & Social Support",
        label: "Community",
        description: "Beyond bricks and mortar, we are investing in our people through massive food programs feeding over 10,000 children daily and conducting regular free medical camps across all wards.",
        image: "/assets/images/langata_five.png",
    },
];

export default function Impact() {
    return (
        <section id="impact" className="py-24 md:py-32 bg-white px-6 md:px-24 border-t border-black/5">
            <div className="max-w-7xl mx-auto">
                <div className="text-center mb-16 md:mb-24">
                    <span className="text-accent text-sm tracking-[0.4em] uppercase mb-4 block font-bold">Constituency Impact</span>
                    <h2 className="text-4xl md:text-8xl font-black serif text-black tracking-tighter mb-6">Transforming Lang&apos;ata</h2>
                    <p className="text-muted text-lg md:text-xl max-w-2xl mx-auto italic font-serif leading-relaxed px-4">
                        &quot;My commitment to Lang&apos;ata is driven by a vision of shared prosperity and dignity for every resident.&quot;
                    </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12 md:gap-16">
                    {impactItems.map((item, index) => (
                        <div key={index} className="flex flex-col group">
                            <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 shadow-2xl border border-black/5">
                                <Image
                                    src={item.image}
                                    alt={item.label}
                                    fill
                                    className="object-cover group-hover:scale-105 transition-transform duration-1000"
                                />
                            </div>
                            <div className="px-2">
                                <span className="text-accent text-xs tracking-[0.3em] uppercase mb-4 block font-bold">{item.label}</span>
                                <h3 className="text-2xl md:text-3xl font-bold mb-4 serif text-black">{item.title}</h3>
                                <p className="text-muted leading-relaxed text-base md:text-lg">
                                    {item.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
