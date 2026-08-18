interface BuffeCardProps {
  namn: string;
  ratter: string[];
  pris: string;
  enhet?: string; // default "kr/pers"
}

const BuffeCard: React.FC<BuffeCardProps> = ({ namn, ratter, pris, enhet }) => {
  return (
    <div className="border border-[var(--color-gold)] p-7 text-center flex flex-col">
      <div className="text-[var(--color-gold)] tracking-[5px] mb-4">❖</div>

      <h3 className="font-merry text-2xl text-[var(--color-gold)] mb-[18px]">
        {namn}
      </h3>

      <ul className="text-left flex-1 mb-[22px]">
        {ratter.map((r) => (
          <li
            key={r}
            className="font-merry text-base text-[var(--color-text-offwhite)] py-[5px] pl-[18px] relative before:content-['·'] before:absolute before:left-1 before:text-[var(--color-gold)]"
          >
            {r}
          </li>
        ))}
      </ul>

      <div className="border-t border-[var(--color-divider)] pt-4">
        <span className="font-merry font-bold text-[32px] text-[var(--color-gold)]">
          {pris}
        </span>{" "}
        <span className="font-merry text-[15px] text-[var(--color-gold-soft)]">
          {enhet ?? "kr/pers"}
        </span>
      </div>
    </div>
  );
};

export default BuffeCard;
