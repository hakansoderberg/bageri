import ContactBox from "../../component/contact-box";
import cateringContent from "../../content/catering-foretag-page.json";
import PageContainer from "../../component/page-container";
import Hero from "../../component/hero";
import CateringMenu from "../../component/catering-box";
import SlimContent from "../../component/slim-content";
import TextPanel from "../../component/text-panel";

const CateringForetag = () => {
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

export default CateringForetag;
