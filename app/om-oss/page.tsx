import H1 from "../component/h1";

const AboutUsPage = () => {
    return (
        <div>
            <H1 title="Om oss" />
            <p className="text-lg mb-4">
                Välkommen till Bageri! Vi är ett familjedrivet bageri som specialiserar oss på traditionella och
                nyskapande bakverk.
            </p>

            <p className="text-lg mb-4">
                Vårt mål är att erbjuda färska och goda produkter varje dag, bakade med kärlek och noggrant utvalda
                ingredienser.
            </p>

            <p className="text-lg mb-4">
                Vi strävar efter att ge våra kunder en smakupplevelse utöver det vanliga, med en personlig touch och en
                passion för det vi gör.
            </p>

            <p className="text-lg mb-4">
                Kom förbi och upptäck vårt sortiment – vi ser fram emot att dela våra bakverk med dig!
            </p>
        </div>
    );
};

export default AboutUsPage;
