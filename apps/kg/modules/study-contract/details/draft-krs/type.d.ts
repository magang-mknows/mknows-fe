import { TMetaResponseSingle } from "@mknows-frontend-services/utils";

export type TRoot = {
    pending: Pending
    ongoing: Ongoing
    draft: Draft
    total_plan_credit: number
  }
  
  export type Pending ={
    subjects: any[]
    total_credit: number
  }
  
  export type Ongoing ={
    subjects: any[]
    total_credit: number
  }
  
  export type Draft ={
    subjects: Subject[]
    total_credit: number
  }
  
  export type Subject ={
    id: string
    name: string
    thumbnail: string
    subject_code: string
    credit: number
    current_semester: number
    date_taken: string
    date_finished: string
    proof: string
  }
  

export type TDraftSubject = TMetaResponseSingle<TRoot>;
