import Card from "../component/card";
import ContactBox from "../component/contact-box";
import InfoCard from "../component/info-card";
import ContentSection from "../component/content-section";

import cateringContent from "../content/catering-page.json";

const Catering = () => {
    
    return (
        <div className="flex flex-col items-center">
            <ContentSection title={cateringContent.title} text={cateringContent.intro} />
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                <InfoCard
                title={cateringContent.dishesTitle}
                text={cateringContent.dishes}
                >
               </InfoCard>
                <InfoCard
                title={cateringContent.smorgasTitle}
                text={cateringContent.smorgas}
                >
               </InfoCard>
            </div>
            
            <ContactBox
                title={cateringContent.contact.title}
                text={cateringContent.contact.text}
                phone={cateringContent.contact.phone}
                email={cateringContent.contact.email}
            />
        </div>
    );
};

export default Catering;
