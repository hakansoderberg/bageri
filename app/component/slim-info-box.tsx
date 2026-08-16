interface SlimInfoBoxProps {
    leftSection: React.ReactNode;
    rightSection?: React.ReactNode;
}
const SlimInfoBox = ({ leftSection, rightSection }: SlimInfoBoxProps) => {
    return (
        <div className="border border-[var(--color-gold)] grid grid-cols-1 md:grid-cols-2 ">
            <div className="p-4 md:p-6 border-b md:border-b-0 md:border-r border-dashed border-[var(--color-link)]">
                {leftSection}
            </div>

            <div className="p-4 md:p-6">{rightSection}</div>
        </div>
    );
};

export default SlimInfoBox;
