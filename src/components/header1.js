const Header1 = () => {
  return (
    <div className="absolute w-full top-[0px] right-[0%] left-[0%] h-[60px] text-left text-base text-lightslategray font-headline-h52">
      <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
      <div className="absolute top-[calc(50%_-_16px)] left-[calc(50%_-_560px)] w-[520px] h-8">
        <div className="absolute top-[0px] left-[0px] rounded-lg bg-ghostwhite w-[520px] h-8" />
        <img
          className="absolute top-[calc(50%_-_12px)] right-[7px] w-6 h-6 overflow-hidden"
          alt=""
          src="../icon.svg"
        />
      </div>
      <div className="absolute h-[5%] w-[5.52%] top-[95%] right-[33.59%] bottom-[0%] left-[60.89%] bg-darkslateblue-100" />
      <div className="absolute top-[calc(50%_-_12px)] left-[calc(50%_+_67px)] overflow-hidden flex flex-row items-center justify-start gap-[84px]">
        <div className="relative tracking-[0.44px] leading-[24px] font-light">
          Statistics
        </div>
        <div className="relative tracking-[0.44px] leading-[24px] font-light text-black">
          Overview
        </div>
        <div className="relative tracking-[0.44px] leading-[24px] font-light">
          Dashboard
        </div>
        <div className="relative tracking-[0.44px] leading-[24px] font-light">
          Analytics
        </div>
      </div>
      <img
        className="absolute top-[calc(50%_-_12px)] right-[110px] w-6 h-6 overflow-hidden"
        alt=""
        src="../profile.svg"
      />
      <img
        className="absolute top-[calc(50%_-_12px)] right-[60px] w-6 h-6 overflow-hidden"
        alt=""
        src="../option.svg"
      />
    </div>
  );
};

export default Header1;
