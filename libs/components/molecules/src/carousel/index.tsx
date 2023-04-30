import { ReactElement, FC, useRef, ReactNode } from 'react';
import AliceCarousel from 'react-alice-carousel';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';

export const Carousel: FC<{
  children: ReactNode[];
  autoPlay?: boolean;
  infinite?: boolean;
  single?: boolean;
  speed?: number;
}> = ({
  children,
  autoPlay = true,
  infinite = true,
  speed = 1000,
  single,
}): ReactElement => {
  const carousel = useRef<AliceCarousel>(null);
  return (
    <div className="flex w-full h-full relative items-center px-[80px]">
      <MdChevronLeft
        onClick={(e) => carousel?.current?.slideNext(e)}
        size={40}
        className="bg-white rounded-lg h-[60px] shadow-lg absolute left-0 z-10"
      />
      <AliceCarousel
        key="carousel"
        ref={carousel}
        animationDuration={speed}
        autoPlay={autoPlay}
        infinite={infinite}
        autoHeight={false}
        swipeExtraPadding={10}
        paddingLeft={50}
        paddingRight={50}
        disableDotsControls
        disableButtonsControls
        responsive={
          single
            ? {
                0: { items: 1 },
                568: { items: 1 },
                1024: { items: 1 },
              }
            : {
                0: { items: 1 },
                568: { items: 2 },
                1024: { items: 3 },
              }
        }
        mouseTracking
        items={children}
      />
      <MdChevronRight
        onClick={(e) => carousel?.current?.slidePrev(e)}
        size={40}
        className="bg-white rounded-lg h-[60px] shadow-lg absolute right-0 z-10"
      />
    </div>
  );
};
