import ContentSection from "../component/content-section";
import Hero from "../component/hero";
import PageContainer from "../component/page-container";
import SplitFeature from "../component/split-feature";
import content from "../content/bar-page.json";

const Bar = () => {
    return (
        <main>
            <Hero title={content.title} backgroundImage={"images/header-blue.png"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center gap-8">
                    {/* <SplitFeature image={content.images.sasImage.url} imageAlt={content.images.sasImage.alt}>
                        
                    </SplitFeature> */}
                </div>
            </PageContainer>
        </main>
    );
};

export default Bar;
