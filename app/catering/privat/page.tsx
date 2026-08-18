import ContactBox from "../../component/contact-box";
import cateringContent from "../../content/catering-privat-page.json";
import PageContainer from "../../component/page-container";
import Hero from "../../component/hero";
import BuffeCard from "../../component/buffe-card";
import SlimContent from "../../component/slim-content";
import TextPanel from "../../component/text-panel";

const CateringPrivat = () => {
    return (
        <div>
            <Hero title={cateringContent.title} backgroundImage={"images/hero-catering.png"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center">
                    <SlimContent>
                        <TextPanel
                            eyebrow={cateringContent.eyebrow}
                            title={cateringContent.introTitle}
                            text={cateringContent.intro}
                        />
                    </SlimContent>

                    <div className="mb-8"></div>
                    <h2 className="font-merry font-semibold text-xl sm:text-2xl text-center tracking-wide sm:tracking-widest text-[var(--color-gold)] uppercase mb-8">
                        {cateringContent.buffeTitle}
                    </h2>
                    <div className="grid w-full gap-6 md:grid-cols-2">
                        {cateringContent.buffeAlternativ.map((buffe) => (
                            <BuffeCard
                                key={buffe.namn}
                                namn={buffe.namn}
                                ratter={buffe.ratter}
                                pris={buffe.pris}
                            />
                        ))}
                    </div>

                    <div className="mb-8"></div>
                    <ContactBox
                        title={cateringContent.contact.title}
                        text={cateringContent.contact.text}
                        phone={cateringContent.contact.phone}
                        email={cateringContent.contact.email}
                    />
                </div>
            </PageContainer>
        </div>
    );
};

export default CateringPrivat;
