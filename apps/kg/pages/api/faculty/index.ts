import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "OK",
      message: "Faculty Found",
      data: [
        {
          id: "49068205-c715-4009-9b8f-ddcd4126fbf4",
          name: "Filkom",
          majors_count: 10,
          thumbnail: "thumbnail",
          slug: "computer-science",
          faculty_id: "8732483-c715-4009-9b8f-ddcd4126fbf4",
        },
      ],
    });
  }
}
