import Block from "../component/block";
import cateringContent from "../content/catering-page.json";

const Catering = () => {
    
    return (
        <div>
            <Block className="mb-8 md:mb-8 " dark>
                <h1 className="text-light">{cateringContent.title}</h1>
                <p className="text-light">{cateringContent.description}</p>
            </Block>
            <Block className="mb-8 md:mb-8">
                <div>
                    <p>
                        <strong>Adress:</strong> {cateringContent.address}
                    </p>

                    <p>
                        <strong>Telefon:</strong> {cateringContent.phone}
                    </p>

                    <p>
                        <strong>E-post:</strong> {cateringContent.email}
                    </p>
                </div>
            </Block>
        </div>
    );
};

export default Catering;
