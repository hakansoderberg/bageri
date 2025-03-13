import Image from "next/image";
const images = ["/images/semla1.jpg", "/images/cake1.png", "/images/cake2.png"];

const Home = () => {
    return (
        <div>
            <main>
                <h1>Välkommen till Bageri</h1>
                <p>
                    På Bageriet hittar du de godaste bröden, bakverken och konditorivarorna. Vi bakar allt med omsorg,
                    tradition och kärlek för detaljer. Våra produkter är skapade av de finaste råvarorna för att ge dig
                    den bästa möjliga smaken.
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
                    {images.map((image, index) => (
                        <div key={index} className="w-full h-[300px] relative">
                            <Image src={image} alt="Semla från" fill className="rounded-lg shadow-lg object-cover" />
                        </div>
                    ))}
                </div>
                <p className="text-xl text-gray-700 mb-8">
                    Vi erbjuder ett brett sortiment av nybakade varor, från klassiska frallor till läckra tårtor och
                    småkakor. Kom förbi och njut av vårt utbud eller beställ online!
                </p>

                <div className="mt-8">
                    <a
                        href="/om-oss"
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
