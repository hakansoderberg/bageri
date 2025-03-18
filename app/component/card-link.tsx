"use client"
import { useRouter } from "next/navigation";
import Image from "next/image";

interface CardLinkProps {
    linkUrl: string;
    imageUrl: string;
    imageAlt: string;
    title: string;
}

const CardLink: React.FC<CardLinkProps> = ({ linkUrl, imageUrl, imageAlt, title }) => {
    const router = useRouter();

    return (
        <div onClick={() => router.push(linkUrl)} className="cursor-pointer rounded-sm bg-primary shadow-lg">
            <div className="w-full h-[250px] relative rounded-sm">
                <Image src={imageUrl} alt={imageAlt} fill className="rounded-sm object-cover  pb-0" />
            </div>
            <p className="m-2 text-md text-center p-2 font-merry font-semibold rounded-sm hover:underline transition-all duration-300">
                {title}
            </p>
        </div>
    );
};

export default CardLink;
