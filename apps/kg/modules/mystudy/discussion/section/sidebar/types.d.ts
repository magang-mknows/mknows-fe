export type ChooseSidebar = {
  setChoose: (val: string) => void;
  getChoose: string;
};

export type DiscussionTypes = {
  setDiscussion: (val: Array<Sidebar>) => void;
  getDiscussion: Array<Sidebar>;
};

export type Sidebar = {
  id: string;
  session: string;
  modul: Array<T>;
};
