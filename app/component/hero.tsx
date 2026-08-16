type HeroProps = {
    title: string;
    subTitle?: string;
    backgroundImage: string;
    height?: string;
};

const Hero: React.FC<HeroProps> = ({ title, subTitle, backgroundImage, height = "60vh" }) => {
    return (
        <section
            className="w-full flex items-center justify-center relative"
            style={{
                height,
                backgroundImage: `url(${backgroundImage})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* content */}
            <div className="relative z-10 w-full flex justify-center items-center px-4">
                <div className="text-center text-offwhite max-w-2xl px-4">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl text-offwhite leading-tight">
                        {title}
                    </h1>
                    {subTitle && (
                        <p className="mt-2 text-offwhite text-sm sm:text-base md:text-lg tracking-wide">
                            {subTitle}
                        </p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Hero;
