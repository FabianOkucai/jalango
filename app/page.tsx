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



      {/* The Story - Fisherman Section */}
      <section id="story" className="py-32 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div className="relative h-[600px] rounded-2xl overflow-hidden group">
            <Image
              src="/assets/images/leader_three.png"
              alt="Jalang'o with the people"
              fill
              className="object-cover group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">01. Humble Beginnings</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 serif">The Shores of <br /> Homa Bay</h2>
            <div className="space-y-6 text-muted leading-relaxed text-lg">
              <p>
                Born in 1983, Felix Odiwour&apos;s early life was a constant struggle against poverty. As a young boy in Homa Bay, he walked the shores of Lake Victoria, not as a tourist, but as a fisherman, helping his parents provide for the family.
              </p>
              <p>
                Despite the hardships, his brilliance shone through. He excelled in his primary education, earning a spot at the prestigious Maseno School. However, financial constraints meant his father couldn&apos;t afford the fees, a moment that could have broken many, but only fueled Felix&apos;s fire.
              </p>
              <p>
                He eventually attended Nyang&apos;oma Boys, but his education didn&apos;t stop there. Years later, as a successful adult, he returned to Daystar University to complete his degree in Community Development, proving that it&apos;s never too late to learn.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Career - ZigZag Layout */}
      <section id="career" className="bg-secondary border-y border-black/5">
        {/* TV Legend */}
        <div className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Stage & Airwaves I</span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 serif text-black">TV Legend</h3>
              <p className="text-muted leading-relaxed text-lg">
                His breakthrough as &apos;Jalang&apos;o&apos; on Citizen TV&apos;s Papa Shirandula made him a household name. He brought laughter to millions, using humor to navigate the complexities of Kenyan life.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/with_collegues.png" alt="TV Career" fill className="object-cover" />
            </div>
          </div>
        </div>

        {/* Radio King */}
        <div className="py-24 px-6 md:px-24 bg-white">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/leader_six.png" alt="Radio Career" fill className="object-cover" />
            </div>
            <div>
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Stage & Airwaves II</span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 serif text-black">Radio King</h3>
              <p className="text-muted leading-relaxed text-lg">
                From Radio Maisha to Kiss 100, Hot 96, and Milele FM, he dominated the morning airwaves. His voice became the soundtrack of the Kenyan morning, blending wit with wisdom.
              </p>
            </div>
          </div>
        </div>

        {/* Digital Pioneer */}
        <div className="py-24 px-6 md:px-24">
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-24 items-center">
            <div className="order-2 md:order-1">
              <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">Stage & Airwaves III</span>
              <h3 className="text-4xl md:text-5xl font-bold mb-6 serif text-black">Digital Pioneer</h3>
              <p className="text-muted leading-relaxed text-lg">
                With Jalang&apos;o TV, he redefined digital media in Kenya, creating a platform for deep conversations and showcasing the stories of fellow Kenyans through his YouTube channel.
              </p>
            </div>
            <div className="order-1 md:order-2 relative h-[500px] rounded-[2.5rem] overflow-hidden shadow-xl">
              <Image src="/assets/images/logo_two.png" alt="Digital Pioneer" fill className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* Politics Section */}
      <section id="politics" className="py-32 px-6 md:px-24">
        <div className="grid md:grid-cols-2 gap-24 items-center">
          <div>
            <span className="text-accent text-sm tracking-[0.3em] uppercase mb-4 block">03. Servant Leadership</span>
            <h2 className="text-5xl md:text-6xl font-bold mb-8 serif">Voice of the People</h2>
            <p className="text-muted text-lg leading-relaxed mb-8">
              In 2022, Jalang&apos;o took his greatest leap yet—into the political arena. Running for the Member of Parliament for Lang&apos;ata, he promised to bring the same energy and commitment to public service as he did to entertainment.
            </p>
            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary border border-black/5">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">✓</div>
                <span className="text-lg">Member of Parliament, Lang&apos;ata</span>
              </div>
              <div className="flex items-center gap-4 p-4 rounded-xl bg-secondary border border-black/5">
                <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">✓</div>
                <span className="text-lg">Community Development Advocate</span>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="relative h-[300px] rounded-2xl overflow-hidden mt-12">
              <Image src="/assets/images/leader_five.png" alt="Political work" fill className="object-cover" />
            </div>
            <div className="relative h-[400px] rounded-2xl overflow-hidden">
              <Image src="/assets/images/with_the_president.png" alt="With the President" fill className="object-cover" />
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
