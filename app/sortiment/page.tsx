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
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {images.map((image, index) => (
                    <div key={index} className="w-full h-[300px] relative">
                        <Image src={image} alt="Semla från" fill className="rounded-lg shadow-lg object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
