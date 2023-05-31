import { AiOutlineBell } from "react-icons/ai";

export const NavbarNotification = () => {
  return (
    <div
      id="notif-menu"
      aria-label="notif-menu"
      className="flex flex-col bg-neutral-100  h-9 w-9  p-2 rounded-md justify-center items-center "
    >
      <AiOutlineBell className="text-xl " />
    </div>
  );
};
