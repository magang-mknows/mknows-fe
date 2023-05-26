import { atom } from "recoil";

export const dummyRegisteredSimulation = atom({
  key: "registered-simulation-state",
  default: [
    {
      lecture: "Dr. Yanto Purba",
      schedule: [
        {
          date: "Senin, 28 April 1998",
          time: [
            {
              title: "28 April 1998",
              value: ["10.30"],
            },
          ],
        },
      ],
      title: "Kemerdekaan Indonesia",
      ImgSrc: "/assets/drill/dummyImg.svg",
      category: "Drill",
      location: "Gedung PDIP",
      status: "finished",
    },
  ],
});

export const finishPopupState = atom({
  key: "show-finish-popup",
  default: false,
});
