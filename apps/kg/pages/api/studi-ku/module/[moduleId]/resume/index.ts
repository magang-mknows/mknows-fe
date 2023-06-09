import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "POST") {
    res.status(STATUS_CODE).json({
      student_id: "123",
      subject_id: "456",
      status: "FINISHED",
      type: "MODULE",
      score: 99,
      is_late: false,
      timestamp_taken: "2023-06-01T12:52:52.162Z",
      timestamp_submitted: "2023-06-01T12:52:52.162Z",
    });
  }
}
