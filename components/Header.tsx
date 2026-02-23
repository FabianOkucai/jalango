import Link from "next/link";

export default function Header() {
    return (
        <nav className="absolute top-0 left-0 w-full p-6 md:p-12 flex justify-end items-center z-20">
            <Link
                href="/contact"
                className="px-8 py-3 border-2 border-black/10 rounded-full text-xs tracking-[0.3em] uppercase hover:bg-black hover:text-white transition-all text-black font-bold"
            >
                Get in Touch
            </Link>
        </nav>
    );
}
