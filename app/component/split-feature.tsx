import Image from "next/image";
import Link from "next/link";

type SplitFeatureProps = {
  eyebrow?: string;
  children: React.ReactNode;
  image: string;
  imageAlt: string;
  reverse?: boolean; // true = bild till vänster, text till höger
};

const SplitFeature: React.FC<SplitFeatureProps> = ({
  children,
  image,
  imageAlt,
  reverse = false,
}) => {
  return (
    <section className="w-full">
      <div
        className={`flex flex-col md:flex-row md:h-[400px] ${
          reverse ? "md:flex-row-reverse" : ""
        }`}
      >
        {/* Textsida */}
        <div className="w-full md:w-1/2 md:h-full flex items-center wrapper-line">
          {children}
        </div>

        {/* Bildsida — fast höjd, object-cover beskär alltid till en liggande ruta */}
        <div className="w-full h-[280px] md:h-full md:w-1/2 relative overflow-hidden">
          <Image
            src={image}
            alt={imageAlt}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover"
            priority={false}
          />
        </div>
      </div>
    </section>
  );
};

export default SplitFeature;