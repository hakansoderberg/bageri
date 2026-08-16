const footerLinkStyle =
    "text-sm text-[var(--color-text-offwhite)] hover:text-[var(--color-gold)] transition-colors";
const footerTextStyle = "text-sm text-[var(--color-text-muted)] leading-relaxed";
const footerHeadingStyle =
    "font-merry text-xl text-[var(--color-gold)] mb-5 pb-2 border-b border-[var(--color-gold)]/25";

const Footer = () => {
    return (
        <footer className="bg-navy-deep border-t border-[var(--color-gold)]/20 pt-14 pb-8">
            <div className="container mx-auto px-6 md:px-8 max-w-screen-lg">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 sm:gap-16">
                    <div>
                        <h3 className={footerHeadingStyle}>Kontakt</h3>
                        <ul className="space-y-2">
                            <li className={`${footerTextStyle} text-[var(--color-text-offwhite)] font-semibold`}>
                                Företagsnamn AB
                            </li>
                            <li className={footerTextStyle}>Adress: Gatan 123, 123 45 Stad</li>
                            <li className={footerTextStyle}>Telefon: 012-345 67 89</li>
                            <li className={footerTextStyle}>Email: kontakt@foretag.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className={footerHeadingStyle}>Följ oss</h3>
                        <ul className="space-y-2">
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerLinkStyle}
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className={footerLinkStyle}
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[var(--color-gold)]/10 text-center">
                    <p className="text-xs text-[var(--color-gold-soft)] mb-0">
                        &copy; {new Date().getFullYear()} Företagsnamn AB
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
