import Image from "next/image";
import content from "../../content/cake-page.json";
const CakePage = () => {
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.text1}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
                {content.grid.map((image, index) => (
                    <div key={index} className="w-full h-[250px] relative">
                        <Image src={image.url} alt={image.alt} fill className="rounded-xs shadow-lg object-cover" />
                    </div>
                ))}
            </div>
            <p>{content.text2}</p>
        </div>
    );
};
export default CakePage;
