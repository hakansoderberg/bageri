import SlimInfoBox from "./slim-info-box";
import mainContent from "../content/main.json";

const OpeningHours: React.FC = () => {
    const leftSection = (
        <div>
            <span className="block font-mono text-xs tracking-wider uppercase text-[var(--gullgossen)]/80 mb-2">
                Lunch
            </span>
            <span className="text-2xl font-semibold font-merry text-[var(--gdansk)]">
                {mainContent.openingHours.title2}
            </span>
        </div>
    );

    const rightSection = (
        <div>
            <span className="block text-xs tracking-wider uppercase text-[var(--gullgossen)]/80 mb-2">Övrigt</span>
            <p className="text-sm leading-relaxed text-[var(--muted)]">{mainContent.openingHours.text}</p>
        </div>
    );

    return (
         <SlimInfoBox leftSection={leftSection} rightSection={rightSection} />
    );
};

export default OpeningHours;
