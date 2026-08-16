import Link from "next/link";
const footerLinkStyle = "hover:text-black-100 footer-link";
const footerTextStyle = "footer-link";
const Footer = () => {
    return (
        <footer className="bg-navy-deep pb-8">
            <div className="container mx-auto px-6 max-w-screen-md pt-8">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-base font-semibold mb-4">Kontakt</h3>
                        <ul >
                            <li className={footerTextStyle}>Företagsnamn AB</li>
                            <li className={footerTextStyle}>Adress: Gatan 123, 123 45 Stad</li>
                            <li className={footerTextStyle}>Telefon: 012-345 67 89</li>
                            <li className={footerTextStyle}>Email: kontakt@foretag.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-base font-semibold mb-4">Följ oss</h3>
                        <ul>
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
            </div>
        </footer>
    );
};

export default Footer;
