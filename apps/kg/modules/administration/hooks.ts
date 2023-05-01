import { useRecoilState } from 'recoil';
import { TStatusReturnAdministration } from './types';
import { AdministrationStatusState } from './store';

export * from './common/hooks';

export const useAdministrationStatus = (): TStatusReturnAdministration => {
  const [getStatus, setStatus] = useRecoilState(AdministrationStatusState);
  return {
    setAdministrationStatus: (val: string) => setStatus(val),
    getAdministrationStatus: getStatus,
  };
};
