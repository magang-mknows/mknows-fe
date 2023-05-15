import type { NextApiRequest, NextApiResponse } from 'next';

const STATUS_CODE = 200;

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<any>
) {
  if (req.method == 'GET') {
    res.status(STATUS_CODE).json({
      code: 200,
      status: 'Test',
      message: 'Success Test',
      data: {
        dataMajor: {
          id: 'cdb98a50-ebac-4b8b-9fee-b4a6601eef39',
          name: 'Computer Science',
          thumbnail: 'Test thumbnail',
          head_of_major: 'Teacher 1',
          description: 'This is Computer Science Major Nigga',
          student_count: 3,
          subject_count: 2,
          credit_count: 4,
          current_semester: 1,
        },
        dataSubjects: [
          {
            id: 'd6746cb6-4fe7-4520-8000-6e6eb774c421',
            subject_code: 'TS_002',
            name: 'Typescript',
            thumbnail: 'thumbnail_2315dc50-7bb8-42d5-9215-61d946376707',
            teacher_name: 'Teacher 2',
            credit: 2,
            session_count: 1,
            progress_percentage: 0,
          },
          {
            id: 'd6746cb6-4fe7-4520-8000-6e6eb774c420',
            subject_code: 'CS_001',
            name: 'NodeJS',
            thumbnail:
              'https://res.cloudinary.com/dzuaaat1d/image/upload/v1683795107/thumbnail_2315dc50-7bb8-42d5-9215-61d946376707.png',
            teacher_name: 'Teacher 2',
            credit: 2,
            session_count: 2,
            progress_percentage: 50,
          },
        ],
      },
    });
  }
}
