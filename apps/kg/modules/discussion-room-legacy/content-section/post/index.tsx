import { FC, ReactElement } from "react";

import { useGetAllDiscussion } from "../../hooks/useGetAllDiscussion";
import { useDiscussionId } from "../../hooks/useDiscussionId";

import CommentCard from "./PostCard";
import PostOption from "./PostOption";
import PopupModalEditDiscussion from "../../component/PopupModalEditDiscussion";
import PopupModalDeleteDiscussion from "../../component/PopupModalDeleteDiscussion";
import PopupModalReportDiscussion from "../../component/PopupModalReportDiscussion";

const Post: FC = (): ReactElement => {
  const { data } = useGetAllDiscussion();
  const { setDiscussionId } = useDiscussionId();
  const postList = data?.data;

  return (
    <div>
      <section className="relative w-full py-4">
        {postList?.map((item: any, index: any) => (
          <div key={index}>
            <CommentCard
              type="post"
              hasImage={false}
              countLikes={3}
              time="100 hari"
              userName="Bandi Sukanto"
              text={item.content}
              title={item.title}
            >
              <PostOption onClick={() => setDiscussionId(item.id)} />
            </CommentCard>
            <PopupModalEditDiscussion />
            <PopupModalDeleteDiscussion />
            <PopupModalReportDiscussion />
          </div>
        ))}
      </section>
    </div>
  );
};

export default Post;
