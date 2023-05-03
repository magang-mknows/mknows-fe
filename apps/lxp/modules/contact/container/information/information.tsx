import { FC, Fragment, ReactElement } from 'react';
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';

export const ContactInformation: FC = (): ReactElement => {
  return (
    <Fragment>
      <h1 className="text-left px-2 lg:text-center pt-10 md:pt-12 lg:pt-16 font-bold mb-4 text-sm lg:text-lg">
        Kontak Kami
      </h1>
      <div className="px-2 text-sm md:text-base xl:px-16">
        <section>
          <h1 className="font-bold mb-1 text-neutral-900">Telepon</h1>
          <p className="mb-4 text-neutral-800">+62 2143 1244</p>
        </section>
        <section>
          <h1 className="font-bold mb-1 text-neutral-900">Email</h1>
          <p className="mb-4 text-neutral-800">kampusgratis123@gmail.com</p>
        </section>
        <section>
          <h1 className="font-bold mb-1 text-neutral-900">Alamat</h1>
          <p className="mb-4 text-neutral-800">
            Jl. Raya Cirendeu No.59, Cireundeu, Kec. Ciputat Timur., Kota
            Tangerang Selatan, Banten 15419
          </p>
        </section>
      </div>
      <div className="px-2 text-lg text-neutral-800 flex justify-start lg:justify-center gap-x-6 py-10">
        <FaFacebookF className="text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaTwitter className="text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaLinkedinIn className="text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
        <FaInstagram className="text-version3-500 cursor-pointer transition-colors ease-in-out duration-300" />
      </div>
    </Fragment>
  );
};
