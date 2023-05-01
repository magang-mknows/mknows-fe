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
      message: 'Success',
      data: {
        dataUser: {
          id: '2315dc50-7bb8-42d5-9215-61d946376716',
          email: 'student1@gmail.com',
          password:
            '$2a$10$Cw9EiWgAbd2Bo.sbskxt3u/0SkI8UQU0xFOeL5wPgWnoK0owr4bke',
          full_name: 'student 1',
          user_name: 'username',
          avatar:
            'https://res.cloudinary.com/dzuaaat1d/image/upload/v1682898652/avatar/avatar_2315dc50-7bb8-42d5-9215-61d946376716.jpg',
          gender: null,
          phone_number: '08123456789',
          email_verified_at: null,
          user_major: {
            id: '9cecb93f-485b-4b91-aa58-c47c5b7735f2',
            student_id: '2315dc50-7bb8-42d5-9215-61d946376716',
            major_id: 'cdb98a50-ebac-4b8b-9fee-b4a6601eef39',
            status: 'active',
            major: {
              id: 'cdb98a50-ebac-4b8b-9fee-b4a6601eef39',
              name: 'Computer Science',
              thumbnail: 'Test thumbnail',
              slug: 'computer-science',
              faculty_id: '0133ddfc-26b3-4e86-a1bc-0ed09591d004',
            },
          },
        },
        manyUserJoinMajors: 3,
      },
      course: [
        {
          id: '8877593f-4a08-432c-b69e-0dde165e637e',
          student_id: '2315dc50-7bb8-42d5-9215-61d946376716',
          subject_id: 'd6746cb6-4fe7-4520-8000-6e6eb774c420',
          date_taken: '2023-03-09T22:14:03.289Z',
          date_finished: '2023-03-09T22:14:03.289Z',
          status: 'ONGOING',
          proof: 'Test Proof',
          final_score: 3.77777,
          semester: 1,
          subject_to_student_subject_1: {
            id: 'd6746cb6-4fe7-4520-8000-6e6eb774c420',
            name: 'NodeJS',
            subject_code: 'CS_001',
            degree: 'Tecnólogo',
            level: 2,
            teacher_id: '93892c57-ff8d-46cf-a5e9-06b4925c063e',
            indicator: 'Test Indicator',
            study_experience: 'Test Study Experience',
            teaching_materials: 'Test Teaching Materials',
            basic_competencies: 'Test Basic Competencies',
            tools_needed: 'Test Tools Needed',
            scoring: 'Test Scoring',
            description: 'Test Description',
            thumbnail: 'thumbnail_2315dc50-7bb8-42d5-9215-61d946376707',
            credit: 2,
            slug: 'test-subject-2',
            subject_session: [
              {
                id: '6bc3b730-8c7d-41f0-a1dc-03bac621a825',
                subject_id: 'd6746cb6-4fe7-4520-8000-6e6eb774c420',
                session_no: 2,
                duration: 20,
                is_sync: true,
                type: 'wat',
                description: 'senorita hermanas y hermanos delicabeza trabajo',
                link: 'gmail.google.com',
              },
            ],
          },
        },
      ],
    });
  }
}
