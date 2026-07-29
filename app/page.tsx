import content from "./content/home-page.json";
import mainContent from "./content/main.json";
import HighlightBox from "./component/highlight-box";
import CardLink from "./component/card-link";
import Image from "next/image";
import OutlineButton from "./component/outline-button";

const Home = () => {
    return (
        <div>
            <main>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:mb-16">
                    <div className="p-4 md:p-0 rounded-xs w-full">
                        <h1 className="">{content.title}</h1>
                        <p className="">{content.text1}</p>
                        <OutlineButton href="/menu" className="mt-4">
                            Gå till meny
                        </OutlineButton>
                    </div>
                     <div className="w-full relative rounded-xs">
                        <Image
                            src={content.image1.url}
                            alt={content.image1.alt}
                            fill
                            className="rounded-xs object-cover"
                        />
                    </div>
                
                </div>
            
                
            </main>
        </div>
    );
};
export default Home;


{/* <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:mb-16">
                    <div className="w-full relative rounded-xs">
                        <Image
                            src={content.imageBottom.url}
                            alt={content.imageBottom.alt}
                            fill
                            className="rounded-xs object-cover"
                        />
                    </div>
                
                    <HighlightBox className="w-full text-center wrapper-line">
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
            
                </div> */}