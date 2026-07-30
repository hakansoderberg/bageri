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
        <div className="flex flex-col md:flex-row justify-center items-center gap-4 mb-4 md:mb-16">
            <div className="w-full md:w-1/2 flex flex-col items-center text-center p-4 md:p-0">
                <h1>{title}</h1>
                <p>{text}</p>

                {button && (
                    <OutlineButton
                        href={button.href}
                        className="mt-4 self-center"
                    >
                        {button.label}
                    </OutlineButton>
                )}
            </div>
        </div>
    );
};

export default ContentSection;