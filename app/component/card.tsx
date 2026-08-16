"use client";
import { useRouter } from "next/navigation";

interface CardProps {
    linkUrl: string;
    title: string;
    text?: string | string[];
}

const Card: React.FC<CardProps> = ({ linkUrl, title, text }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(linkUrl)}
            className="cursor-pointer rounded-xs bg-surface shadow-lg p-4 transition-all duration-200 flex-col hover:shadow-xl hover:scale-[1.02] justify-between flex h-full"
        >
            <div>
                <h3 className="text-lg font-semibold font-merry mb-2 text-gold">
                    {title}
                </h3>
            </div>

            <span className="inline-block text-sm font-semibold text-offwhite hover:underline">
                Läs mer →
            </span>
        </div>
    );
};

export default Card;