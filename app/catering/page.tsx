import cateringContent from "../content/catering-page.json";
import PageContainer from "../component/page-container";
import Hero from "../component/hero";
import AudienceCard from "../component/audience-card";
import { Briefcase, Heart } from "lucide-react";

const audienceIcons = [Briefcase, Heart];

const Catering = () => {
    return (
        <div>
            <Hero title={cateringContent.title} backgroundImage={"images/hero-catering.png"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center">
                    <div className="mt-8 grid w-full gap-6 md:grid-cols-2">
                        {cateringContent.audienceCards.map((card, index) => (
                            <AudienceCard
                                key={card.title}
                                linkUrl={card.linkUrl}
                                icon={audienceIcons[index]}
                                title={card.title}
                                text={card.text}
                                linkLabel={card.linkLabel}
                            />
                        ))}
                    </div>
                
                </div>
            </PageContainer>
        </div>
    );
};

export default Catering;
