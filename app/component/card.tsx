"use client";
import { useRouter } from "next/navigation";

interface CardProps {
    linkUrl: string;
    title: string;
    text: string;
}

const Card: React.FC<CardProps> = ({ linkUrl, title, text }) => {
    const router = useRouter();

    return (
        <div
            onClick={() => router.push(linkUrl)}
            className="cursor-pointer rounded-xs bg-light shadow-lg p-4 transition-all duration-200 flex-col hover:shadow-xl hover:scale-[1.02] justify-between flex h-full"
        >
            <div>
                <h3 className="text-lg font-semibold font-merry mb-2 text-light">{title}</h3>
                <p className="text-sm text-pale">{text}</p>
            </div>

            <span className="inline-block mt-3 text-sm font-semibold text-[var(--gullgossen)] hover:underline">
                Läs mer →
            </span>
        </div>
    );
};

export default Card;
