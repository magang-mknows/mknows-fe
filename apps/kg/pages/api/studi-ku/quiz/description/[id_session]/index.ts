import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "SUCCESS",
      message: "Success get quiz description by session",
      data: {
        id: "26b6416f-d4aa-4da3-a332-0cc9fe687772",
        total_questions: 50,
        kkm: 75,
        duration: 3600,
        remaining_attempt: 2,
      },
    });
  }
}
