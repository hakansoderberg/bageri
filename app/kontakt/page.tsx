import HighlightBox from "../component/highlight-box";
import contactContent from "../content/contact-page.json";
import mainContent from "../content/main.json";

const Contact = () => {
    return (
        <div>
            <h1>{contactContent.title}</h1>

            <p>{contactContent.intro}</p>

            <p>{contactContent.description}</p>

            <p>
                <strong>Adress:</strong> {contactContent.address}
            </p>

            <p>
                <strong>Telefon:</strong> {contactContent.phone}
            </p>

            <p>
                <strong>E-post:</strong> {contactContent.email}
            </p>

            <HighlightBox>
                <h3 className="mb-2 md:mb-4 px-16">{mainContent.openingHours.title}</h3>
                <ul className="mb-4 text-center">
                    {mainContent.openingHours.hours.map((item, index) => (
                        <div key={index}>
                            <p className="text-sm font-semibold mb-0">{item.title}</p>
                            <p className="text-sm mb-2 last:mb-0">{item.value}</p>
                        </div>
                    ))}
                </ul>
            </HighlightBox>
        </div>
    );
};

export default Contact;
