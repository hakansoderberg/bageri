import Image from "next/image";

const images = [
    "/images/semla1.jpg",
    "/images/cake1.png",
    "/images/cake2.png",
    "/images/bread1.png",
    "/images/bread2.png",
    "/images/bread3.png",
    "/images/bread4.png",
];
const SortimentPage = () => {
    return (
        <div>
            <h1>Sortiment</h1>
            <p>
                På Bageri erbjuder vi ett brett sortiment av nybakade godsaker för alla smaker. Från klassiska frallor
                och surdegsbröd till saftiga kanelbullar och lyxiga tårtor. Oavsett om du är sugen på något sött till
                fikat eller ett rustikt bröd till middagen, har vi något för dig. Allt bakas med noggrant utvalda
                ingredienser och mycket kärlek. Välkommen in och hitta din favorit!
            </p>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-full  h-[150px] md:h-[300px] relative">
                        <Image src={image} alt="Semla från" fill className="rounded-lg shadow-lg object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
