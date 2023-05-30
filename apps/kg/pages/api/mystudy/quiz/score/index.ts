import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'GET') {
    res.status(STATUS_CODE).json({
      code: 200,
      status: 'SUCCESS Test',
      message: 'Success submit test quiz',
      data: {
        right: 8,
        wrong: 2,
        total_question: 10,
        remaining_attempt: 2,
        time_elapsed: 360,
        score: 80,
      },
    });
  }
}
