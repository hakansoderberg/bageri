import ContentSection from "../component/content-section";
import Hero from "../component/hero";
import PageContainer from "../component/page-container";
import SlimContent from "../component/slim-content";
import SplitFeature from "../component/split-feature";
import TextPanel from "../component/text-panel";
import content from "../content/bar-page.json";

const Bar = () => {
    return (
        <main>
            <Hero title={content.title} backgroundImage={"images/hero-bar1.png"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center gap-8">
                    <SlimContent>
                        <TextPanel
                            eyebrow={content.eyebrow}
                            title={content.introTitle}
                            text={content.description}
                        />
                    </SlimContent>
                    <SplitFeature image={content.images.olImage.url} imageAlt={content.images.olImage.alt}>
                        <ContentSection
                            title={content.olTitle}
                            text={content.olText}
                        />
                    </SplitFeature>
                    <SplitFeature image={content.images.bubbelImage.url} imageAlt={content.images.bubbelImage.alt} reverse>
                        <ContentSection
                            title={content.bubbelTitle}
                            text={content.bubbelText}
                        />
                    </SplitFeature>
                </div>
            </PageContainer>
        </main>
    );
};

export default Bar;
