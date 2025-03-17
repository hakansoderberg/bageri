"use client";
import content from "../content/sortiment-page.json";
import CardLink from "../component/card-link";

const SortimentPage = () => {
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {content.links.map((item, index) => (
                    <CardLink key={index} {...item} />
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
