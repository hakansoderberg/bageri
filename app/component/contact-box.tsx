import HighlightBox from "./highlight-box";

type ContactBoxProps = {
    title: string;
    text: string;
    phone: string;
    email: string;
    className?: string;
};

export default function ContactBox({
    title,
    text,
    phone,
    email,
    className = "",
}: ContactBoxProps) {
    return (
        <HighlightBox className={`w-full text-center wrapper-line p-8 ${className}`}>
            <p className="text-base text-gold font-merry">{title}</p>
            <p className="text-sm text-pale">{text}</p>
            <p className="text-xs pt-2 mb-0">{phone}</p>
            <p className="text-xs pt-2 mb-0">{email}</p>
        </HighlightBox>
    );
}