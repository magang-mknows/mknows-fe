import { FC, ReactElement, Fragment } from "react";
import { MdChevronRight } from "react-icons/md";
import { useQuizQuitPopup } from "../pop-up/quit/hooks";

export const QuizTakeBreadCrumb: FC = (): ReactElement => {
  const { getQuizQuitPopup, setQuizQuitPopup } = useQuizQuitPopup();
  const subjectDetailPath = getQuizQuitPopup.prevPath.split("/").slice(0, -1).join("/");
  const subjectName = decodeURI(getQuizQuitPopup.prevPath.split("/")[2]);
  const quizTakeBreadCrumb = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Studi-ku",
      link: "/studi-ku",
    },
    {
      name: subjectName,
      link: subjectDetailPath,
    },
    {
      name: "Kuis",
      link: `${getQuizQuitPopup.prevPath}/${getQuizQuitPopup.quizTakeId}`,
    },
    {
      name: "Mulai Kuis",
      link: "",
    },
  ];
  function onClickHandler(link: string) {
    setQuizQuitPopup({ ...getQuizQuitPopup, link, status: true });
  }

  return (
    <div
      className="grid place-content-start w-full px-8 md:px-14 lg:px-16 py-4 !font-extrabold text-xs md:text-sm bg-neutral-100"
      aria-label="Breadcrumb"
    >
      <ol className="flex w-full items-center gap-x-2">
        {quizTakeBreadCrumb.map((crumb, index) => {
          const isLastItem = index === quizTakeBreadCrumb.length - 1;
          if (!isLastItem) {
            return (
              <Fragment key={index}>
                <button
                  key={index}
                  onClick={() => onClickHandler(crumb.link)}
                  className="inline-flex text-[#106FA4] text-sm font-semibold items-center"
                >
                  {crumb.name}
                </button>
                <MdChevronRight className="text-xl text-[#9CA3AF]" />
              </Fragment>
            );
          } else {
            return (
              <button key={index}>
                <span className="text-[#9CA3AF] text-sm font-semibold cursor-default">
                  {crumb.name}
                </span>
              </button>
            );
          }
        })}
      </ol>
    </div>
  );
};
