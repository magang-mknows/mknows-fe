import { FC, ReactElement } from "react";
import { MdArrowDropDown, MdOutlineQuiz } from "react-icons/md";
import { HiDocumentText, HiOutlineChatBubbleBottomCenterText } from "react-icons/hi2";
import { RiTodoLine } from "react-icons/ri";
import { Disclosure } from "@headlessui/react";
import { PanelSection } from "./panel";
import { useRouter } from "next/router";
import { useGetMyWorkCourse } from "../hooks";
import { params } from "../type";

export const ContentSection: FC = (): ReactElement => {
  const { query } = useRouter();

  const params: params = {
    subjectID: query.subjectID as string,
    lastSession: query.lastSession as string,
    batchID: query.batchID as string,
  };

  const { data } = useGetMyWorkCourse(params);
  console.log("data", data);
  return (
    <div className="gap-[30px] min-h-[60vh] px-8 md:px-14 lg:px-16 mt-[25px]">
      {data?.data?.dataSessions.map((items: any, index: number) => {
        return (
          <Disclosure as={"div"} className={"flex flex-col mb-5"} key={index}>
            <Disclosure.Button
              className={`px-[30px] py-[14px] flex justify-between items-center rounded-lg text-white  ${
                items.is_locked ? " bg-[#A3A3A3]" : "bg-[#053D38] cursor-pointer"
              }`}
              disabled={items.is_locked}
            >
              <p className="text-base text-neutral-50 font-medium">Pertemuan {index + 1}</p>

              <MdArrowDropDown className={`text-2xl text-neutral-50`} />
            </Disclosure.Button>

            <Disclosure.Panel className={"w-[98%] mx-auto bg-neutral-50"} key={index}>
              {items.progress.reverse().map((item: any, index: number) => {
                console.log(item.id);
                return (
                  <>
                    <PanelSection
                      key={index}
                      title={
                        item.type == "MODULE"
                          ? "Modul"
                          : item.type == "ASSIGNMENT"
                          ? "Penugasan"
                          : ""
                      }
                      href={
                        item.type == "MODULE"
                          ? `/pelatihanku/modul/${items.id}/${params.batchID}`
                          : item.type == "ASSIGNMENT"
                          ? "Penugasan"
                          : ""
                      }
                      icon={
                        item.type == "MODULE" ? (
                          <HiDocumentText className="text-xl text-[#40A0C8]" />
                        ) : item.type == "ASSIGNMENT" ? (
                          <RiTodoLine className="text-xl text-[#F4677F]" />
                        ) : (
                          ""
                        )
                      }
                    />

                    {/* <PanelSection
                      title="Tugas"
                      href="/penugasan"
                      icon={<RiTodoLine className="text-xl text-[#F4677F]" />}
                    />
                    <PanelSection
                      title="Diskusi"
                      href="/pelatihanku/diskusi"
                      icon={
                        <HiOutlineChatBubbleBottomCenterText className="text-xl text-[#3EB449]" />
                      }
                    />  */}
                  </>
                );
              })}
              <PanelSection
                title="Quiz"
                href={`/pelatihanku/quiz/${items.id}/${query.batchID}`}
                icon={<MdOutlineQuiz className="text-xl text-[#FAB317]" />}
              />
            </Disclosure.Panel>
          </Disclosure>
        );
      })}
    </div>
  );
};
