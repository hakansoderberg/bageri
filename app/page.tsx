import content from "./content/home-page.json";
import Card from "./component/card";
import Hero from "./component/hero";
import PageContainer from "./component/page-container";
import SlimContent from "./component/slim-content";
import TextPanel from "./component/text-panel";
import OpeningHours from "./component/opening-hours";

const Home = () => {
    return (
        <div>
            <main>
                <Hero
                    backgroundImage={"images/hero2.jpg"}
                    title={content["hero-title"]}
                    subTitle={content["hero-subtitle"]}
                ></Hero>
                <PageContainer>
                    <div className="flex flex-col items-center justify-between mb-8 md:mb-16">
                        <div className="mb-8 w-full">
                            <SlimContent>
                                <TextPanel
                                    eyebrow={content.eyebrow}
                                    title={content.title}
                                    text={content.text1}
                                    ctaLabel="Se dagens meny →"
                                    ctaHref="https://www.matochmat.se/lunch/sundsvall/gardehov-restaurang-catering/"
                                />
                            </SlimContent>
                        </div>
                        <OpeningHours />
                    </div>
                    <div className="mb-8 md:mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card linkUrl="/lunch" title="Dagens lunch" />
                        <Card linkUrl="/konferens" title="Konferens" />
                        <Card linkUrl="/catering" title="Catering" />
                    </div>
                </PageContainer>
            </main>
        </div>
    );
};
export default Home;
