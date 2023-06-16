import { FC, ReactElement } from "react";
import { BsDot } from "react-icons/bs";

import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

import dummyArticleImage from "./dummy-assets/dummy-article.svg";
import Image from "next/image";

export const ArticleCarousel: FC = (): ReactElement => {
  const dummyArticle = [
    {
      id: 1,
      title: "Apa itu Cyber Attack?",
      catogory: "Technologi",
      type: "Article",
      date: "29 Feb 2023",
      image: dummyArticleImage,
    },
    {
      id: 2,
      title: "Apa itu Cyber Crime?",
      catogory: "Technologi",
      type: "Article",
      date: "34 Feb 2023",
      image: dummyArticleImage,
    },
  ];

  return (
    <div className="rounded-md  ">
      <Carousel
        showThumbs={false}
        showArrows={false}
        showIndicators={true}
        showStatus={false}
        swipeable={true}
        className="w-full article-carousel  shadow-lg"
        renderIndicator={(onClickHandler, isSelected, index, label) => {
          return (
            <span
              className={`${
                isSelected ? "bg-blue-600 w-6" : "w-2 bg-neutral-300"
              } flex h-2 rounded-full transition-all ease-in-out duration-300`}
              onClick={onClickHandler}
              onKeyDown={onClickHandler}
              key={index}
              role="button"
              tabIndex={0}
              aria-label={`${label} ${index + 1}`}
            ></span>
          );
        }}
      >
        {dummyArticle.map((article, index) => {
          return (
            <div className="block " key={index}>
              <section key={index} className="block">
                <div className="max-h-[400px] overflow-hidden object-cover">
                  <figure className="w-full h-72 bg-neutral-200 rounded-md">
                    <Image src={article.image} alt="test" height={90} width={100} />
                  </figure>
                </div>
                <div className="px-4 py-4 flex bg-neutral-50   flex-col  justify-start">
                  <h1 className="text-base font-bold text-neutral-900 text-start mb-1">
                    {article.title}
                  </h1>
                  <p className="text-xs text-neutral-400 flex items-center mb-2 ">
                    {article.type}
                    <span>
                      <BsDot />
                    </span>
                    {article.catogory}
                  </p>
                  <div className=" mb-4 flex justify-end items-center w-full">
                    <p className="text-xs text-neutral-400 flex items-center">{article.date}</p>
                  </div>
                </div>
              </section>
            </div>
          );
        })}
      </Carousel>
    </div>
    // <section>
    //   <section className="bg-neutral-50 rounded-md overflow-hidden mb-6">
    //     {dummyArticle.map((article, index) => {
    //       return (
    //         <section
    //           key={index}
    //           className={`${article.id === getSelectedArticle ? "block" : "hidden"}`}
    //         >
    //           <div className="max-h-[500px] overflow-hidden object-cover">
    //             <Image
    //               src={article?.srcImg as unknown as string}
    //               alt="sekilas-view"
    //               className="w-full"
    //               height={100}
    //               width={100}
    //             />
    //           </div>
    //           <div className="px-4 py-4">
    //             <h1 className="text-base font-bold text-neutral-900 mb-1">{article.title}</h1>
    //             <p className="text-xs text-neutral-400 flex items-center mb-3">
    //               {article.type}
    //               <span>
    //                 <BsDot />
    //               </span>
    //               {article.catogory}
    //             </p>
    //             <div className=" flex justify-end items-center w-full">
    //               <p className="text-xs text-neutral-400 flex items-center">{article.date}</p>
    //             </div>
    //           </div>
    //         </section>
    //       );
    //     })}
    //   </section>
    //   <section className=" w-full flex justify-center">
    //     <section className="flex gap-2">
    //       {dummyArticle.map((item, index) => {
    //         return (
    //           <span
    //             key={index}
    //             className={`${
    //               getSelectedArticle == item.id
    //                 ? "w-4  bg-secondary-blue-600"
    //                 : "w-2  bg-neutral-300"
    //             } h-2 cursor-pointer  block rounded-lg transition-all ease-in-out duration-300`}
    //             onClick={() => {
    //               setSelectedArticle(item.id);
    //             }}
    //           ></span>
    //         );
    //       })}
    //     </section>
    //   </section>
    // </section>
  );
};
