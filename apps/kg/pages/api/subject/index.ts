import type { NextApiRequest, NextApiResponse } from "next";

const STATUS_CODE = 200;

export default function handler(req: NextApiRequest, res: NextApiResponse<any>) {
  if (req.method == "GET") {
    res.status(STATUS_CODE).json({
      code: 200,
      status: "OK",
      message: "Get all data...",
      data: [
        {
          id: "abababab-bcbc-cdcd-dede-efefefefefef",
          name: "Global",
          subject_code: "GL-001",
          degree: "Test Degree",
          level: 1,
          teacher_id: "1a1a1a1a-2b2b-3c3c-4d4d-5e5e5e5e5e5e",
          indicator: "Test Indicator",
          study_experience: "Test Study Experience",
          teaching_materials: "Test Teaching Materials",
          basic_competencies: "Test Basic Competencies",
          tools_needed: "Test Tools Needed",
          scoring: "Test Scoring",
          description: "Test Description",
          thumbnail: "thumbnail_2315dc50-7bb8-42d5-9215-61d946376707",
          credit: 1,
          slug: "test-subject-2",
        },
        {
          id: "d6746cb6-4fe7-4520-8000-6e6eb774c420",
          name: "NodeJS",
          subject_code: "CS_001",
          degree: "Tecnólogo",
          level: 2,
          teacher_id: "93892c57-ff8d-46cf-a5e9-06b4925c063e",
          indicator: "Test Indicator",
          study_experience: "Test Study Experience",
          teaching_materials: "Test Teaching Materials",
          basic_competencies: "Test Basic Competencies",
          tools_needed: "Test Tools Needed",
          scoring: "Test Scoring",
          description: "Test Description",
          thumbnail: "thumbnail_2315dc50-7bb8-42d5-9215-61d946376707",
          credit: 2,
          slug: "test-subject-2",
        },
        {
          id: "d6746cb6-4fe7-4520-8000-6e6eb774c421",
          name: "Typescript",
          subject_code: "TS_002",
          degree: "Test Degree",
          level: 1,
          teacher_id: "93892c57-ff8d-46cf-a5e9-06b4925c063e",
          indicator: "Test Indicator",
          study_experience: "Test Study Experience",
          teaching_materials: "Test Teaching Materials",
          basic_competencies: "Test Basic Competencies",
          tools_needed: "Test Tools Needed",
          scoring: "Test Scoring",
          description: "Test Description",
          thumbnail: "thumbnail_2315dc50-7bb8-42d5-9215-61d946376707",
          credit: 2,
          slug: "test-subject-2",
        },
        {
          id: "d6746cb6-4fe7-4520-7000-6e6eb774c421",
          name: "Basic Circuitry",
          subject_code: "EL_001",
          degree: "Test Degree",
          level: 1,
          teacher_id: "93892c57-ff8d-46cf-a5e9-06b4925c063e",
          indicator: "Test Indicator",
          study_experience: "Test Study Experience",
          teaching_materials: "Test Teaching Materials",
          basic_competencies: "Test Basic Competencies",
          tools_needed: "Test Tools Needed",
          scoring: "Test Scoring",
          description: "Test Description",
          thumbnail: "thumbnail_2315dc50-7bb8-42d5-9215-61d946376707",
          credit: 2,
          slug: "test-subject-2",
        },
      ],
    });
  }
  if (req.method == "POST") {
    res.status(STATUS_CODE).json({
      code: 201,
      status: "Created",
      message: "Subject successfully created",
      data: {
        id: "c9517962-3e6d-44e1-b6a2-a48c588a0f58",
        name: "Test Course 2",
        subject_code: "TC_007",
        degree: "Test Degree",
        level: 2,
        teacher_id: "93892c57-ff8d-46cf-a5e9-06b4925c063e",
        indicator: "Test Indicator",
        study_experience: "Test Study Experience",
        teaching_materials: "Test Teaching Materials",
        basic_competencies: "Test Basic Competencies",
        tools_needed: "Test Tools Needed",
        description: "Test Description",
        scoring: "Test Scoring",
        credit: 2,
        slug: "test-course-2-6",
        thumbnail: "sub_thumbnail_6be21cb9-c44b-456d-9044-f589c3e7bf5d",
        updated_at: "2023-03-27T19:10:40.842Z",
        created_at: "2023-03-27T19:10:40.842Z",
        subject_id: "string",
      },
    });
  }
}
