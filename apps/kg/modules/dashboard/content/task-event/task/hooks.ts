import { useRecoilState } from 'recoil';
import { selectedTasks } from './store';
import { TUseSelectedTask } from './types';

export const useSelectedTask = (): TUseSelectedTask => {
  const [getTask, setTask] = useRecoilState(selectedTasks);
  return {
    setSelectedTask: (val: number) => setTask(val),
    getSelectedTask: getTask,
  };
};
