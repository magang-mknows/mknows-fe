import { Button } from '@mknows-frontend-services/components/atoms';

export const CalendarMain = () => {
  return (
    <section className="text-sm">
      <div className="border-l-4  cursor-pointer  transition-all ease-in-out duration-500 group py-3 hover:shadow-lg border-version3-500 px-4 rounded-md mb-4 flex justify-between items-center">
        <section>
          <p className="mb-1 text-neutral-800  text-xs md:text-sm">
            14:30 - 15:30 pm
          </p>
          <p className="font-bold   text-neutral-800 text-xs md:text-sm">
            Introduction to Japanese Culture
          </p>
          <p className="text-neutral-500 text-xs md:text-sm">Pertemuan 1</p>
        </section>
        <Button
          type="button"
          className="text-neutral-400 bg-neutral-200 border-none hover:bg-version3-500 hover:!text-neutral-50 disabled:bg-version2-200/70 disabled:border-none hover:border-version2-300 font-bold transition-colors ease-in-out relative z-10 rounded-md duration-300  border-2 border-version2-500 flex items-center justify-center gap-2 text-sm py-2 w-28"
        >
          <h1>View</h1>
        </Button>
      </div>
    </section>
  );
};
