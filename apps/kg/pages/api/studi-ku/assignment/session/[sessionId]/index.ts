import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "OK",
      message: "Test doang bang",
      data: {
        assignment: {
          id: "248914715",
          documents: ["file.pdf", "file.jpg"],
          title: "big dick",
          desc: "small tits",
          duration_days: 3,
          session_assignment: {
            session_no: 2,
            subject_session: {
              id: "12234556",
              name: "Binjay",
              teacher_subject: {
                full_name: "Nenek Chio",
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
