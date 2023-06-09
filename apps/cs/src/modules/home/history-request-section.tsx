import { FC, ReactElement } from "react";
import { useCardData } from "./hooks";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { CardCS } from "@mknows-frontend-services/components/molecules";

const CardSection: FC = (): ReactElement => {
  const { getCardData } = useCardData();
  const prevButton = (
    <button
      className="rotate-180
    \"
    >
      <img src="/assets/dashboard/next.svg" alt="next" />
    </button>
  );
  const nextButton = (
    <button>
      <img src="/assets/dashboard/next.svg" alt="prev" />
    </button>
  );
  const cardProps = {
    mouseTrackingEnabled: true,
    disableDotsControls: true,
    items: getCardData.map((x, i) => (
      <div key={i} className="flex max-w-screen">
        <CardCS
          hasButton={true}
          buttonText="Lihat Detail"
          buttonHref="/dashboard/request?tab=hasil"
          buttonClassName={`flex py-1 justify-center rounded-sm text-white items-end my-2 ${x.bgButton} w-full`}
          className="w-full m-3 min-h-[110px] absolute shadow-md px-4"
        >
          <div className="flex flex-row w-full h-full space-x-[10px] py-4">
            <div>
              <img src={x.icon} alt="icon" className="w-16 " />
            </div>

            <div className="flex-col w-full space-y-1">
              <p className="text-sm font-semibold">{x.title}</p>
              <p className="text-neutral-400 font-normal text-xs">{x.desc}</p>
            </div>
          </div>
        </CardCS>
      </div>
    )),
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 2,
      },
      1024: {
        items: 4,
        itemsFit: "contain",
      },
    },
    autoPlay: true,
    autoPlayInterval: 3000,
    animationDuration: 1000,
    Infinity: true,
    renderPrevButton: () => {
      return <div className="absolute top-[25%] -left-8">{prevButton}</div>;
    },
    renderNextButton: () => {
      return <div className="absolute -right-8 top-[25%]">{nextButton}</div>;
    },
  };

  return (
    <div className="p-4 ">
      <h1 className="text-2xl font-bold uppercase p-3">Riwayat Permintaan</h1>
      <AliceCarousel {...cardProps} />
    </div>
  );
};

export default CardSection;
