import { FC, Fragment, ReactElement } from 'react';
import DiscussionCard from './post/section';
import { DiscussionPostOption } from './post/option';
import { useGetCommentById } from './hooks';
import { ReplySection } from './ReplySection';

type TCommentProps = {
  id: string;
};

export const CommentSection: FC<TCommentProps> = ({ id }): ReactElement => {
  const { data } = useGetCommentById(id);
  const listCommentData = data?.data.discussion_comments;

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
      {listCommentData?.map((comment, index) => {
        return (
          <section key={index} className="pl-6 mb-10 md:pl-8 lg:pl-14">
            <DiscussionCard
              hasImage={comment.image ? true : false}
              countLikes={comment.likes}
              time={`${daysAgo(comment.created_at)} Hari yang lalu`}
              type="comment"
              userName={comment.author.full_name}
              text={comment.content}
              imgSource={comment.image as unknown as string}
              title="title"
              option={
                <DiscussionPostOption
                  id={`test id ${(index + 1) as unknown as string}`}
                />
              }
            >
              <ReplySection data={comment.comment_replies} />
            </DiscussionCard>
          </section>
        );
      })}
    </Fragment>
  );
};
