import { FC, ReactElement } from 'react';
import Post from './post';
import Comment from './post/coment';

import Search from './Search';

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
