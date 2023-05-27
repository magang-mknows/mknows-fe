import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'GET') {
    res.status(STATUS_CODE).json({
      code: 200,
      status: 'SUCCESS',
      message: 'Success test history',
      data: [
        {
          question: 'pertanyaan1',
          answers: [
            {
              answer: 'jawaban1',
              is_correct: true,
              is_selected: true,
            },
          ],
        },
      ],
    });
  }
}
