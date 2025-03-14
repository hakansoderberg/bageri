import contactContent from "../content/contact-page.json";

const Contact = () => {
    return (
        <div>
            <h1>{contactContent.title}</h1>

            <p className="text-lg mb-4">{contactContent.intro}</p>

            <p className="text-lg mb-4">{contactContent.description}</p>

            <p className="text-lg mb-4">
                <strong>Adress:</strong> {contactContent.address}
            </p>

            <p className="text-lg mb-4">
                <strong>Telefon:</strong> {contactContent.phone}
            </p>

            <p className="text-lg mb-4">
                <strong>E-post:</strong> {contactContent.email}
            </p>

            <p className="text-lg mb-4">
                <strong>{contactContent.openingHours.title}:</strong>
            </p>
            <ul className="list-disc pl-5 space-y-2 mb-4">
                {contactContent.openingHours.hours.map((hour, index) => (
                    <li key={index}>{hour}</li>
                ))}
            </ul>
        </div>
    );
};

export default Contact;