import { FC, ReactElement } from "react";
import { People } from "./ilustration/people";
import { Button } from "@mknows-frontend-services/components/atoms";
import Link from "next/link";

export const Empty: FC = (): ReactElement => {
  return (
    <section className="mx-auto my-auto text-center">
      <center>
        <People />
      </center>
      <h1 className="font-[500] lg:text-[18px] md:text-[16px] text-[14px]">
        Oops, Kamu belum mengambil Rencana Studi.
      </h1>
      <Link href={"/rencana-studi"}>
        <Button
          type={"button"}
          className="bg-[#106FA4] text-white py-4 lg:px-20 md:px-18 px-16 rounded-md mt-5 lg:text-[16px] md:text-[14px] font-[600]"
        >
          Rencana Studi
        </Button>
      </Link>
    </section>
  );
};
