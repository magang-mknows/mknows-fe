import { FC, ReactElement, useState } from "react";
import { IoMdArrowDropdown, IoMdArrowDropup } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { useChooseSidebar, useSidebar } from "../hooks";

const Sidebar: FC = (): ReactElement => {
  const [isOpen, setIsOpen] = useState("");
  const [hamburger, setHamburger] = useState(false);
  const { getDiscussion } = useSidebar();
  const { setChoose, getChoose } = useChooseSidebar();
  console.log(getDiscussion);

  return (
    <>
      <div className="py-6 px-5 bg-[#FFFF] rounded-[8px] ">
        {getDiscussion.map((items, i) => (
          <div key={i}>
            <div
              className="flex flex-row justify-between items-center mb-3 mt-3 cursor-pointer"
              onClick={() => setIsOpen(isOpen == "" ? items.id : "")}
            >
              <h1 className="text-[#737373]  text-[14px] font-[600]">{items.session}</h1>
              <div className="text-[#9CA3AF]">
                {isOpen === items.id ? <IoMdArrowDropdown /> : <IoMdArrowDropup />}
              </div>
            </div>
            {items.modul.map((item, j) => (
              <div key={j}>
                {isOpen === items.id ? (
                  <div
                    className={`text-[#737373] text-[14px] font-[600] h-10 flex items-center ml-4 px-4 rounded-[8px] dark:text-yellow-500 cursor-pointer ${
                      getChoose == item.id ? "bg-[#053D38] text-[#FFFF] dark:bg-yellow-100" : ""
                    } `}
                    onClick={() => setChoose(item.id)}
                  >
                    {item.modul}
                  </div>
                ) : null}
              </div>
            ))}
          </div>
        ))}
      </div>
    </>
  );
};

export default Sidebar;
