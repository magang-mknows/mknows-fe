export type Sidebar = {
  id: string;
  session: string;
  modul: Array<t>;
};
export type t = {
  id: string;
  modul: string;
};
export interface cardAuthor {
  id?: string;
  title: string;
  avatar: StaticImageData;
  time: string;
  content: string;
  author: string;
  role: string;
  styleCard?: string;
  children?: React.ReactNode;
}
