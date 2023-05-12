import { FC, Fragment, ReactElement } from 'react';
import DiscussionCard from './post/section';
import { DiscussionPostOption } from './post/option';
import { useGetCommentById } from './hooks';

type TCommentProps = {
  id: string;
};

export const CommentSection: FC<TCommentProps> = ({ id }): ReactElement => {
  const { data } = useGetCommentById(id);
  const listCommentData = data?.data.discussion_comments;
  console.log(listCommentData);

  return (
    <Fragment>
      {listCommentData?.map((comment, index) => {
        return (
          <section key={index} className="pl-6 mb-10 md:pl-8 lg:pl-14">
            <DiscussionCard
              hasImage={comment.image ? true : false}
              countLikes={comment.likes}
              time={comment.created_at}
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
            ></DiscussionCard>
          </section>
        );
      })}
    </Fragment>
  );
};
