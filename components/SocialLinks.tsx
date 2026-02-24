const socialLinks = [
    { name: "Instagram", href: "https://www.instagram.com/jalangoo/" },
    { name: "Facebook", href: "https://web.facebook.com/MzeeJalangoMwenyewe" },
    { name: "TikTok", href: "https://www.tiktok.com/@jalangoo" },
    { name: "Twitter", href: "https://x.com/JalangoMwenyewe" },
    { name: "YouTube", href: "https://www.youtube.com/@jalangotv1447" },
];

export default function SocialLinks() {
    return (
        <div className="animate-reveal [animation-delay:0.2s] flex flex-wrap justify-center gap-x-12 gap-y-6">
            {socialLinks.map((link) => (
                <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm tracking-[0.3em] uppercase font-bold hover:text-accent transition-all text-black/60 hover:scale-105"
                >
                    {link.name}
                </a>
            ))}
        </div>
    );
}
