import content from "./content/home-page.json";
import SlimWidth from "./component/slim-width";
import Card from "./component/card";

const Home = () => {
    return (
        <div>
            <main>
                <div className="flex flex-col md:flex-row justify-between gap-4 mb-8 md:mb-16">
                
                        <div className="p-4 md:p-0 rounded-xs w-full text-center flex-col md:flex-row items-center ">
                            <h1 >{content.title}</h1>
                            <p >{content.text1}</p>
                        </div>
              
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8 md:mb-16">

                <Card linkUrl="/lunch" title="Dagens lunch" text="En väldigt bra text om lunchen skulle passa här" />
                <Card linkUrl="/catering" title="Catering" text="En ännu bättre text om catering här" />
                <Card linkUrl="/konferens" title="Konferens" text="Konferenstexten skulle sitta som en smäck här" />
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
