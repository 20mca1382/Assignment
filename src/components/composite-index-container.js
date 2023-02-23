import EarningsContainer from "../components/earnings-container";

const CompositeIndexContainer = () => {
  return (
    <div className="absolute top-[calc(50%_+_55px)] left-[60px] rounded-base bg-purple-heart3 shadow-[0px_100px_80px_rgba(108,_73,_172,_0.07),_0px_41.777610778808594px_33.42px_rgba(108,_73,_172,_0.05),_0px_22.3363094329834px_17.87px_rgba(108,_73,_172,_0.04),_0px_12.521552085876465px_10.02px_rgba(108,_73,_172,_0.04),_0px_6.650102138519287px_5.32px_rgba(108,_73,_172,_0.03),_0px_2.767256498336792px_2.21px_rgba(108,_73,_172,_0.02)] overflow-hidden flex flex-col py-5 px-[30px] items-center justify-start gap-[18px] text-left text-base text-snow4 font-headline-h52">
      <EarningsContainer
        totalEarningsText="Total earning"
        salesEarningsText="$12,875"
        percentageEarningsText="10%"
      />
      <img
        className="relative w-[230px] h-px shrink-0"
        alt=""
        src="../divider.svg"
      />
      <EarningsContainer
        totalEarningsText="Sales"
        salesEarningsText="$43,123"
        percentageEarningsText="12%"
      />
    </div>
  );
};

export default CompositeIndexContainer;
