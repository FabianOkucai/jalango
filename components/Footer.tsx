export default function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer id="contact" className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-6 mb-12 flex justify-center">
                <div className="relative h-px bg-black/10 w-[90%] md:w-11/12">
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[2px] bg-accent/40 blur-[0.5px]"></div>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[1px] bg-accent"></div>
                </div>
            </div>
            <div className="text-center px-6">
                <p className="text-muted text-[10px] tracking-[0.3em] md:tracking-[0.5em] uppercase font-bold text-black/40">
                    &copy; {currentYear} Felix Odiwour. All Rights Reserved.
                </p>
            </div>
        </footer>
    );
}
