import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "OK",
      message: "Assignment in session 6bc3b730-8c7d-41f0-a1dc-03bac621a825 successfully retrieved",
      data: {
        assignment: {
          id: "49068205-c715-4009-9b8f-ddcd4126fbf4",
          documents: ["doc1", "doc2", "doc3"],
          title: "biggus dickus",
          desc: "1 Minggu : Hari= 7 (Sudah jelas) Jam= 7 x 24jam=168jam. Menit= 168 x 60menit= 10.080menit. Detik= 10.080 x 60detik= 604.800detik 1 Bulan",
          duration_days: 3,
          session_assignment: {
            session_no: 2,
            subject_session: {
              id: "d6746cb6-4fe7-4520-8000-6e6eb774c420",
              name: "NodeJS",
              teacher_subject: {
                full_name: "Teacher 2",
              },
            },
          },
        },
        student_progress: {
          status: "ONGOING",
          type: "ASSIGNMENT",
          score: null,
          is_late: false,
          assignment_answer: null,
          timestamp_taken: "2023-05-01 15:08:22",
          timestamp_submitted: null,
          deadline: "2023-05-04 15:08:22",
        },
      },
    });
  }
}
