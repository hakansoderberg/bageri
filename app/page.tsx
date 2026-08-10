import content from "./content/home-page.json";
import Card from "./component/card";
import ContentSection from "./component/content-section";
import Hero from "./component/hero";
import PageContainer from "./component/page-container";
import SplitFeature from "./component/split-feature";
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
                        <div className="mb-8">
                            <SplitFeature image={content.links[1].imageUrl} imageAlt={content.links[1].imageAlt}>
                                <ContentSection
                                    title={content.title}
                                    text={content.text1}
                                    button={{
                                        href: "https://www.matochmat.se/lunch/sundsvall/gardehov-restaurang-catering/",
                                        label: "Se dagens meny →",
                                    }}
                                />
                            </SplitFeature>
                        </div>
                        <OpeningHours />
                    </div>
                    <div className="mb-8 md:mb-16"></div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Card
                            linkUrl="/lunch"
                            title="Dagens lunch"
                            text="En väldigt bra text om lunchen skulle passa här"
                        />
                        <Card
                            linkUrl="/konferens"
                            title="Konferens"
                            text="Konferenstexten skulle sitta som en smäck här"
                        />
                        <Card linkUrl="/catering" title="Catering" text="En ännu bättre text om catering här" />
                    </div>
                </PageContainer>
            </main>
        </div>
    );
};
export default Home;
