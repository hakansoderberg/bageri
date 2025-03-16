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
                    <div key={index} onClick={() => router.push(item.linkUrl)} className="cursor-pointer">
                        <div className="w-full h-[150px] md:h-[250px] relative ">
                            <Image
                                src={item.imageUrl}
                                alt={item.imageAlt}
                                fill
                                className="rounded-t-sm shadow-lg object-cover"
                            />
                        </div>
                            <p className="bg-orange-200  text-center py-2 mb-0 rounded-b-sm font-semibold font-merry">
                                {item.title}
                            </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default SortimentPage;
