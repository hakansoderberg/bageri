import { Cake, ConciergeBell, Heart, LucideIcon, Salad, Sandwich, Truck } from "lucide-react";

const icons: Record<string, LucideIcon> = {
  cake: Cake,
  buffet: ConciergeBell,
  sandwich: Sandwich,
  salad: Salad,
  truck: Truck,
  heart: Heart,
};

interface Offering {
  name: string;
  note?: string;
  icon: string;
}

interface OfferingsProps {
  title: string;
  items: Offering[];
}

const Offerings: React.FC<OfferingsProps> = ({ title, items }) => {
  return (
    <section className="w-full">
      <div className="flex items-center gap-4">
        <span className="flex-1 border-t border-[var(--color-gold)]" />
        <h2 className="font-merry font-semibold text-xl sm:text-2xl text-center tracking-wide sm:tracking-widest text-[var(--color-gold)] uppercase">
          {title}
        </h2>
        <span className="flex-1 border-t border-[var(--color-gold)]" />
      </div>

      <ul className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-y-8">
        {items.map((item) => {
          const Icon = icons[item.icon] ?? Heart;
          return (
            <li
              key={item.name}
              className="flex flex-col items-center text-center px-3 lg:border-l lg:first:border-l-0 border-[var(--color-gold)]/40"
            >
              <Icon className="size-9 text-[var(--color-gold)]" strokeWidth={1.25} aria-hidden />
              <span className="mt-3 font-merry font-semibold text-sm tracking-wide uppercase text-[var(--color-text-muted)]">
                {item.name}
              </span>
              {item.note && (
                <span className="mt-1 font-merry text-xs text-[var(--color-text-offwhite)]/75">
                  {item.note}
                </span>
              )}
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default Offerings;
