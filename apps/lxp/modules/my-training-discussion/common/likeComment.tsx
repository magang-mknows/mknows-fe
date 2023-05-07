import { FC, ReactElement, useState } from "react";
import { AiFillLike } from "react-icons/ai";
import Image from "next/image";

const LikeComment: FC = (): ReactElement => {
  const [liked, setLiked] = useState(false);
  return (
    <>
      <div className="like-comment flex gap-5 text-[#737373] font-[500] text-[14px]">
        <div className="flex flex-row mt-8 gap-1 items-center">
          <button onClick={() => setLiked(liked === true ? false : true)}>
            <AiFillLike className={`${liked === true ? "text-[#106FA4]" : ""} text-[18px]`} />
          </button>
          {liked === true ? "1 Suka" : "Suka"}
        </div>
        <p className="flex flex-row mt-8 gap-1 items-center">
          <Image
            src={"/assets/pelatihanku/comment.svg"}
            width={100}
            height={100}
            className="w-auto"
            alt={"comment"}
          />
          Balas
        </p>
      </div>
    </>
  );
};

export default LikeComment;
