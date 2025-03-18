import Block from "../component/block";
import contactContent from "../content/contact-page.json";

const Contact = () => {
    
    return (
        <div>
            <Block className="mb-8 md:mb-8 " dark>
                <h1 className="text-light">{contactContent.title}</h1>
                <p className="text-light">{contactContent.description}</p>
            </Block>
            <Block className="mb-8 md:mb-8">
                <div>
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
            </Block>
        </div>
    );
};

export default Contact;
