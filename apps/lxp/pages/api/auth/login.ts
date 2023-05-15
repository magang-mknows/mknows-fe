import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    res.status(STATUS_CODE).json({
      access_token: 'access-token',
      refresh_token: 'refresh-token',
    });
  }
}
