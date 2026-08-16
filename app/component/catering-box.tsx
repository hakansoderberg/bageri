interface MenuItem {
  name: string;
  description?: string;
  price: string;
  unit?: string;
}

interface CateringMenuProps {
  title: string;
  items: MenuItem[];
}

const CateringMenu: React.FC<CateringMenuProps> = ({ title, items  }) => {

  return (
    <div className={`w-full border border-[var(--gullgossen)] rounded-sm px-6 py-8 sm:px-11 sm:py-10 mx-auto`}>
      {/* Rubrik */}
      <h2 className="font-merry font-semibold text-xl sm:text-2xl text-center tracking-wide sm:tracking-widest text-[var(--gullgossen)] uppercase">
        {title}
      </h2>

      {/* Rätter */}
      {items.map((item, i) => (
        <div
          key={item.name}
          className={`${i > 0 ? "border-t border-[var(--gdansk)] mt-5 pt-5" : "mt-8"}`}
        >
          <div className="flex flex-col sm:flex-row sm:items-baseline gap-1 sm:gap-2.5">
            <span className="font-merry font-semibold text-lg sm:text-xl tracking-wide uppercase text-[var(--gdansk)]">
              {item.name}
            </span>

            {/* Prickad linje — visas bara när namn+pris delar en rad (sm och uppåt) */}
            <span className="hidden sm:block flex-1 border-b border-dotted border-[var(--muted)] -translate-y-1.5 h-0" />

            <span className="flex items-baseline gap-1 sm:whitespace-nowrap">
              <span className="font-merry font-semibold text-2xl sm:text-[28px] text-[var(--gullgossen)]">
                {item.price}
              </span>
              <span className="font-merry text-sm text-[var(--gullgossen-soft)]">
                {item.unit ?? "kr/person"}
              </span>
            </span>
          </div>

          {item.description && (
            <div className="font-merry text-base sm:text-[17px] text-[var(--gdansk)]/85 mt-1">
              {item.description}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default CateringMenu;