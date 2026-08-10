import ContentSection from "../component/content-section";
import Hero from "../component/hero";
import OpeningHours from "../component/opening-hours";
import PageContainer from "../component/page-container";
import SplitFeature from "../component/split-feature";
import content from "../content/lunch-page.json";
import mainContent from "../content/main.json";

const Lunch = () => {
    return (
        <main>
            <Hero title={content.title} backgroundImage={"images/hero2.jpg"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center gap-8">
                    <OpeningHours />
                    <SplitFeature image={content.images.sasImage.url} imageAlt={content.images.sasImage.alt}>
                        <ContentSection
                            title={content.title}
                            text={content.text}
                            button={{ label: mainContent.lunchButtonText, href: mainContent.lunchButtonLink }}
                        />
                    </SplitFeature>
                </div>
            </PageContainer>
        </main>
    );
};

export default Lunch;
