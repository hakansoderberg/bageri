import content from "../content/sortiment-page.json";
import CardLink from "../component/card-link";
import Block from "../component/block";

const SortimentPage = () => {
    return (
        <div>
            <Block className="mb-8 md:mb-8">
                <h1>{content.title}</h1>
                <p>{content.description}</p>
            </Block>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.links.map((item, index) => (
                    <CardLink key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
