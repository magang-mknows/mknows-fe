import { FC, Fragment, ReactElement } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import Image from "next/image";
import Link from "next/link";
import { useDashboardData } from "../../hooks";

export const ArticleSection: FC = (): ReactElement => {
  const { getDashboardData } = useDashboardData();
  const articles = getDashboardData?.articles;

  function changeFormatByTime(iso: string): string {
    const date = new Date(iso);
    const month = date.toLocaleString("id-ID", { month: "long" });
    const year = String(date.getFullYear());
    return `${month} ${year}`;
  }

  return (
    <Fragment>
      <div className=" w-full  ">
        <div className="flex flex-row items-center justify-between mb-4">
          <h1 className="text-xl font-semibold">Sekilas Ilmu</h1>
          <Link className="text-sm text-primary-500 font-semibold" href={"/"}>
            Lihat Detail
          </Link>
        </div>
        <Carousel
          className="w-full p-3 overflow-hidden"
          showIndicators={true}
          showStatus={false}
          showArrows={false}
          renderIndicator={(onClickHandler, isSelected, index) => {
            return (
              <li
                key={index}
                onClick={onClickHandler}
                role="button"
                className={`w-2 h-2 inline-block rounded-full mx-3 cursor-pointer ${
                  isSelected ? "bg-error-500" : "bg-neutral-350"
                }`}
                tabIndex={0}
                aria-label={`Go to slide ${index + 1}`}
              />
            );
          }}
        >
          {articles?.map((article, i) => (
            <div key={i} className="flex flex-col shadow-md">
              <div className="block w-full h-[200px] rounded-lg bg-neutral-100">
                <Image
                  width={340}
                  height={200}
                  src={article?.thumbnail}
                  className="w-full h-full object-fit rounded-t-lg"
                  alt="article-thumbnail"
                />
              </div>
              <div className="bg-white text-start w-full px-7 py-4 mb-10 rounded-lg">
                <h1 className="font-bold text-black dark:text-yellow-500">{article?.title}</h1>
                <p className="flex flex-row items-center gap-x-2 font-normal text-[12px] text-neutral-base">
                  <span className="">Artikel</span>
                  <svg
                    width="3"
                    height="2"
                    viewBox="0 0 3 2"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <circle cx="1.5" cy="1" r="1" fill="#A3A3A3" />
                  </svg>
                  {article.tags.map((tag) => (
                    <span className="">{tag}</span>
                  ))}
                </p>
                <p className="font-normal text-end text-[12px] text-[#A3A3A3]">
                  {changeFormatByTime(article.created_at)}
                </p>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </Fragment>
  );
};
