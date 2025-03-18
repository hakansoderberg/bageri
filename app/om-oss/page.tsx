import Block from "../component/block";
import content from "../content/about-us-page.json";

const AboutUsPage = () => {
    return (
        <div>
            <Block>
                <h1>{content.title}</h1>
                <p className="text-lg mb-4">{content.description}</p>
                <p className="text-lg mb-4">{content.text1}</p>
            </Block>
        </div>
    );
};

export default AboutUsPage;
