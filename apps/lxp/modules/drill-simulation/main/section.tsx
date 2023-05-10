import { Tab } from '@headlessui/react';
import { drillSimulationType } from './const';
import { Fragment } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { queryScheduleSimulation } from './store';
import { useRecoilState } from 'recoil';
import { RequestSimulation } from './request';
import { HistorySimulation } from './history';

export const DrillSimulationMain = () => {
  const [query, setQuery] = useRecoilState(queryScheduleSimulation);

  return (
    <div className="min-h-[120vh] mx-8 md:mx-14 lg:mx-16 ">
      <div className="bg-neutral-100 h-[56px] mt-10 w-full rounded-md shadow-sm  mb-8">
        <div className="flex items-center px-4 md:px-6 gap-4 py-4">
          <AiOutlineSearch className="text-neutral-400 text-xl" />
          <input
            type={'text'}
            value={query}
            className="bg-neutral-100 text-sm text-neutral-700 w-full focus:outline-none"
            placeholder="Cari Simulasi"
            onChange={(event) => setQuery(event.target.value)}
          />
        </div>
      </div>
      <Tab.Group as={'div'}>
        <Tab.List
          as="div"
          className=" border-b-[1px] text-sm border-neutral-400"
        >
          {drillSimulationType.map((type, index) => {
            return (
              <Tab key={index} as={Fragment}>
                {({ selected }) => (
                  <button
                    className={`${
                      selected
                        ? 'font-bold text-version3-500 border-b-2 border-version3-500 pb-3 outline-none  focus:outline-none active:outline-none '
                        : ' text-neutral-400'
                    }  px-2 mr-4 `}
                  >
                    <h1>{type}</h1>
                  </button>
                )}
              </Tab>
            );
          })}
        </Tab.List>
        <Tab.Panels className="py-6" as="div">
          <Tab.Panel>
            <RequestSimulation />
          </Tab.Panel>
          <Tab.Panel>
            <HistorySimulation />
          </Tab.Panel>
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};
