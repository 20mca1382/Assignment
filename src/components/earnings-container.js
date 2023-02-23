const EarningsContainer = ({
  totalEarningsText,
  salesEarningsText,
  percentageEarningsText,
}) => {
  return (
    <div className="overflow-hidden flex flex-col items-start justify-start gap-[2px] text-left text-base text-snow4 font-headline-h52">
      <div className="w-[134px] overflow-hidden flex flex-col items-start justify-start">
        <div className="relative tracking-[0.44px] leading-[24px] font-light inline-block w-[129px]">
          {totalEarningsText}
        </div>
      </div>
      <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px] text-6xl">
        <div className="relative tracking-[-0.44px] leading-[44px]">
          {salesEarningsText}
        </div>
        <div className="h-[26px] overflow-hidden flex flex-row items-start justify-start text-sm text-springgreen font-tips-and-details-caption1">
          <img
            className="relative w-3.5 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../arrow-up1.svg"
          />
          <div className="relative tracking-[0.44px] leading-[20px] flex items-center w-[37px] h-[26px] shrink-0">
            {percentageEarningsText}
          </div>
        </div>
      </div>
      <div className="relative text-xs tracking-[0.4px] leading-[16px] font-tips-and-details-caption1 inline-block w-[230px] opacity-[0.6] mix-blend-normal">
        Compared to $21,490 last year
      </div>
    </div>
  );
};

export default EarningsContainer;
