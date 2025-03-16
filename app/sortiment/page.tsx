"use client";
import Image from "next/image";
import content from "../content/sortiment-page.json";
import { useRouter } from "next/navigation";

const SortimentPage = () => {
    const router = useRouter();
    return (
        <div>
            <h1>{content.title}</h1>
            <p>{content.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {content.links.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => router.push(item.linkUrl)}
                        className="cursor-pointer bg-orange-200 rounded-sm shadow-lg"
                    >
                        <div className="w-full h-[150px] md:h-[250px] relative rounded-sm">
                            <Image
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                fill
                                className="rounded-sm object-cover p-4 pb-0"
                            />
                        </div>
                        <p className="text-center py-2 m-4  border-1 border-gray-900 font-semibold font-merry rounded-sm">
                            {item.title}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
