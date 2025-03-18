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
        <div onClick={() => router.push(linkUrl)} className="cursor-pointer bg-dark-2 rounded-sm shadow-lg">
            <div className="w-full h-[250px] relative rounded-sm">
                <Image src={imageUrl} alt={imageAlt} fill className="rounded-sm object-cover p-4 pb-0" />
            </div>
            <p className="text-center py-2 m-4  border text-light font-semibold font-merry rounded-sm">
                {title}
            </p>
        </div>
    );
};

export default CardLink;
