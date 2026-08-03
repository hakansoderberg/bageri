import content from "./content/home-page.json";
import mainContent from "./content/main.json";
import Card from "./component/card";
import HighlightBox from "./component/highlight-box";
import ContentSection from "./component/content-section";

const Home = () => {
    return (
        <div>
            <main>
                <ContentSection
                    title={content.title}
                    text={content.text1}
                    button={{
                        href: "https://www.matochmat.se/lunch/sundsvall/gardehov-restaurang-catering/",
                        label: "Se dagens meny →",
                    }}
                />
                   
                <div className="flex flex-col items-center justify-between mb-8 md:mb-16">
                    <HighlightBox className="w-fit text-center wrapper-line p-8">
                        <p className="text-base text-light inline font-merry">{mainContent.openingHours.title1}</p>
                        <p className="text-base text-pale inline ml-2 ">{mainContent.openingHours.title2}</p>
                        <p className="text-xs pt-2 mb-0">{mainContent.openingHours.text}</p>
                    </HighlightBox>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card
                        linkUrl="/lunch"
                        title="Dagens lunch"
                        text="En väldigt bra text om lunchen skulle passa här"
                    />
                    <Card linkUrl="/konferens" title="Konferens" text="Konferenstexten skulle sitta som en smäck här" />
                    <Card linkUrl="/catering" title="Catering" text="En ännu bättre text om catering här" />
                </div>
            </main>
        </div>
    );
};
export default Home;

//   <div className="w-full relative rounded-xs">
//                     <Image
//                         src={content.image1.url}

//   <div className="w-full relative rounded-xs">
//                     <Image
//                         src={content.image1.url}
//                         alt={content.image1.alt}
//                         fill
//                         className="rounded-xs object-cover"
//                     />
//                 </div>
{
    /* <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:mb-16">
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
            
                </div> */
}
