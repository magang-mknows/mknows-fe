import { FC, ReactElement } from 'react';
import Search from './Search';
import Post from './post';
import { Comment } from './post/coment';

const Content: FC = (): ReactElement => {
  return (
    <section className="bg-white dark:bg-[#1B1E21] rounded-md shadow-sm py-8 px-8 ">
      <Search />
      <Post />
      <Comment />
    </section>
  );
};

export default Content;
