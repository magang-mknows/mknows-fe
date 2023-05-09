import { useRecoilState } from 'recoil';
import { PopupModalSuccessOpen } from './store';
import { CertificateStatus } from './store';
import { certificateTypes } from './type';

type ReturnTypes = {
  setPopupStatus: (val: boolean) => void;
  getPopupStatus: boolean;
};

export const usePopupCertificate = (): ReturnTypes => {
  const [get, set] = useRecoilState(PopupModalSuccessOpen);
  return {
    setPopupStatus: (val: boolean) => set(val),
    getPopupStatus: get,
  };
};

type certificateReturnTypes = {
  setCertificate: (val: Array<certificateTypes>) => void;
  getCertificate: Array<certificateTypes>;
};

export const useCertficate = (): certificateReturnTypes => {
  const [getCertificate, setCertificate] = useRecoilState(CertificateStatus);

  return {
    setCertificate: (val: Array<certificateTypes>) => setCertificate(val),
    getCertificate: getCertificate,
  };
};
