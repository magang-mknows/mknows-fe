import type { NextApiRequest, NextApiResponse } from 'next';

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    if (req.body.email === 'admin@admin.com' && req.body.password === 'admin') {
      res.status(200).json({
        access_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4MjlmZWEyLWVkZGMtNDM3ZS1hOWY5LWE3YmQ0ZjhlZGE1ZCIsImlhdCI6MTY4MDQ5NDU0MSwiZXhwIjoxNjgwNTgwOTQxfQ.cayymLowIclVkuKc8kmEPWKzkf_pSM3_3nPH2_j2-d8',
        refresh_token:
          'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjA4MjlmZWEyLWVkZGMtNDM3ZS1hOWY5LWE3YmQ0ZjhlZGE1ZCIsImlhdCI6MTY4MDQ5NDU0MSwiZXhwIjoxNjgwNTgwOTQxfQ.cayymLowIclVkuKc8kmEPWKzkf_pSM3_3nPH2_j2-d8',
      });
    } else {
      res.status(403).json({
        message: 'Error coy',
      });
    }
  }
}
