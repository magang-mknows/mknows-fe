import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "SUCCESS",
      message: "Success take quiz",
      data: {
        type: "QUIZ",
        duration: 3200,
        questions_answers: [
          {
            id: "26b6416f-d4aa-4da3-a332-0cc9fe687772",
            question: "pertanyaan1",
            answers: [
              {
                id: "26b6416f-d4aa-4da3-a332-0cc9fe687772",
                answer: "jawaban1",
              },
            ],
          },
        ],
      },
    });
  }
}
