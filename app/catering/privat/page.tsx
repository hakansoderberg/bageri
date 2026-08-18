import ContactBox from "../../component/contact-box";
import ContentSection from "../../component/content-section";
import cateringContent from "../../content/catering-privat-page.json";
import PageContainer from "../../component/page-container";
import Hero from "../../component/hero";
import CateringMenu from "../../component/catering-box";
import SplitFeature from "../../component/split-feature";

const CateringPrivat = () => {
    return (
        <div>
            <Hero title={cateringContent.title} backgroundImage={"images/hero-catering.png"} height="40vh" />
            <PageContainer>
                <div className="flex flex-col items-center">
                    <SplitFeature image={cateringContent.images.cateringImage.url} imageAlt={cateringContent.images.cateringImage.alt}>
                        <ContentSection title={cateringContent.title} text={cateringContent.intro} />
                    </SplitFeature>
                    <div className="mb-8"></div>
                    <CateringMenu
                        title={cateringContent.menuTitle}
                        items={cateringContent.menuItems}
                    />

                    <div className="mt-8 grid w-full gap-6 md:grid-cols-2">
                        {cateringContent.additionalMenus.map((menu) => (
                            <CateringMenu
                                key={menu.title}
                                title={menu.title}
                                items={menu.items}
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
