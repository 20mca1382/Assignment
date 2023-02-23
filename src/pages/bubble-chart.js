import InvestmentContainer from "../components/investment-container";
import Header from "../components/header";
import CompositeIndexContainer from "../components/composite-index-container";
import WorldHexagonMap from "./world-hexagon-map";
import WorldHexagonMap1 from "./world-hexagon-map1";

const BubbleChart = () => {
  return (
    <>
    <div className="relative bg-gray-100 w-full h-[1080px] overflow-hidden text-center text-7xl text-night-blue2 font-headline-h52">
      <div className="absolute h-[90.93%] w-[79.17%] top-[5.56%] right-[0%] bottom-[3.52%] left-[20.83%] rounded-tl-large rounded-tr-none rounded-br-none rounded-bl-large bg-aliceblue" />
      <InvestmentContainer />
      <div className="absolute top-[calc(50%_-_449px)] left-[59px] text-6xl tracking-[-0.44px] leading-[44px] text-black text-left">
        Design faster
      </div>
      <img
        className="absolute top-[calc(50%_-_320px)] left-[calc(50%_+_517px)] w-[265px] h-[265px]"
        alt=""
        src="../bubble.svg"
      />
      <img
        className="absolute h-[21.76%] w-[12.24%] top-[57.04%] right-[22.55%] bottom-[21.2%] left-[65.21%] max-w-full overflow-hidden max-h-full"
        alt=""
        src="../bubble1.svg"
      />
      <img
        className="absolute top-[calc(50%_+_200px)] left-[calc(50%_-_371px)] w-[221px] h-[221px]"
        alt=""
        src="../bubble2.svg"
      />
      <img
        className="absolute top-[calc(50%_-_397px)] left-[calc(50%_-_423px)] w-[207px] h-[207px]"
        alt=""
        src="../bubble3.svg"
      />
      <img
        className="absolute top-[calc(50%_+_169px)] left-[calc(50%_+_517px)] w-[207px] h-[207px]"
        alt=""
        src="../bubble4.svg"
      />
      <b className="absolute top-[95px] left-[calc(50%_+_121px)] text-2xs tracking-[5px] leading-[16px] uppercase font-open-sans text-darkslateblue-200 text-left">
        Timeline
      </b>
      <div className="absolute top-[126px] left-[calc(50%_-_13px)] w-[351px] h-9 text-sm text-black font-tips-and-details-caption1">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-xxl bg-snow4" />
        <div className="absolute h-[88.89%] w-[98.29%] top-[5.56%] right-[0.85%] bottom-[5.56%] left-[0.85%] overflow-hidden flex flex-row items-center justify-start gap-[20px]">
          <div className="relative w-[53px] h-8 shrink-0">
            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0px] tracking-[0.44px] leading-[20px] inline-block">
              1W
            </div>
          </div>
          <div className="relative w-[53px] h-8 shrink-0">
            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0px] tracking-[0.44px] leading-[20px] inline-block">
              1M
            </div>
          </div>
          <div className="relative w-[53px] h-8 shrink-0 text-[13px] text-snow4 font-mulish">
            <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-2xl bg-mediumslateblue-200" />
            <b className="absolute w-full top-[calc(50%_-_8px)] left-[0px] tracking-[0.02px] inline-block">
              3M
            </b>
          </div>
          <div className="relative w-[53px] h-8 shrink-0">
            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0px] tracking-[0.44px] leading-[20px] inline-block">
              1Y
            </div>
          </div>
          <div className="relative w-[53px] h-8 shrink-0">
            <div className="absolute w-full top-[calc(50%_-_8px)] left-[0px] tracking-[0.44px] leading-[20px] inline-block">
              ALL
            </div>
          </div>
        </div>
      </div>
      <Header />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] h-[38px] text-left text-2xs text-steelblue-300 font-tips-and-details-caption1">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
        <b className="absolute top-[calc(50%_-_8px)] left-[67px] tracking-[1.5px] leading-[16px] uppercase">
          Orion data visualisation
        </b>
        <b className="absolute top-[calc(50%_-_8px)] right-[67px] tracking-[1.5px] leading-[16px] uppercase text-right">
          2022
        </b>
      </div>
      <div className="absolute w-[5.21%] right-[54.06%] bottom-[89px] left-[40.73%] h-[146px]">
        <div className="absolute top-[66px] left-[-3px] tracking-[-1.5px] leading-[80px] font-light">
          204
        </div>
        <b className="absolute top-[62px] left-[9px] text-2xs tracking-[1.5px] leading-[16px] uppercase font-tips-and-details-caption1">
          Trend goods
        </b>
        <img
          className="absolute top-[0px] left-[-53px] w-[206px] h-[226px]"
          alt=""
          src="../icon1.svg"
        />
      </div>
      <div className="absolute w-[5.21%] right-[38.96%] bottom-[89px] left-[55.83%] h-[146px]">
        <div className="absolute top-[66px] left-[-44px] tracking-[-1.5px] leading-[80px] font-light">
          65,540
        </div>
        <b className="absolute top-[62px] left-[-1px] text-2xs tracking-[1.5px] leading-[16px] uppercase font-tips-and-details-caption1">
          Shopping views
        </b>
        <img
          className="absolute top-[0px] left-[-53px] w-[206px] h-[226px]"
          alt=""
          src="../icon2.svg"
        />
      </div>
      <div className="absolute w-[5.21%] right-[23.85%] bottom-[89px] left-[70.94%] h-[146px]">
        <div className="absolute top-[66px] left-[-2px] tracking-[-1.5px] leading-[80px] font-light">
          324
        </div>
        <b className="absolute top-[62px] left-[-2px] text-2xs tracking-[1.5px] leading-[16px] uppercase font-tips-and-details-caption1">
          Store dynamics
        </b>
        <img
          className="absolute top-[0px] left-[-53px] w-[206px] h-[226px]"
          alt=""
          src="../icon3.svg"
        />
      </div>
      <img
        className="absolute top-[391px] left-[1734px] w-[186px] h-[478px]"
        alt=""
        src="../panel-group.svg"
      />
      <div className="absolute top-[166px] left-[60px] rounded-base bg-snow4 shadow-[0px_100px_80px_rgba(108,_73,_172,_0.07),_0px_41.777610778808594px_33.42px_rgba(108,_73,_172,_0.05),_0px_22.3363094329834px_17.87px_rgba(108,_73,_172,_0.04),_0px_12.521552085876465px_10.02px_rgba(108,_73,_172,_0.04),_0px_6.650102138519287px_5.32px_rgba(108,_73,_172,_0.03),_0px_2.767256498336792px_2.21px_rgba(108,_73,_172,_0.02)] overflow-hidden flex flex-col py-5 px-0 items-center justify-start gap-[30px] text-2xl font-tips-and-details-caption1">
        <div className="rounded-base bg-snow4 overflow-hidden flex flex-col py-0 px-[30px] items-center justify-start gap-[16px]">
          <img
            className="relative w-[146px] h-[146px] shrink-0"
            alt=""
            src="../chart--double-big-circle-chart.svg"
          />
          <div className="overflow-hidden flex flex-col items-center justify-start">
            <div className="overflow-hidden flex flex-col items-start justify-start">
              <div className="relative tracking-[0.44px] leading-[32px] inline-block w-[225px]">
                Total earning
              </div>
            </div>
            <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px] text-4xl font-headline-h52">
              <div className="relative leading-[36px] font-semibold">
                $12,875
              </div>
              <div className="h-[26px] overflow-hidden flex flex-row items-start justify-start text-sm text-electric-green1 font-tips-and-details-caption1">
                <img
                  className="relative w-3.5 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="../arrow-up.svg"
                />
                <div className="relative tracking-[0.44px] leading-[20px] flex items-center justify-center w-6 h-7 shrink-0">
                  2%
                </div>
              </div>
            </div>
            <div className="relative text-xs tracking-[0.4px] leading-[16px] inline-block w-[230px] opacity-[0.6] mix-blend-normal">
              Compared to $21,504 last year
            </div>
          </div>
        </div>
        <div className="rounded-base bg-snow4 overflow-hidden flex flex-col py-0 px-[30px] items-start justify-start gap-[11px] text-left text-sm">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[88px] shrink-0">
              Presentation
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[42px] shrink-0 opacity-[0.6]">
              862
            </div>
            <div className="relative w-[68px] h-[21px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[19px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[35px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[51px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <img
                className="absolute top-[4px] left-[0px] w-[68px] h-[13px]"
                alt=""
                src="../chart.svg"
              />
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[88px] shrink-0">
              Development
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[42px] shrink-0 opacity-[0.6]">
              753
            </div>
            <div className="relative w-[68px] h-[21px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[19px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[35px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[51px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <img
                className="absolute top-[4px] left-[0px] w-[68px] h-[12.95px]"
                alt=""
                src="../chart1.svg"
              />
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[16px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[88px] shrink-0">
              Research
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[42px] shrink-0 opacity-[0.6]">
              553
            </div>
            <div className="relative w-[68px] h-[21px] shrink-0">
              <div className="absolute top-[0px] left-[0px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[19px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[35px] rounded-xxs bg-lavender2 w-3.5 h-[21px] opacity-[0.7]" />
              <div className="absolute top-[0px] left-[51px] rounded-xxs bg-lavender2 w-[17px] h-[21px] opacity-[0.7]" />
              <img
                className="absolute top-[5px] left-[0px] w-[67px] h-[9.88px]"
                alt=""
                src="../chart2.svg"
              />
            </div>
          </div>
        </div>
      </div>
      <CompositeIndexContainer />
      <div className="absolute top-[calc(50%_+_335px)] left-[60px] rounded-base bg-snow4 shadow-[0px_100px_80px_rgba(108,_73,_172,_0.07),_0px_41.777610778808594px_33.42px_rgba(108,_73,_172,_0.05),_0px_22.3363094329834px_17.87px_rgba(108,_73,_172,_0.04),_0px_12.521552085876465px_10.02px_rgba(108,_73,_172,_0.04),_0px_6.650102138519287px_5.32px_rgba(108,_73,_172,_0.03),_0px_2.767256498336792px_2.21px_rgba(108,_73,_172,_0.02)] overflow-hidden flex flex-col py-5 px-[30px] items-center justify-start gap-[14px] text-left text-sm font-tips-and-details-caption1">
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[98px] shrink-0">
              Travel
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] text-steelblue-100 inline-block w-[50px] shrink-0">
              760
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[50px] shrink-0">
              2,540
            </div>
          </div>
          <div className="h-5 overflow-hidden flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../arrow-up3.svg"
            />
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden hidden"
              alt=""
              src="../arrow-up4.svg"
            />
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[98px] shrink-0">
              Presentation
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] text-steelblue-100 inline-block w-[50px] shrink-0">
              650
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[50px] shrink-0">
              2,304
            </div>
          </div>
          <div className="h-5 overflow-hidden flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden hidden"
              alt=""
              src="../arrow-up3.svg"
            />
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../arrow-up4.svg"
            />
          </div>
        </div>
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
          <div className="overflow-hidden flex flex-row items-start justify-start gap-[6px]">
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[98px] shrink-0">
              Business
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] text-steelblue-100 inline-block w-[50px] shrink-0">
              612
            </div>
            <div className="relative tracking-[0.44px] leading-[20px] inline-block w-[50px] shrink-0">
              2,140
            </div>
          </div>
          <div className="h-5 overflow-hidden flex flex-row items-center justify-start gap-[10px]">
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden"
              alt=""
              src="../arrow-up3.svg"
            />
            <img
              className="relative w-3.5 h-6 shrink-0 overflow-hidden hidden"
              alt=""
              src="../arrow-up4.svg"
            />
          </div>
        </div>
      </div>
    </div>
    <WorldHexagonMap/>
    <WorldHexagonMap1/>
    </>
  );
};

export default BubbleChart;
