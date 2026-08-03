import Image from "next/image";

type ImageGridProps = {
  images: { url: string, alt: string }[];
};

const ImageGrid = ({ images }: ImageGridProps) => {
  return (
   <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
  {images.map(({ url, alt }, i) => (
    <div key={i} className="w-full aspect-square overflow-hidden">
      <Image
        src={url}
        alt={alt}
        width={300}
        height={300}
        className="w-full h-full object-cover rounded-sm"
      />
    </div>
  ))}
</div>
  );
};

export default ImageGrid;