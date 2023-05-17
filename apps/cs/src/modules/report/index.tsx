import { FC, Fragment, ReactElement, useState, Suspense } from 'react';
import { LoadingReport } from './loading';
import Card from '../../components/molecules/card';
import { Tab } from '@headlessui/react';
import { NavLink, Outlet } from 'react-router-dom';

const ReportPage: FC = (): ReactElement => {
  const [active, setActive] = useState('laporan');
  return (
    <Suspense fallback={<LoadingReport />}>
      <Tab.Group>
        <section className="w-full flex h-fit relative pt-2 overflow-hidden justify-center lg:justify-end lg:pr-4">
          <Card className="w-full h-fit rounded-lg bg-white">
            <div className="px-11 py-4 flex flex-col w-full ">
              <Tab.List
                className="flex flex-row gap lg:gap-x-8 md:gap-x-2 text-base font-semibold"
                style={{ boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)' }}
              >
                <Tab as={Fragment}>
                  <button>
                    <NavLink
                      to="/dashboard/report"
                      className={`inline-block p-4 ${
                        active === 'laporan' ? 'text-primary-400 ' : ''
                      }       text-neutral-400 text-xs md:text-base `}
                      aria-current="page"
                      onClick={() => setActive('laporan')}
                    >
                      Laporan User
                    </NavLink>
                  </button>
                </Tab>
                <Tab as={Fragment}>
                  <button>
                    <NavLink
                      to="/dashboard/report/grafik"
                      className={`inline-block p-4 ${
                        active === 'grafik'
                          ? 'text-primary-400 border-b-4 border-primary-400'
                          : ''
                      }       text-neutral-400 text-xs md:text-base`}
                      aria-current="page"
                      onClick={() => setActive('grafik')}
                    >
                      Grafik
                    </NavLink>
                  </button>
                </Tab>
              </Tab.List>

              {/* content */}
              <Tab.Panels>
                <Outlet />
              </Tab.Panels>
            </div>
          </Card>
        </section>
      </Tab.Group>
    </Suspense>
  );
};

export default ReportPage;
