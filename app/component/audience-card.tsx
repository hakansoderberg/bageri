import Link from "next/link";
import { LucideIcon } from "lucide-react";

interface AudienceCardProps {
    linkUrl: string;
    icon: LucideIcon;
    title: string;
    text: string;
    linkLabel: string;
}

const AudienceCard: React.FC<AudienceCardProps> = ({ linkUrl, icon: Icon, title, text, linkLabel }) => {
    return (
        <Link
            href={linkUrl}
            className="group flex flex-col items-center justify-between gap-6 rounded-xs border border-[var(--color-gold)] bg-[var(--color-navy-deep)] px-8 py-10 text-center transition-colors duration-200 hover:bg-[var(--color-navy-surface)]"
        >
            <div className="flex flex-col items-center gap-4">
                <Icon className="h-10 w-10 text-[var(--color-gold)]" strokeWidth={1.5} />
                <h3 className="!mb-0 text-[var(--color-gold)]">{title}</h3>
                <p className="!mb-0 text-sm text-[var(--color-text-muted)]">{text}</p>
            </div>
            <span className="text-sm font-semibold text-[var(--color-gold)]">
                {linkLabel} →
            </span>
        </Link>
    );
};

export default AudienceCard;
