import OutlineButton from "./outline-button";

interface ContentSectionProps {
    title: string;
    text: string;
    button?: {
        href: string;
        label: string;
    };
}

const ContentSection = ({ title, text, button }: ContentSectionProps) => {
    return (
        <div className="w-full flex flex-col text-left ">
            <div className="p-8">
                <h1 className="">{title}</h1>
                <p className="mb-4">{text}</p>

                {button && (
                    <OutlineButton href={button.href} className="mt-8 self-center">
                        {button.label}
                    </OutlineButton>
                )}
            </div>
        </div>
    );
};

export default ContentSection;
