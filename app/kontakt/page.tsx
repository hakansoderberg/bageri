"use client";
import HighlightBox from "../component/highlight-box";
import contactContent from "../content/contact-page.json";
import mainContent from "../content/main.json";
import useMenu from "../hooks/useMenu";

const Contact = () => {
    useMenu();
    return (
        <div>
            <div className="flex flex-col items-center md:flex-row md:items-start justify-between">
                <div>
                    <h1>{contactContent.title}</h1>
                    <p className="mr-8">{contactContent.description}</p>
                </div>
                <div className="mb-4 md:mb-8 md:w-1/2">
                    <div className="flex justify-end text-center">
                        <HighlightBox>
                            <h3 className="mb-2 md:mb-4 px-16">{mainContent.openingHours.title}</h3>
                            <ul className="mb-4">
                                {mainContent.openingHours.hours.map((item, index) => (
                                    <div key={index}>
                                        <p className="text-sm font-semibold mb-0">{item.title}</p>
                                        <p className="text-sm mb-2 last:mb-0">{item.value}</p>
                                    </div>
                                ))}
                            </ul>
                        </HighlightBox>
                    </div>
                </div>
            </div>
            <p>
                <strong>Adress:</strong> {contactContent.address}
            </p>

            <p>
                <strong>Telefon:</strong> {contactContent.phone}
            </p>

            <p>
                <strong>E-post:</strong> {contactContent.email}
            </p>
        </div>
    );
};

export default Contact;
