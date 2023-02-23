import { useMemo } from "react";

const MapPinContainer = ({
  cityPopulationText,
  cityPopulationLabel,
  cityPopulationValue,
  propTop,
  propRight,
}) => {
  const mapPinPinWithNameStyle = useMemo(() => {
    return {
      top: propTop,
      right: propRight,
    };
  }, [propTop, propRight]);

  return (
    <div
      className="absolute top-[calc(50%_-_250px)] right-[1147px] shadow-[0px_140.8308868408203px_112.66px_rgba(41,_52,_149,_0.21),_0px_58.83578109741211px_47.07px_rgba(41,_52,_149,_0.15),_0px_31.456422805786133px_25.17px_rgba(41,_52,_149,_0.13),_0px_17.634212493896484px_14.11px_rgba(41,_52,_149,_0.1),_0px_9.365398406982422px_7.49px_rgba(41,_52,_149,_0.08),_0px_3.8971519470214844px_3.12px_rgba(41,_52,_149,_0.06)] w-[180px] h-[72px] text-left text-base text-night-blue2 font-headline-h52"
      style={mapPinPinWithNameStyle}
    >
      <div className="absolute top-[0px] left-[0px] rounded-2xl bg-snow4 overflow-hidden flex flex-row py-1.5 px-2.5 items-center justify-start gap-[12px]">
        <img
          className="relative w-10 h-10 shrink-0"
          alt=""
          src={cityPopulationText}
        />
        <div className="overflow-hidden flex flex-col items-start justify-start">
          <div className="relative tracking-[0.44px] leading-[20px] font-light">
            {cityPopulationLabel}
          </div>
          <div className="relative text-2xl tracking-[0.15px] leading-[28px] font-semibold">
            {cityPopulationValue}
          </div>
        </div>
      </div>
      <img
        className="absolute bottom-[0px] left-[calc(50%_-_10.99px)] w-[22.27px] h-[13.5px]"
        alt=""
        src="../arrow.svg"
      />
    </div>
  );
};

export default MapPinContainer;
