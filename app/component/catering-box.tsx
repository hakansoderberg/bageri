interface MenuItem {
  name: string;
  description?: string;
  price: string;
  unit?: string; // t.ex. "kr/person" — default nedan
}

interface CateringMenuProps {
  title: string;
  items: MenuItem[];
}

const CateringMenu: React.FC<CateringMenuProps> = ({ title, items }) => {
  return (
    <div className="w-3/4 border border-[var(--gullgossen)] rounded-sm px-11 py-10 mx-auto">
      {/* Rubrikrad med flankerande linjer */}
        <h2 className="font-merry font-semibold text-2xl text-center tracking-widest text-[var(--gullgossen)] whitespace-nowrap uppercase">
          {title}
        </h2>

      {/* Rätter */}
      {items.map((item, i) => (
        <div
          key={item.name}
          className={i > 0 ? "border-t border-[var(--gdansk)] mt-5 pt-5" : ""}
        >
          <div className="flex items-baseline gap-2.5">
            <span className="font-merry font-semibold text-xl tracking-wide uppercase text-[var(--gdansk)] whitespace-nowrap">
              {item.name}
            </span>
            <span className="flex-1 border-b border-dotted border-[var(--muted)] -translate-y-1.5 h-0" />
            <span className="flex items-baseline gap-1 whitespace-nowrap">
              <span className="font-merry font-semibold text-[28px] text-[var(--gullgossen)]">
                {item.price}
              </span>
              <span className="font-merry text-sm text-[var(--gullgossen-soft)]">
                {item.unit ?? "kr/person"}
              </span>
            </span>
          </div>
          {item.description && (
            <div className="font-merry text-[17px] text-[var(--gdansk)]/85 mt-1">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CateringMenu;