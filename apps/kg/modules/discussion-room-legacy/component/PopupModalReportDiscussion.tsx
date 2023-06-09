import { FC, ReactElement } from "react";
import { Modal } from "@mknows-frontend-services/components/molecules";
import { Button } from "@mknows-frontend-services/components/atoms";

import { usePopupReportDiscussionStatus } from "../hooks/usePopupReportDiscussionStatus";
import { usePopupSuccessDiscussionStatus } from "../hooks/usePopupSuccessDiscussionStatus";

import { PopupModalProps } from "../types";

const PopupModalReportDiscussion: FC<PopupModalProps> = (): ReactElement => {
  const { setPopupReportStatus, getPopupReportStatus } = usePopupReportDiscussionStatus();
  const { setPopupSuccessStatus } = usePopupSuccessDiscussionStatus();

  return (
    <Modal
      lookup={getPopupReportStatus}
      onClose={() => setPopupReportStatus(!getPopupReportStatus)}
      hasButton={true}
      hasImage={false}
      withClose={true}
      widthModal={"!w-full md:!w-2/5"}
    >
      <form>
        <div className="flex flex-col justify-center w-full gap-4 text-center bg-white rounded-lg">
          <div className="grid gap-3 text-center">
            <svg
              width="52"
              height="52"
              className="justify-self-center"
              viewBox="0 0 52 52"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="52" height="52" rx="26" fill="#E9F6FD" />
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M13.9926 15.4931C13.9926 14.6642 14.6645 13.9922 15.4935 13.9922C16.3224 13.9922 16.9944 14.6642 16.9944 15.4931V36.5062C16.9944 37.3352 16.3224 38.0072 15.4935 38.0072C14.6645 38.0072 13.9926 37.3352 13.9926 36.5062V15.4931ZM35.7722 16.0675C36.2889 15.8025 36.9091 15.8409 37.3892 16.1675C37.7813 16.4526 38.0116 16.9095 38.0076 17.3943V32.3236C38.0076 33.2522 37.3992 33.5964 36.7268 33.8526C35.1187 34.5494 33.3949 34.9403 31.6436 35.0053C29.9292 34.8898 28.2379 34.5463 26.6144 33.9837C23.4755 33.0651 22.4248 32.845 20.1684 33.1041C19.7432 33.1532 19.3173 33.0184 18.9977 32.7336C18.6782 32.4489 18.4954 32.0412 18.4954 31.6132V16.5838C18.4941 15.8289 19.0536 15.1905 19.8022 15.0929C22.3778 14.7607 23.5415 14.9928 26.9006 15.9734C28.4323 16.5047 30.0267 16.8341 31.6436 16.953C33.0609 16.9012 34.4582 16.6015 35.7722 16.0675Z"
                fill="#2C97EB"
              />
              <mask
                id="mask0_3964_23649"
                maskUnits="userSpaceOnUse"
                x="13"
                y="13"
                width="26"
                height="26"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M13.9926 15.4931C13.9926 14.6642 14.6645 13.9922 15.4935 13.9922C16.3224 13.9922 16.9944 14.6642 16.9944 15.4931V36.5062C16.9944 37.3352 16.3224 38.0072 15.4935 38.0072C14.6645 38.0072 13.9926 37.3352 13.9926 36.5062V15.4931ZM35.7722 16.0675C36.2889 15.8025 36.9091 15.8409 37.3892 16.1675C37.7813 16.4526 38.0116 16.9095 38.0076 17.3943V32.3236C38.0076 33.2522 37.3992 33.5964 36.7268 33.8526C35.1187 34.5494 33.3949 34.9403 31.6436 35.0053C29.9292 34.8898 28.2379 34.5463 26.6144 33.9837C23.4755 33.0651 22.4248 32.845 20.1684 33.1041C19.7432 33.1532 19.3173 33.0184 18.9977 32.7336C18.6782 32.4489 18.4954 32.0412 18.4954 31.6132V16.5838C18.4941 15.8289 19.0536 15.1905 19.8022 15.0929C22.3778 14.7607 23.5415 14.9928 26.9006 15.9734C28.4323 16.5047 30.0267 16.8341 31.6436 16.953C33.0609 16.9012 34.4582 16.6015 35.7722 16.0675Z"
                  fill="white"
                />
              </mask>
              <g mask="url(#mask0_3964_23649)"></g>
            </svg>
          </div>

          <section className="flex flex-col gap-4">
            <h1 className="text-[20px] font-semibold">Ini adalah Spam</h1>
            <textarea
              placeholder="Ceritakan lebih detail disini"
              className="w-full min-h-[112px] md:min-h-[144px] border border-[#D4D4D4] outline-none rounded-lg p-3 text-[14px] font-light"
            ></textarea>
          </section>
          <div className="flex lg:justify-end">
            <Button
              className="!w-full h-[40px]"
              color="blue"
              onClick={() => setPopupSuccessStatus(true)}
              type={"button"}
            >
              Lapor
            </Button>
          </div>
        </div>
      </form>
    </Modal>
  );
};

export default PopupModalReportDiscussion;
