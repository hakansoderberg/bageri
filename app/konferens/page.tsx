import Block from "../component/block";
import ContactBox from "../component/contact-box";
import ContentSection from "../component/content-section";
import HighlightBox from "../component/highlight-box";
import content from "../content/conference.json";

const ConferencePage = () => {
    return (
        <div className="flex flex-col items-center">
            <ContentSection title={content.title} text={content.description} />
            <ContactBox
                title={content.contact.title}
                text={content.contact.text}
                phone={content.contact.phone}
                email={content.contact.email}
            />
        </div>
    );
};

export default ConferencePage;
