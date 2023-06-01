import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "SUCCESS",
      message: "Success test get module-content",
      data: {
        id: "1235152513",
        session_id: "141125152",
        document_id: ["4214151561"],
        video_id: null,
        duration_sec: 36000,
        title: "Test Title 0",
        description: "Test Description 0",
        module_moduleVideos: [],
        module_moduleDocuments: [],
      },
    });
  }
}
