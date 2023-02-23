import { useMemo } from "react";

const ContainerWidget = ({
  activeUsers,
  progressText,
  newUsersText,
  activeUsersCount,
  propLeft,
  propLeft1,
}) => {
  const widgetMSizeBigCircleCStyle = useMemo(() => {
    return {
      left: propLeft,
    };
  }, [propLeft]);

  const progressIconStyle = useMemo(() => {
    return {
      left: propLeft1,
    };
  }, [propLeft1]);

  return (
    <div
      className="absolute top-[calc(50%_+_244px)] left-[60px] rounded-base w-[220px] overflow-hidden flex flex-row items-center justify-start gap-[18px] text-center text-5xl text-gray-200 font-headline-h52"
      style={widgetMSizeBigCircleCStyle}
    >
      <div className="relative w-[88px] h-[88px] shrink-0">
        <div className="absolute w-[70.85%] top-[calc(50%_-_18px)] left-[14.77%] font-light inline-block h-[37.41px]">
          <span className="tracking-[0.11px]">{activeUsers}</span>%
        </div>
        <img
          className="absolute top-[0px] left-[0px] w-[88px] h-[88px]"
          alt=""
          src="../background.svg"
        />
        <img
          className="absolute top-[0px] left-[42px] w-[88px] h-[88px]"
          alt=""
          src={progressText}
          style={progressIconStyle}
        />
      </div>
      <div className="overflow-hidden flex flex-col items-start justify-start gap-[1px] text-left text-2xl text-night-blue2 font-tips-and-details-caption1">
        <div className="relative tracking-[0.44px] leading-[32px] inline-block w-[69.83px] h-[29.93px] shrink-0">
          {newUsersText}
        </div>
        <div className="relative text-base tracking-[0.44px] leading-[24px] font-light font-headline-h52 inline-block w-[102.25px] h-[24.94px] shrink-0">
          {activeUsersCount}
        </div>
      </div>
    </div>
  );
};

export default ContainerWidget;
