import Image from "next/image";

const journeySteps = [
    {
        title: "The Beginning",
        description: "Before the fame, Felix walked the shores of Lake Victoria as a young fisherman, learning the values of hard work and resilience that would define his entire career.",
        image: "/assets/images/leader_three.png",
        alt: "Early Life",
        label: "Humble Beginnings",
        reverse: false,
        bg: "bg-white",
    },
    {
        title: "The Breakthrough",
        description: "He rose from a theatre actor to a national icon, dominating TV and Radio for two decades, becoming one of Kenya's most influential and beloved voices.",
        image: "/assets/images/logo_two.png",
        alt: "Entertainment Career",
        label: "Entertainment",
        reverse: true,
        bg: "bg-secondary",
    },
    {
        title: "Political Mentorship",
        description: "His journey was inspired by significant mentorship from the former Prime Minister Raila Odinga, a key chapter that shaped his early political perspective and leadership.",
        image: "/assets/images/with_raila.png",
        alt: "With Raila",
        label: "Political Mentorship",
        reverse: false,
        bg: "bg-white",
        objectTop: true,
    },
    {
        title: "Servant Leadership",
        description: "Transitioning to politics as the MP for Lang'ata, he has closely collaborated with President William Ruto to drive national development and legislative excellence.",
        image: "/assets/images/with_the_president.png",
        alt: "MP with Ruto",
        label: "Politics - Ruto Section 1",
        reverse: true,
        bg: "bg-secondary",
        objectTop: true,
    },
    {
        title: "Strategic Partnership",
        description: "His leadership bridges the gap between community needs and national policy, working hand-in-hand with the executive to deliver transformational changes.",
        image: "/assets/images/with_the_president_two.png",
        alt: "Working for Langata",
        label: "Politics - Ruto Section 2",
        reverse: false,
        bg: "bg-white",
        objectTop: true,
    },
    {
        title: "Beyond the Podium",
        description: "Off-duty, Phelix finds joy in diverse interests and hobbies that provide the balance necessary to sustain his high-energy public service and career.",
        image: "/assets/images/hobbies.png",
        alt: "Hobbies",
        label: "Hobbies",
        reverse: true,
        bg: "bg-secondary",
    },
];

export default function Journey() {
    return (
        <section id="journey" className="bg-white">
            {journeySteps.map((step, index) => (
                <div key={index} className={`py-16 md:py-24 px-6 md:px-24 ${step.bg}`}>
                    <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
                        <div className={`${step.reverse ? "md:order-2" : "md:order-1"} order-2`}>
                            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">{step.title}</span>
                            <p className="text-muted leading-relaxed text-lg">
                                {step.description}
                            </p>
                        </div>
                        <div className={`${step.reverse ? "md:order-1" : "md:order-2"} order-1 relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl`}>
                            <Image
                                src={step.image}
                                alt={step.alt}
                                fill
                                className={`object-cover ${step.objectTop ? "object-top" : ""}`}
                            />
                        </div>
                    </div>
                </div>
            ))}
        </section>
    );
}
