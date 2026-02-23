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
            <div className="relative w-full md:w-3/4 lg:w-2/3 h-[250px] sm:h-[350px] md:h-[400px] lg:h-[450px] rounded-[2rem] overflow-hidden shadow-2xl border-4 border-black/5">
              <Image
                src="/assets/images/leader_two.png"
                alt="Phelix Odiwour Jalang'o"
                fill
                className="object-cover object-top"
                priority
              />
            </div>
          </div>

          {/* Wise Saying (Bottom) */}
          <div className="text-center animate-reveal max-w-4xl" style={{ animationDelay: '0.2s' }}>
            <p className="text-2xl md:text-4xl lg:text-5xl text-black/90 leading-tight font-serif italic" style={{ fontFamily: "'Playfair Display', serif" }}>
              &quot;Consistency is key to greatness.&quot;
            </p>
          </div>
        </div>
      </section>



      {/* The Journey - ZigZag Layout */}
      <section id="journey" className="bg-white">
        {/* Humble Beginnings */}
        <div className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">The Beginning</span>
              <p className="text-muted leading-relaxed text-lg">
                Before the fame, Felix walked the shores of Lake Victoria as a young fisherman, learning the values of hard work and resilience that would define his entire career.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/leader_three.png" alt="Early Life" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Entertainment */}
        <div className="py-24 px-6 md:px-24 bg-secondary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/leader_six.png" alt="Entertainment Career" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">The Breakthrough</span>
              <p className="text-muted leading-relaxed text-lg">
                He rose from a theatre actor to a national icon, dominating TV and Radio for two decades, becoming one of Kenya&apos;s most influential and beloved voices.
              </p>
            </div>
          </div>
        </div>

        {/* Politics - Ruto Section 1 */}
        <div className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Servant Leadership</span>
              <p className="text-muted leading-relaxed text-lg">
                Transitioning to politics as the Member of Parliament for Lang&apos;ata, he has closely collaborated with President William Ruto to drive national development and legislative excellence.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_the_president.png" alt="MP with Ruto" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Politics - Ruto Section 2 */}
        <div className="py-24 px-6 md:px-24 bg-secondary">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_the_president_two.png" alt="Working for Langata" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Strategic Partnership</span>
              <p className="text-muted leading-relaxed text-lg">
                His leadership bridge the gap between community needs and national policy, working hand-in-hand with the executive to deliver transformational changes for his constituents.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-32 bg-background px-6 md:px-24">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Moments in Time</span>
            <h2 className="text-5xl md:text-7xl font-bold serif">A Life in Pictures</h2>
          </div>
        </div>

        <div className="columns-1 md:columns-3 gap-4 space-y-4">
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/with_raila.png" alt="With Raila" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/hobbies.png" alt="Hobbies" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/leader_six.png" alt="Speaking" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[350px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/with_the_president_two.png" alt="President meeting" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[450px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/with_collegues.png" alt="Colleagues" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[300px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/leader_two.png" alt="With crowd" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[350px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/with_raila_wife_ida.png" alt="With Ida Odinga" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
          <div className="relative h-[400px] rounded-2xl overflow-hidden group">
            <Image src="/assets/images/logo_two.png" alt="Portrait" fill className="object-cover hover:scale-105 transition-all duration-500" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="py-24 border-t border-black/5 text-center bg-secondary">
        <div className="flex justify-center gap-12 mb-16">
          <a href="#" className="text-sm tracking-widest uppercase font-bold hover:text-accent transition-all">Twitter</a>
          <a href="#" className="text-sm tracking-widest uppercase font-bold hover:text-accent transition-all">Instagram</a>
          <a href="#" className="text-sm tracking-widest uppercase font-bold hover:text-accent transition-all">YouTube</a>
        </div>
        <p className="text-muted text-sm tracking-widest uppercase">&copy; 2024 Felix Odiwour. All Rights Reserved.</p>
      </footer>
    </main >
  );
}
