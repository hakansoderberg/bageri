import Image from "next/image";
import content from "./content/home-page.json";

const Home = () => {
    return (
        <div>
            <main>
                
                <h1>{content.title}</h1>
                <p>{content.text1}</p>
                <ul className="space-y-2 mb-4 font-semibold text-gray-600">
                    {content.openingHours.hours.map((hour, index) => (
                        <p key={index}>{hour}</p>
                    ))}
                </ul>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
                    {content.images.map((image, index) => (
                        <div key={index} className="w-full h-[250px] relative">
                            <Image src={image.url} alt={image.alt} fill className="rounded-lg shadow-lg object-cover" />
                        </div>
                    ))}
                </div>
                <p className="mb-8">{content.text2}</p>
            </main>
        </div>
    );
};
export default Home;
