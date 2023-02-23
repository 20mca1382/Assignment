import LSizeContainer from "../components/l-size-container";
import Header1 from "../components/header1";
import ContainerWidget from "../components/container-widget";
import MapPinContainer from "../components/map-pin-container";
import ChicagoContainer from "../components/chicago-container";

const WorldHexagonMap = () => {
  return (
    <div className="relative rounded-base bg-ghostwhite w-full h-[1080px] overflow-hidden text-left text-2xs text-night-blue2 font-tips-and-details-caption1">
      <LSizeContainer />
      <Header1 />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] h-[38px] text-steelblue-300">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
        <b className="absolute top-[calc(50%_-_8px)] left-[67px] tracking-[1.5px] leading-[16px] uppercase">
          Orion data visualisation
        </b>
        <b className="absolute top-[calc(50%_-_8px)] right-[67px] tracking-[1.5px] leading-[16px] uppercase text-right">
          2019
        </b>
      </div>
      <div className="absolute top-[406px] left-[60px] flex flex-col items-start justify-start gap-[30px] text-2xl">
        <div className="overflow-hidden flex flex-row items-center justify-start gap-[26px]">
          <img
            className="relative w-[70px] h-[70px] shrink-0"
            alt=""
            src="../icon5.svg"
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
                  src="../up.svg"
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
            src="../icon6.svg"
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
                  src="../up.svg"
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
            src="../icon7.svg"
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
                  src="../up.svg"
                />
                <div className="absolute h-full w-[60.98%] top-[0%] left-[39.02%] tracking-[0.44px] leading-[20px] flex items-center">
                  145
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ContainerWidget
        activeUsers="27"
        progressText="../progress.svg"
        newUsersText="92,980"
        activeUsersCount="Active users"
        propLeft="60px"
        propLeft1="42px"
      />
      <ContainerWidget
        activeUsers="67"
        progressText="../progress1.svg"
        newUsersText="22,652"
        activeUsersCount="New users"
        propLeft="330px"
        propLeft1="0.97px"
      />
      <img
        className="absolute top-[calc(50%_-_431px)] right-[57px] w-[1501px] h-[935.95px]"
        alt=""
        src="../hex-map.svg"
      />
      <MapPinContainer
        cityPopulationText="../indicator.svg"
        cityPopulationLabel="Chicago"
        cityPopulationValue="98,320,300"
        propTop="calc(50% - 250px)"
        propRight="1147px"
      />
      <MapPinContainer
        cityPopulationText="../indicator1.svg"
        cityPopulationLabel="Manaus"
        cityPopulationValue="12,320,300"
        propTop="calc(50% - 3px)"
        propRight="1024px"
      />
      <MapPinContainer
        cityPopulationText="../indicator2.svg"
        cityPopulationLabel="Berlin"
        cityPopulationValue="76,541,106"
        propTop="calc(50% - 332px)"
        propRight="692px"
      />
      <MapPinContainer
        cityPopulationText="../indicator3.svg"
        cityPopulationLabel="Giza"
        cityPopulationValue="10,547,980"
        propTop="calc(50% - 116px)"
        propRight="605px"
      />
      <MapPinContainer
        cityPopulationText="../indicator4.svg"
        cityPopulationLabel="Shanghai"
        cityPopulationValue="239,570,110"
        propTop="calc(50% - 184px)"
        propRight="224px"
      />
      <MapPinContainer
        cityPopulationText="../indicator5.svg"
        cityPopulationLabel="Queensland"
        cityPopulationValue="6,097,321"
        propTop="calc(50% + 116px)"
        propRight="113px"
      />
      <div className="absolute w-full right-[0%] bottom-[0px] left-[0%] h-[38px] text-steelblue-300">
        <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] bg-snow4" />
        <b className="absolute top-[calc(50%_-_8px)] left-[67px] tracking-[1.5px] leading-[16px] uppercase">
          Orion data visualisation
        </b>
        <b className="absolute top-[calc(50%_-_8px)] right-[67px] tracking-[1.5px] leading-[16px] uppercase text-right">
          2022
        </b>
      </div>
      <div className="absolute top-[201px] left-[60px] text-8xl tracking-[-1.75px] leading-[118px] font-medium font-headline-h52">
        2,431,340
      </div>
      <div className="absolute top-[183px] left-[60px] flex flex-row items-end justify-start gap-[24px] text-2xl font-headline-h52">
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
            src="../arow.svg"
          />
        </div>
      </div>
      <div className="absolute top-[184px] left-[442px] rounded-[20px] bg-snow4 shadow-[0px_100px_80px_rgba(108,_73,_172,_0.07),_0px_41.777610778808594px_33.42px_rgba(108,_73,_172,_0.05),_0px_22.3363094329834px_17.87px_rgba(108,_73,_172,_0.04),_0px_12.521552085876465px_10.02px_rgba(108,_73,_172,_0.04),_0px_6.650102138519287px_5.32px_rgba(108,_73,_172,_0.03),_0px_2.767256498336792px_2.21px_rgba(108,_73,_172,_0.02)] overflow-hidden flex flex-col py-5 px-[30px] items-start justify-start gap-[37px] text-lg text-darkslategray">
        <div className="overflow-hidden flex flex-row items-start justify-start gap-[24px]">
          <div className="relative text-xl tracking-[0.11px] font-semibold font-headline-h52 text-gray-200 inline-block w-[451px] shrink-0">
            Sales Figures
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
            <div className="relative rounded-small bg-mediumpurple w-3 h-3 shrink-0" />
            <div className="relative tracking-[0.11px] leading-[27.59px] inline-block w-[100px] shrink-0">
              Sales
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
            <div className="relative rounded-small bg-gold w-3 h-3 shrink-0" />
            <div className="relative tracking-[0.11px] leading-[27.59px] inline-block w-[100px] shrink-0">
              Users
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
            <div className="relative rounded-small bg-lightcoral w-3 h-3 shrink-0" />
            <div className="relative tracking-[0.11px] leading-[27.59px] inline-block w-[100px] shrink-0">
              Product
            </div>
          </div>
          <div className="overflow-hidden flex flex-row items-center justify-start gap-[4px]">
            <div className="relative rounded-small bg-mediumslateblue-100 w-3 h-3 shrink-0" />
            <div className="relative tracking-[0.11px] leading-[27.59px] inline-block w-[100px] shrink-0">
              Team
            </div>
          </div>
        </div>
        <div className="relative w-[1011px] h-[423.08px] shrink-0 text-base text-night-blue2 font-headline-h52">
          <div className="absolute w-full top-[calc(50%_-_211.54px)] right-[0%] left-[0%] h-[423.08px]">
            <div className="absolute w-[3.08%] top-[calc(50%_-_211.54px)] right-[96.92%] left-[0%] h-[379px]">
              <div className="absolute w-[41.94%] top-[calc(50%_-_189.5px)] left-[29.43%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                1k
              </div>
              <div className="absolute w-[32.26%] top-[calc(50%_+_165.5px)] left-[58.86%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                0
              </div>
              <div className="absolute w-[96.77%] top-[calc(50%_+_94.5px)] left-[0%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                200
              </div>
              <div className="absolute w-full top-[calc(50%_+_23.5px)] left-[0%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                400
              </div>
              <div className="absolute w-full top-[calc(50%_-_47.5px)] left-[0%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                600
              </div>
              <div className="absolute w-full top-[calc(50%_-_118.5px)] left-[0%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                800
              </div>
            </div>
            <div className="absolute h-full w-[95.02%] top-[0%] right-[0%] bottom-[0%] left-[4.98%] text-center">
              <div className="absolute h-full w-[3.1%] top-[0%] right-[0%] bottom-[0%] left-[96.9%] overflow-hidden">
                <div className="absolute w-[107.92%] top-[calc(50%_+_185.25px)] left-[-3.07%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Dec
                </div>
                <img
                  className="absolute h-[90.81%] w-[3.85%] top-[0%] right-[50.17%] bottom-[9.19%] left-[45.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape.svg"
                />
              </div>
              <div className="absolute h-full w-[3.1%] top-[0%] right-[8.94%] bottom-[0%] left-[87.96%] overflow-hidden">
                <div className="absolute w-[104.55%] top-[calc(50%_+_185.25px)] left-[0.31%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Nov
                </div>
                <img
                  className="absolute h-[90.81%] w-[3.85%] top-[0%] right-[50.17%] bottom-[9.19%] left-[45.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape1.svg"
                />
              </div>
              <div className="absolute h-full w-[2.74%] top-[0%] right-[17.88%] bottom-[0%] left-[79.38%] overflow-hidden">
                <div className="absolute w-[114.37%] top-[calc(50%_+_185.25px)] left-[-9.45%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Oct
                </div>
                <img
                  className="absolute h-[90.81%] w-[4.35%] top-[0%] right-[52.36%] bottom-[9.19%] left-[43.29%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape2.svg"
                />
              </div>
              <div className="absolute h-full w-[2.98%] top-[0%] right-[26.46%] bottom-[0%] left-[70.56%] overflow-hidden">
                <div className="absolute w-[108.73%] top-[calc(50%_+_185.25px)] left-[-5.19%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Sep
                </div>
                <img
                  className="absolute h-[90.81%] w-[4%] top-[0%] right-[52.17%] bottom-[9.19%] left-[43.83%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape3.svg"
                />
              </div>
              <div className="absolute h-full w-[3.1%] top-[0%] right-[35.28%] bottom-[0%] left-[61.62%] overflow-hidden">
                <div className="absolute w-[111.29%] top-[calc(50%_+_185.25px)] left-[-3.07%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Aug
                </div>
                <img
                  className="absolute h-[90.81%] w-[3.85%] top-[0%] right-[50.17%] bottom-[9.19%] left-[45.99%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape4.svg"
                />
              </div>
              <div className="absolute h-full w-[2.5%] top-[0%] right-[44.22%] bottom-[0%] left-[53.28%] overflow-hidden">
                <div className="absolute w-[96.04%] top-[calc(50%_+_185.25px)] left-[2.17%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Jul
                </div>
                <img
                  className="absolute h-[90.81%] w-[4.76%] top-[0%] right-[52.59%] bottom-[9.19%] left-[42.65%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape5.svg"
                />
              </div>
              <div className="absolute h-full w-[2.98%] top-[0%] right-[52.56%] bottom-[0%] left-[44.46%] overflow-hidden">
                <div className="absolute w-[105.22%] top-[calc(50%_+_185.25px)] left-[-5.19%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Jun
                </div>
                <img
                  className="absolute h-[90.81%] w-[4%] top-[0%] right-[44.17%] bottom-[9.19%] left-[51.83%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape6.svg"
                />
              </div>
              <div className="absolute h-full w-[3.34%] top-[0%] right-[61.38%] bottom-[0%] left-[35.28%] overflow-hidden">
                <div className="absolute w-[106.48%] top-[calc(50%_+_185.25px)] left-[-4.48%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  May
                </div>
                <img
                  className="absolute h-[90.81%] w-[3.57%] top-[0%] right-[42.82%] bottom-[9.19%] left-[53.61%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape7.svg"
                />
              </div>
              <div className="absolute h-full w-[2.86%] top-[0%] right-[70.56%] bottom-[0%] left-[26.58%] overflow-hidden">
                <div className="absolute w-[102.3%] top-[calc(50%_+_185.25px)] left-[-5.22%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Apr
                </div>
                <img
                  className="absolute h-[90.81%] w-[4.17%] top-[0%] right-[41.62%] bottom-[9.19%] left-[54.21%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape8.svg"
                />
              </div>
              <div className="absolute h-full w-[3.1%] top-[0%] right-[79.26%] bottom-[0%] left-[17.64%] overflow-hidden">
                <div className="absolute w-[104.55%] top-[calc(50%_+_185.25px)] left-[-1.45%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Mar
                </div>
                <img
                  className="absolute h-[90.81%] w-[3.85%] top-[0%] right-[46.11%] bottom-[9.19%] left-[50.04%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape9.svg"
                />
              </div>
              <div className="absolute h-full w-[2.98%] top-[0%] right-[88.2%] bottom-[0%] left-[8.82%] overflow-hidden">
                <div className="absolute w-[105.22%] top-[calc(50%_+_185.25px)] left-[-5.01%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Feb
                </div>
                <img
                  className="absolute h-[90.81%] w-[4%] top-[0%] right-[39.95%] bottom-[9.19%] left-[56.05%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape10.svg"
                />
              </div>
              <div className="absolute h-full w-[2.98%] top-[0%] right-[97.02%] bottom-[0%] left-[0%] overflow-hidden">
                <div className="absolute w-[105.22%] top-[calc(50%_+_185.25px)] left-[-5.01%] tracking-[0.44px] leading-[24px] font-light inline-block opacity-[0.6]">
                  Jan
                </div>
                <img
                  className="absolute h-[90.81%] w-[4%] top-[0%] right-[43.95%] bottom-[9.19%] left-[52.05%] max-w-full overflow-hidden max-h-full"
                  alt=""
                  src="../shape11.svg"
                />
              </div>
            </div>
          </div>
          <ChicagoContainer />
        </div>
      </div>
      <div className="absolute top-[calc(50%_-_521px)] left-[91px] text-3xl font-archivo text-black inline-block w-[161px]">
        WASSERSTOFF
      </div>
      <img
        className="absolute top-[10px] left-[42px] w-10 h-10 overflow-hidden"
        alt=""
        src="../wstflogo-11.svg"
      />
    </div>
  );
};

export default WorldHexagonMap;
