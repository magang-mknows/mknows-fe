import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "SUCCESS",
      message: "Success test get Module",
      data: [
        {
          id: "12345667",
          total_videos: "3",
          total_documents: "3",
          is_all_video_seen: false,
          title: "Test Title 0",
          description: "Test Description 0",
        },
      ],
    });
  }
}
