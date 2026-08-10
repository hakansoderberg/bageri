type HeroProps = {
  children: React.ReactNode;
  backgroundImage: string;
  height?: string; // valfri, ex "70vh"
};

const Hero: React.FC<HeroProps> = ({
  children,
  backgroundImage,
  height = "60vh",
}) => {
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
        {children}
      </div>
    </section>
  );
};

export default Hero;