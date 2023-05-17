import { FC, Fragment, ReactElement } from 'react';
import DiscussionCard from './post/section';
import { DiscussionPostOption } from './post/option';
import { CommentReply } from './types';

type TReplyProps = {
  data: CommentReply[];
};

export const ReplySection: FC<TReplyProps> = ({ data }): ReactElement => {
  return (
    <Fragment>
      {data?.map((reply, index) => {
        return (
          <section key={index} className="pl-6 mb-10 md:pl-8 lg:pl-14">
            <DiscussionCard
              hasImage={reply.image ? true : false}
              countLikes={reply.likes}
              time={reply.created_at}
              type="reply"
              userName={reply.author.full_name}
              text={reply.content}
              imgSource={reply.image as unknown as string}
              title="title"
              option={
                <DiscussionPostOption
                  id={`test id ${(index + 1) as unknown as string}`}
                />
              }
            />
          </section>
        );
      })}
    </Fragment>
  );
};
