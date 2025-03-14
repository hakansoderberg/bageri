import Image from "next/image";
import sortimentContent from "../content/sortiment-page.json";

const SortimentPage = () => {
    return (
        <div>
            <h1>{sortimentContent.title}</h1>
            <p>{sortimentContent.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-4">
                {sortimentContent.images.map((image, index) => (
                    <div key={index} className="w-full h-[150px] md:h-[300px] relative">
                        <Image src={image.url} alt={image.alt} fill className="rounded-lg shadow-lg object-cover" />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
