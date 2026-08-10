import ContentSection from "../component/content-section";
import HighlightBox from "../component/highlight-box";
import InfoCard from "../component/info-card";
import PageContainer from "../component/page-container";
import content from "../content/lunch-page.json";
import mainContent from "../content/main.json";

const Lunch = () => {
    return (
        <PageContainer>
            <div className="flex flex-col items-center">
                <ContentSection
                    title={content.title}
                    text={content.text}
                    button={{ label: mainContent.lunchButtonText, href: mainContent.lunchButtonLink }}
                />
                <div className="flex flex-col items-center justify-between mb-8 md:mb-16">
                    <HighlightBox className="w-fit text-center wrapper-line p-8">
                        <p className="text-base text-light inline font-merry">{mainContent.openingHours.title1}</p>
                        <p className="text-base text-pale inline ml-2 ">{mainContent.openingHours.title2}</p>
                        <p className="text-xs pt-2 mb-0">{mainContent.openingHours.text}</p>
                    </HighlightBox>
                </div>
                <div className="w-full md:w-1/2 text-center p-4 md:p-0">
                    <InfoCard title={content.infoTitle} text={content.infoRows} />
                </div>
            </div>
        </PageContainer>
    );
};

export default Lunch;
