import type { NextApiRequest, NextApiResponse } from 'next';

type TData = {
  code: number;
  message: string;
};

const ERROR_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<TData>
) {
  if (req.method == 'POST') {
    res.status(ERROR_CODE).json({
      code: ERROR_CODE,
      message: `ERROR WOI!! CODE ${ERROR_CODE}`,
    });
  }
}
