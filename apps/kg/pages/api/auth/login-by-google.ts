import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    res.status(STATUS_CODE).json({
      message: 'OK',
      data: {
        user: {
          email: 'akhmadkhasan68@gmail.com',
          phone: '081252100033',
          role: 'CUSTOMER',
        },
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4MjlmZWEyLWVkZGMtNDM3ZS1hOWY5LWE3YmQ0ZjhlZGE1ZCIsImlhdCI6MTY4MDQ5NDU0MSwiZXhwIjoxNjgwNTgwOTQxfQ.cayymLowIclVkuKc8kmEPWKzkf_pSM3_3nPH2_j2-d8',
        expires_at: '2023-04-04T04:02:21.471Z',
      },
    });
  }
}
