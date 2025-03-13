import Image from "next/image";
import H1 from "./component/h1";

const Home = () => {
    return (
        <div>
            <main >
                    <H1 title="Välkommen till Bageri" />
                    <div className="flex flex-col md:flex-row items-center justify-evenly mb-8">
                        <p className="text-xl text-gray-700 pr-8">
                            På Bageriet hittar du de godaste bröden, bakverken och konditorivarorna. Vi bakar allt med
                            omsorg, tradition och kärlek för detaljer. Våra produkter är skapade av de finaste råvarorna
                            för att ge dig den bästa möjliga smaken.
                        </p>

                        <Image
                            src="/images/semla1.jpg"
                            alt="Semla från Hälsinglands Bageri"
                            width={400} // Ange den önskade bredden
                            height={400} // Ange den önskade höjden
                            className="rounded-lg shadow-lg mx-auto"
                        />
                    </div>

                    <p className="text-xl text-gray-700 mb-8">
                        Vi erbjuder ett brett sortiment av nybakade varor, från klassiska frallor till läckra tårtor och
                        småkakor. Kom förbi och njut av vårt utbud eller beställ online!
                    </p>

                    <div className="mt-8">
                        <a
                            href="/about"
                            className="inline-block px-8 py-3 text-white bg-black rounded-lg hover:bg-gray-800 transition duration-300"
                        >
                            Läs mer om oss
                        </a>
                    </div>
            </main>
        </div>
    );
};
export default Home;
