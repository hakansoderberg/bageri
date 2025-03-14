import contactContent from "../content/contact-page.json";

const Contact = () => {
    return (
        <div>
            <h1>{contactContent.title}</h1>

            <p >{contactContent.intro}</p>

            <p >{contactContent.description}</p>

            <p >
                <strong>Adress:</strong> {contactContent.address}
            </p>

            <p >
                <strong>Telefon:</strong> {contactContent.phone}
            </p>

            <p >
                <strong>E-post:</strong> {contactContent.email}
            </p>

            <p >
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