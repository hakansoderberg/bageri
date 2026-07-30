interface CardProps {
    title: string;
    text: string | string[];
    children?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ title, text, children }) => {
    return (
        <div className="rounded-xs bg-light shadow-lg p-4 flex flex-col h-full">
            <h3 className="text-lg font-semibold font-merry mb-2 text-light">
                {title}
            </h3>

            {Array.isArray(text) ? (
                text.map((item, index) => (
                    <p key={index} className="text-sm text-pale">
                        {item}
                    </p>
                ))
            ) : (
                <p className="text-sm text-pale">{text}</p>
            )}

            {children}
        </div>
    );
};

export default Card;