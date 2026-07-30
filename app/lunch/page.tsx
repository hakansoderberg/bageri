import Block from "../component/block";
import content from "../content/lunch-page.json";

const Lunch = () => {
    
    return (
        <div>
            <Block className="mb-8 md:mb-8 " dark>
                <h1 className="text-light">{content.title}</h1>
                <p className="text-light">{content.text1}</p>
            </Block>
         
        </div>
    );
};

export default Lunch;
