import content from "./content/home-page.json";
import mainContent from "./content/main.json";
import HighlightBox from "./component/highlight-box";
import CardLink from "./component/card-link";
import Image from "next/image";

const Home = () => {
    return (
        <div>
            <main>
                <div className="mb-8">
                    <div className="bg-third p-4 rounded-sm flex-col justify-center items-center">
                        <h1 className="">{content.title}</h1>
                        <p className="">{content.text1}</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">
                    {content.links.map((item, index) => (
                        <CardLink key={index} {...item} />
                    ))}
                </div>
                <div className="flex flex-col md:flex-row justify-between gap-4">
                    <div className="w-full relative rounded-sm">
                        <Image
                            src={content.imageBottom.url}
                            alt={content.imageBottom.alt}
                            fill
                            className="rounded-sm object-cover"
                        />
                    </div>

                    <HighlightBox className="w-full text-center">
                        <h3 className="mb-2 md:mb-4 px-16">{mainContent.openingHours.title}</h3>
                        <ul className="mb-4 ">
                            {mainContent.openingHours.hours.map((item, index) => (
                                <div key={index}>
                                    <p className="text-sm font-semibold mb-0 ">{item.title}</p>
                                    <p className="text-sm mb-2 last:mb-0 ">{item.value}</p>
                                </div>
                            ))}
                        </ul>
                    </HighlightBox>
                </div>
            </main>
        </div>
    );
};
export default Home;
