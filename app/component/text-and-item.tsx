import Block from "./block";

export const TextAndItem = ({
    children,
    text,
    title,
    inverted = false,
}: {
    children: any;
    text: string;
    title: string;
    inverted?: boolean;
}) => {
    return (
        <div
            className={`flex flex-col items-center md:flex-row md:items-start justify-between gap-4 ${
                inverted ? "md:flex-row-reverse" : ""
            }`}
        >
            <div className="mb-4 md:mb-8 md:w-1/2">
                <div className="flex justify-start text-center">{children}</div>
            </div>
            <Block>
                <div>
                    <h2 className="mb-2">{title}</h2>
                    <p>{text}</p>
                </div>
            </Block>
        </div>
    );
};
