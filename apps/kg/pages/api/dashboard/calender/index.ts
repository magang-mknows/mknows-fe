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
      message:
        'Get all schedule for student 2315dc50-7bb8-42d5-9215-61d946376716...',
      data: [
        {
          id: '75a9e876-421c-4d69-95f7-3c4860444895',
          startAt: '2023-10-19 10:23:54',
          endAt: '2023-10-19 11:23:54',
          summary: 'Acara Event 1',
          color: 'green',
          allDay: false,
        },
        {
          id: '75a9e876-421c-4d69-95f7-3c4860444895',
          startAt: '2023-10-21 10:23:54',
          endAt: '2023-10-22 11:23:54',
          summary: 'Tugas NodeJS Pertemuan 1',
          color: 'indigo',
          allDay: false,
        },
      ],
    });
  }
}
