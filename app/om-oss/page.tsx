import aboutUsContent from "../content/about-us-page.json";

const AboutUsPage = () => {
    return (
        <div>
            <h1>{aboutUsContent.title}</h1>
            {aboutUsContent.paragraphs.map((paragraph, index) => (
                <p key={index} className="text-lg mb-4">
                    {paragraph}
                </p>
            ))}
        </div>
    );
};

export default AboutUsPage;