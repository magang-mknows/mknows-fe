import Image from "next/image";
import React, { FC, ReactElement } from "react";
import companyLogo from "../assets/logo.svg";
import Link from "next/link";
import { ContactInformation } from "./information";
import { ContactForm } from "./form/form";

export const ContactContainer: FC = (): ReactElement => {
  return (
    <div className="px-8 md:px-14 lg:px-16 flex py-14 justify-center">
      <div className="bg-neutral-50 px-8 md:px-10 lg:px-10 min-h-[740px] xl:px-20 w-[1200px] py-10 md:py-14 lg:py-20 grid grid-cols-1 lg:grid-cols-2">
        <section>
          <section className=" flex justify-center">
            <Link href={"/"} passHref>
              <Image
                src={companyLogo}
                alt="M-Know Logo's"
                className="w-auto h-6 md:h-9 lg:h-11"
                width={100}
                height={60}
                loading="eager"
                quality={40}
              />
            </Link>
          </section>
          <ContactInformation />
        </section>
        <ContactForm />
      </div>
    </div>
  );
};
