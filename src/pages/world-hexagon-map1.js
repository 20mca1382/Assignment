import Header2 from "../components/header2";
import MapContainer from "../components/map-container";
import MSizeContainer from "../components/m-size-container";
import TimelineChartContainer from "../components/timeline-chart-container";

const WorldHexagonMap1 = () => {
  return (
    <div className="relative rounded-base bg-ghostwhite w-full overflow-hidden d-flex flex-col items-center justify-center-space-between text-left text-2xl text-night-blue2 font-tips-and-details-caption1">
      <Header2 />
      <img
        className="relative w-10 h-10 shrink-0 overflow-hidden"
        alt=""
        src="../wstflogo-12.svg"
      />
      <div className="relative text-3xl font-archivo text-black inline-block w-[360px] h-11 shrink-0">
        WSTF FRONT-END HACKATHON
      </div>
      <div className="flex flex-row items-end justify-start gap-[24px] font-headline-h52">
        <div className="relative tracking-[0.15px] leading-[32px] font-semibold">
          All users
        </div>
        <div className="flex flex-row items-center justify-start gap-[1px] text-2xs font-tips-and-details-caption1">
          <b className="relative tracking-[1.5px] leading-[16px] uppercase">
            Detail
          </b>
          <img
            className="relative w-6 h-6 shrink-0 overflow-hidden"
            alt=""
            src="../arow1.svg"
          />
        </div>
      </div>
      <MapContainer
        cityPopulation="../indicator6.svg"
        cityName="Berlin"
        cityPopulationComparison="76,541,106"
        cityPopulationComparisonI="../arrow.svg"
      />
      <div className="relative text-8xl tracking-[-1.75px] leading-[118px] font-medium font-headline-h52">
        2,431,340
      </div>
      <MapContainer
        cityPopulation="../indicator7.svg"
        cityName="Chicago"
        cityPopulationComparison="98,320,300"
        cityPopulationComparisonI="../arrow.svg"
      />
      <MapContainer
        cityPopulation="../indicator8.svg"
        cityName="Shanghai"
        cityPopulationComparison="239,570,110"
        cityPopulationComparisonI="../arrow.svg"
      />
      <MapContainer
        cityPopulation="../indicator9.svg"
        cityName="Giza"
        cityPopulationComparison="10,547,980"
        cityPopulationComparisonI="../arrow.svg"
      />
      <img
        className="relative w-[1501px] h-[935.95px] shrink-0"
        alt=""
        src="../hex-map1.svg"
      />
      <div className="flex flex-col items-start justify-start gap-[30px]">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[26px]">
          <img
            className="relative w-[70px] h-[70px] shrink-0"
            alt=""
            src="../icon9.svg"
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="relative tracking-[0.44px] leading-[32px]">
              Total earning
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] font-headline-h52">
              <div className="relative tracking-[0.15px] leading-[32px] font-semibold">
                540,549
              </div>
              <div className="relative w-[41px] h-7 shrink-0 hidden text-sm text-electric-green1 font-tips-and-details-caption1">
                <img
                  className="absolute h-[28.57%] w-[34.15%] top-[46.43%] right-[65.85%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../up3.svg"
                />
                <div className="absolute h-full w-[60.98%] top-[0%] left-[39.02%] tracking-[0.44px] leading-[20px] flex items-center">
                  145
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[26px]">
          <img
            className="relative w-[70px] h-[70px] shrink-0"
            alt=""
            src="../icon10.svg"
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="relative tracking-[0.44px] leading-[32px]">
              Sales
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] font-headline-h52">
              <div className="relative tracking-[0.15px] leading-[32px] font-semibold">
                1,205,677
              </div>
              <div className="relative w-[41px] h-7 shrink-0 hidden text-sm text-electric-green1 font-tips-and-details-caption1">
                <img
                  className="absolute h-[28.57%] w-[34.15%] top-[46.43%] right-[65.85%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../up4.svg"
                />
                <div className="absolute h-full w-[60.98%] top-[0%] left-[39.02%] tracking-[0.44px] leading-[20px] flex items-center">
                  145
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[26px]">
          <img
            className="relative w-[70px] h-[70px] shrink-0"
            alt=""
            src="../icon11.svg"
          />
          <div className="overflow-hidden flex flex-col items-start justify-start">
            <div className="relative tracking-[0.44px] leading-[32px]">
              Purchase
            </div>
            <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px] font-headline-h52">
              <div className="relative tracking-[0.15px] leading-[32px] font-semibold">
                48,430,039
              </div>
              <div className="relative w-[41px] h-7 shrink-0 hidden text-sm text-electric-green1 font-tips-and-details-caption1">
                <img
                  className="absolute h-[28.57%] w-[34.15%] top-[46.43%] right-[65.85%] bottom-[25%] left-[0%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../up3.svg"
                />
                <div className="absolute h-full w-[60.98%] top-[0%] left-[39.02%] tracking-[0.44px] leading-[20px] flex items-center">
                  145
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <MapContainer
        cityPopulation="../indicator10.svg"
        cityName="Manaus"
        cityPopulationComparison="12,320,300"
        cityPopulationComparisonI="../arrow10.svg"
      />
      <MapContainer
        cityPopulation="../indicator11.svg"
        cityName="Queensland"
        cityPopulationComparison="6,097,321"
        cityPopulationComparisonI="../arrow10.svg"
      />
      <MSizeContainer
        progressText="27"
        progressValue="../progress2.svg"
        activeUsersText="92,980"
        newUsersText="Active users"
        propLeft="42px"
      />
      <MSizeContainer
        progressText="67"
        progressValue="../progress3.svg"
        activeUsersText="22,652"
        newUsersText="New users"
        propLeft="0.97px"
      />
      <TimelineChartContainer />
      <div className="relative w-[1920px] h-[38px] shrink-0 text-2xs text-steelblue-300">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
        <b className="absolute top-[calc(50%_-_8px)] left-[67px] tracking-[1.5px] leading-[16px] uppercase">
          Orion data visualisation
        </b>
        <b className="absolute top-[calc(50%_-_8px)] right-[67px] tracking-[1.5px] leading-[16px] uppercase text-right">
          2019
        </b>
      </div>
      <div className="relative w-[1920px] h-[38px] shrink-0 text-2xs text-steelblue-300">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
        <b className="absolute top-[calc(50%_-_8px)] left-[67px] tracking-[1.5px] leading-[16px] uppercase">
          Orion data visualisation
        </b>
        <b className="absolute top-[calc(50%_-_8px)] right-[67px] tracking-[1.5px] leading-[16px] uppercase text-right">
          2022
        </b>
      </div>
    </div>
  );
};

export default WorldHexagonMap1;
