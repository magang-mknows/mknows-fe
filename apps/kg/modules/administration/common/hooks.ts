import { useRecoilState } from "recoil";
import { TReturnFileInformation, TReturnJobInformation, TReturnPrivateInformation } from "./types";
import { FileInformationState, JobInformationState, PrivateInformationState } from "./store";

export const usePrivateInformationStatus = (): TReturnPrivateInformation => {
  const [get, set] = useRecoilState(PrivateInformationState);
  return {
    setPrivateStatus: (val: boolean) => set(val),
    getPrivateStatus: get,
  };
};

export const useJobInformationStatus = (): TReturnJobInformation => {
  const [get, set] = useRecoilState(JobInformationState);
  return {
    setJobStatus: (val: boolean) => set(val),
    getJobStatus: get,
  };
};

export const useFileInformationStatus = (): TReturnFileInformation => {
  const [getStatus, setStatus] = useRecoilState(FileInformationState);
  return {
    setFileStatus: (val: boolean) => setStatus(val),
    getFileStatus: getStatus,
  };
};
