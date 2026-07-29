import Block from "../component/block";
import content from "../content/conference.json";

const ConferencePage = () => {
    return (
        <div>
            <Block>
                <h1>{content.title}</h1>
                <p className="text-lg mb-4">{content.description}</p>
              
            </Block>
        </div>
    );
};

export default ConferencePage;
