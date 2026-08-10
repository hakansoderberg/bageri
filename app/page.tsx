import content from "./content/home-page.json";
import mainContent from "./content/main.json";
import Card from "./component/card";
import HighlightBox from "./component/highlight-box";
import ContentSection from "./component/content-section";
import Hero from "./component/hero";
import PageContainer from "./component/page-container";
import SplitFeature from "./component/split-feature";
import SlimInfoBox from "./component/slim-info-box";

const Home = () => {
    const leftSection = (
        <div>
            <span className="block font-mono text-xs tracking-wider uppercase text-[var(--gullgossen)]/80 mb-2">
                Lunch
            </span>
            <span className="text-2xl font-semibold font-merry text-[var(--gdansk)]">
               {mainContent.openingHours.title2}
            </span>
        </div>
    );

    const rightSection = (
        <div>
            <span className="block text-xs tracking-wider uppercase text-[var(--gullgossen)]/80 mb-2">
                Övrigt
            </span>
            <p className="text-sm leading-relaxed text-[var(--muted)]">
                {mainContent.openingHours.text}
            </p>
        </div>
    );

    return (
        <div>
            <main>
                <Hero backgroundImage={"images/hero2.jpg"}>
                    <div className="text-center text-light max-w-2xl px-4 text-white">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl text-white leading-tight">
                            {content["hero-title"]}
                        </h1>
                        <p className="mt-2 text-white text-sm sm:text-base md:text-lg tracking-wide">
                            {content["hero-subtitle"]}
                        </p>
                    </div>
                </Hero>
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
                    <SlimInfoBox leftSection={leftSection} rightSection={rightSection} />
    
                    </div>
                    <div className="mb-8 md:mb-16">

                    </div>
                    

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
