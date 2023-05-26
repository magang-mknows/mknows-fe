import { FC, Fragment, ReactElement } from "react";
import DiscussionCard from "./post/section";
import { DiscussionPostOption } from "./post/option";
import { CommentReply } from "./types";

type TReplyProps = {
  data: CommentReply[];
};

export const ReplySection: FC<TReplyProps> = ({ data }): ReactElement => {
  function daysAgo(days: string) {
    const today = new Date();
    const msInDay = 24 * 60 * 60 * 1000;
    const createdOn = new Date(days);
    createdOn.setHours(0, 0, 0, 0);
    today.setHours(0, 0, 0, 0);
    return String((+today - +createdOn) / msInDay);
  }

  return (
    <Fragment>
      {data?.map((reply, index) => {
        return (
          <section key={index} className="pl-6 mb-10 md:pl-8 lg:pl-14">
            <DiscussionCard
              hasImage={reply.image ? true : false}
              countLikes={reply.likes}
              time={`${daysAgo(reply.created_at)} Hari yang lalu`}
              type="reply"
              userName={reply.author.full_name}
              text={reply.content}
              imgSource={reply.image as unknown as string}
              title="title"
              option={<DiscussionPostOption id={`test id ${(index + 1) as unknown as string}`} />}
            />
          </section>
        );
      })}
    </Fragment>
  );
};
