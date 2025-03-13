import Link from "next/link";

const Footer = () => {
    return (
        <footer className="bg-neutral-100 py-8">
            <div className="container mx-auto px-6 max-w-screen-lg">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                        <h3 className="text-lg font-semibold mb-4">Kontakt</h3>
                        <ul>
                            <li>Företagsnamn AB</li>
                            <li>Adress: Gatan 123, 123 45 Stad</li>
                            <li>Telefon: 012-345 67 89</li>
                            <li>Email: kontakt@foretag.com</li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Länkar</h3>
                        <ul>
                            <li>
                                <Link href="/om-oss">Om oss</Link>
                            </li>
                            <li>
                                <Link href="/kontakt">Kontakta</Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-lg font-semibold mb-4">Följ oss</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-blue-500"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="hover:text-pink-500"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="text-center mt-8 ">
                    <p className="text-sm">© 2025 Företagsnamn AB. Alla rättigheter förbehållna.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
