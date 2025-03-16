import Image from "next/image";
import content from "./content/home-page.json";
import HighlightBox from "./component/highlight-box";

const Home = () => {
    return (
        <div>
            <main>
                <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
                    <div>
                        <h1>{content.title}</h1>
                        <p className="mr-8">{content.text1}</p>
                    </div>
                    <div className="mb-4 md:mb-8 md:w-1/2">
                        <div className="flex justify-end text-center">
                            <HighlightBox>
                                <h3 className="mb-2 md:mb-4 px-16">{content.openingHours.title}</h3>
                                <ul className="mb-4">
                                    {content.openingHours.hours.map((item, index) => (
                                        <div key={index}>
                                            <p className="text-sm font-semibold mb-0">{item.title}</p>
                                            <p className="text-sm mb-2 last:mb-0">{item.value}</p>
                                        </div>
                                    ))}
                                </ul>
                            </HighlightBox>
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
                    {content.images.map((image, index) => (
                        <div key={index} className="w-full h-[250px] relative">
                            <Image src={image.url} alt={image.alt} fill className="rounded-sm shadow-lg object-cover" />
                        </div>
                    ))}
                </div>
                <p className="mb-8">{content.text2}</p>
            </main>
        </div>
    );
};
export default Home;
