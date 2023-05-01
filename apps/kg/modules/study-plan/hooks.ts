import { optionFacultyState } from './stores';
import { OptionFaculty } from './types';
import { useRecoilState } from 'recoil';

type OptionFacultyTypes = {
  setOptionFaculty: (val: Array<OptionFaculty>) => void;
  getOptionFaculty: Array<OptionFaculty>;
};

export const useOptionFaculty = (): OptionFacultyTypes => {
  const [getOptionFaculty, setOptionFaculty] =
    useRecoilState(optionFacultyState);
  return {
    setOptionFaculty: (val: Array<OptionFaculty>) => setOptionFaculty(val),
    getOptionFaculty: getOptionFaculty,
  };
};
