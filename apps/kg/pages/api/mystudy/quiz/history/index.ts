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
      message: 'Success get test history',
      data: [
        {
          id: 'test12341',
          timestamp_taken: '2023-05-24T09:34:24.369Z',
          score: 55,
          correct: 2,
          wrong: 8,
          status: 'FINISHED',
          total_question: 10,
          time_elapsed: 360,
        },
      ],
    });
  }
}
