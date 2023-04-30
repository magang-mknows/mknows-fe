import { loginRequest } from '../../../modules';
import type { NextApiRequest, NextApiResponse } from 'next';

const ERROR_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'POST') {
    loginRequest({
      email: 'admin1@gmail.com',
      password: '1',
    });
  }
}
