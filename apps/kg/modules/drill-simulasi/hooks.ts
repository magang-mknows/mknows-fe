import { UseQueryResult, useQuery } from '@tanstack/react-query';
import { useRecoilState } from 'recoil';
import { PopupModalSubmissionOpen } from './store';
import { ReturnTypesPopupSubmissionStatus, TSimulationResponse } from './type';
import { SimulationService } from './api';
import { TMetaErrorResponse } from '@mknows-frontend-services/utils';

export const useGetAllSimulation = (): UseQueryResult<
  TSimulationResponse,
  TMetaErrorResponse
> =>
  useQuery({
    queryKey: ['get-all-simulation'],
    queryFn: async () => await SimulationService(),
  });

export const usePopupSubmissionStatus =
  (): ReturnTypesPopupSubmissionStatus => {
    const [get, set] = useRecoilState(PopupModalSubmissionOpen);
    return {
      setPopupStatus: (val: boolean) => set(val),
      getPopupStatus: get,
    };
  };
