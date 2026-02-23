import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Hero Section */}
      <section className="relative h-screen flex flex-col justify-center items-center bg-white overflow-hidden">
        {/* Navigation */}
        <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-end items-center z-20">
          <a href="/contact" className="px-8 py-3 border-2 border-black/10 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all text-black font-bold">
            Get in Touch
          </a>
        </nav>

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
          <div className="text-center animate-reveal max-w-4xl" style={{ animationDelay: '0.2s' }}>
            <p className="text-xl md:text-3xl lg:text-5xl text-black/90 leading-tight font-serif italic px-4" style={{ fontFamily: "'Playfair Display', serif" }}>
              &quot;Consistency is key to greatness.&quot;
            </p>
          </div>
        </div>
      </section>

      {/* The Journey - ZigZag Layout */}
      <section id="journey" className="bg-white">
        {/* Humble Beginnings */}
        <div className="py-16 md:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">The Beginning</span>
              <p className="text-muted leading-relaxed text-lg">
                Before the fame, Felix walked the shores of Lake Victoria as a young fisherman, learning the values of hard work and resilience that would define his entire career.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/leader_three.png" alt="Early Life" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Entertainment */}
        <div className="py-16 md:py-24 px-6 md:px-24 bg-secondary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/logo_two.png" alt="Entertainment Career" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">The Breakthrough</span>
              <p className="text-muted leading-relaxed text-lg">
                He rose from a theatre actor to a national icon, dominating TV and Radio for two decades, becoming one of Kenya&apos;s most influential and beloved voices.
              </p>
            </div>
          </div>
        </div>

        {/* Political Mentorship */}
        <div className="py-16 md:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Political Mentorship</span>
              <p className="text-muted leading-relaxed text-lg">
                His journey was inspired by significant mentorship from the former Prime Minister Raila Odinga, a key chapter that shaped his early political perspective and leadership.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_raila.png" alt="With Raila" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        {/* Politics - Ruto Section 1 */}
        <div className="py-16 md:py-24 px-6 md:px-24 bg-secondary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_the_president.png" alt="MP with Ruto" fill className="object-cover object-top" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Servant Leadership</span>
              <p className="text-muted leading-relaxed text-lg">
                Transitioning to politics as the MP for Lang&apos;ata, he has closely collaborated with President William Ruto to drive national development and legislative excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Politics - Ruto Section 2 */}
        <div className="py-16 md:py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Strategic Partnership</span>
              <p className="text-muted leading-relaxed text-lg">
                His leadership bridges the gap between community needs and national policy, working hand-in-hand with the executive to deliver transformational changes.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_the_president_two.png" alt="Working for Langata" fill className="object-cover object-top" />
            </div>
          </div>
        </div>

        {/* Hobbies */}
        <div className="py-16 md:py-24 px-6 md:px-24 bg-secondary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 md:gap-24 items-center">
            <div className="relative h-[300px] md:h-[500px] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/hobbies.png" alt="Hobbies" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Beyond the Podium</span>
              <p className="text-muted leading-relaxed text-lg">
                Off-duty, Phelix finds joy in diverse interests and hobbies that provide the balance necessary to sustain his high-energy public service and career.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Section - Transforming Lang'ata */}
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
            {/* Women Empowerment */}
            <div className="flex flex-col group">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 shadow-2xl border border-black/5">
                <Image
                  src="/assets/images/langata.png"
                  alt="Women Empowerment"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="px-2">
                <span className="text-accent text-xs tracking-[0.3em] uppercase mb-4 block font-bold">Women Empowerment</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 serif text-black">Uplifting Our Mothers</h3>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  Empowering the backbone of Lang&apos;ata. Through specialized grants and table banking initiatives, we are supporting women-led enterprises to ensure economic independence for every household.
                </p>
              </div>
            </div>

            {/* Education Initiatives */}
            <div className="flex flex-col group mt-8 md:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 shadow-2xl border border-black/5">
                <Image
                  src="/assets/images/langata_three.png"
                  alt="Education Initiatives"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="px-2">
                <span className="text-accent text-xs tracking-[0.3em] uppercase mb-4 block font-bold">Education</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 serif text-black">World-Class Learning</h3>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  Upgrading schools like Ngong&apos; Forest Booth Girls High School. We are ensuring every student has access to modern, safe, and inspiring environments to foster the next generation of leaders.
                </p>
              </div>
            </div>

            {/* Community Welfare */}
            <div className="flex flex-col group mt-8 md:mt-0">
              <div className="relative w-full aspect-[4/5] rounded-[2rem] md:rounded-[2.5rem] overflow-hidden mb-8 md:mb-10 shadow-2xl border border-black/5">
                <Image
                  src="/assets/images/langata_five.png"
                  alt="Community Welfare"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              </div>
              <div className="px-2">
                <span className="text-accent text-xs tracking-[0.3em] uppercase mb-4 block font-bold">Community</span>
                <h3 className="text-2xl md:text-3xl font-bold mb-4 serif text-black">Health & Social Support</h3>
                <p className="text-muted leading-relaxed text-base md:text-lg">
                  Beyond bricks and mortar, we are investing in our people through massive food programs feeding over 10,000 children daily and conducting regular free medical camps across all wards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-center">
          <div className="relative h-px bg-black/10 w-[90%] md:w-11/12">
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-accent/40 blur-[0.5px]"></div>
            <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-accent"></div>
          </div>
        </div>
        <div className="text-center px-6">
          <p className="text-muted text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-black/40">&copy; 2024 Felix Odiwour. All Rights Reserved.</p>
        </div>
      </footer>
    </main >


  );
}
