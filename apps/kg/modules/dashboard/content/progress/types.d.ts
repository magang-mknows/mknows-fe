export type TProgress = {
  judul: string;
  subjudul: string;
  semester: number;
  totalPertemuan: number;
  pertemuanDone: number;
};

export type TProgressReturnTypes = {
  setProgress: (val: Array<Progress>) => void;
  getProgress: Array<Progress>;
};
