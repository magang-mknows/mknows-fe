import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'GET') {
    res.status(STATUS_CODE).json({
      code: 200,
      status: 'OK',
      message: 'Success get user',
      data: {
        user: {
          id: '26228b47-fdce-4b39-84a5-360a38c98a37',
          email: 'user0001@gmail.com',
          full_name: 'Teacher 1',
          user_name: 'teacher1',
          gender: 'LAKI-LAKI',
          phone_number: '626969361361',
          avatar:
            'https://www.gravatar.com/avatar/205e460b479e2e5b48aec07710c08d50',
          email_verified_at: null,
          role: 'GUEST',
          created_at: '2023-03-16 10:52:49',
          updated_at: '2023-03-16 10:52:49',
        },
      },
    });
  }
}
