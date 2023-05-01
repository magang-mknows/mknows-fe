import { useRecoilState } from 'recoil';
import { selectedEvent } from './store';
import { TUseSelectedEvent } from './types';

export const useSelectedEvent = (): TUseSelectedEvent => {
  const [getEvent, setEvent] = useRecoilState(selectedEvent);
  return {
    setSelectedEvent: (val: number) => setEvent(val),
    getSelectedEvent: getEvent,
  };
};
