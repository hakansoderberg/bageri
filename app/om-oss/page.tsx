import content from "../content/about-us-page.json";

const AboutUsPage = () => {
    return (
        <div>
            <h1>{content.title}</h1>
            <p className="text-lg mb-4">{content.description}</p>
            <p className="text-lg mb-4">{content.text1}</p>
        </div>
    );
};

export default AboutUsPage;
