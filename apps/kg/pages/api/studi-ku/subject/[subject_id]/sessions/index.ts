import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "OK",
      message: "Success get sessions",
      data: {
        dataSubject: {
          id: "d6746cb6-4fe7-4520-8000-6e6eb774c420",
          name: "NodeJS",
          description: "Test Description",
          thumbnail: "thumbnail_2315dc50-7bb8-42d5-9215-61d946376707",
        },
        dataSessions: [
          {
            id: "6bc3b730-8c7d-41f0-a1dc-03bac621a824",
            session_no: 1,
            is_locked: false,
            progress: [
              {
                status: "FINISHED",
                type: "MODULE",
                updated_at: "2023-05-10T22:44:53.666Z",
              },
              {
                status: "FINISHED",
                type: "QUIZ",
                updated_at: "2023-05-10T22:45:01.729Z",
              },
              {
                status: "FINISHED",
                type: "ASSIGNMENT",
                updated_at: "2023-05-10T22:45:07.528Z",
              },
            ],
          },
          {
            id: "6bc3b730-8c7d-41f0-a1dc-03bac621a825",
            session_no: 2,
            is_locked: true,
            progress: [],
          },
        ],
      },
    });
  }
}
