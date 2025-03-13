import H1 from "../component/h1";

const Contact = () => {
    return (
        <div>
            <H1 title="Kontakt" />

            <p className="text-lg mb-4">Välkommen till Bageri! Vi är alltid glada att höra från våra kunder.</p>

            <p className="text-lg mb-4">
                Har du några frågor om våra produkter, öppettider eller vill du beställa något specifikt? Tveka inte att
                kontakta oss!
            </p>

            <p className="text-lg mb-4">
                Vårt team är tillgängligt för att hjälpa dig. Fyll i formuläret nedan eller kontakta oss direkt via
                e-post eller telefon.
            </p>

            <p className="text-lg mb-4">
                <strong>Adress:</strong> Bageri AB, Storgatan 123, 123 45, Stad
            </p>

            <p className="text-lg mb-4">
                <strong>Telefon:</strong> 012-345 6789
            </p>

            <p className="text-lg mb-4">
                <strong>E-post:</strong> info@bageri.se
            </p>

            <p className="text-lg mb-4">
                <strong>Öppettider:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                <li>Måndag - Fredag: 07:00 - 18:00</li>
                <li>Lördag: 08:00 - 16:00</li>
                <li>Söndag: Stängt</li>
            </ul>

            <p className="text-lg mb-4">Vi ser fram emot att höra från dig och hjälpa dig med alla dina bageribehov!</p>

            <p className="text-lg mb-4">
                Tack för att du väljer Bageri. Vi hoppas att våra produkter alltid gör din dag lite godare.
            </p>
        </div>
    );
};

export default Contact;
