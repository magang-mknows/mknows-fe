export type TDiscussinCardProps = {
  hasImage?: boolean;
  text: string;
  imgSource?: string;
  userName: string;
  title: string;
  time: string;
  type: string;
  countLikes: number;
  option: ReactNode;
  children?: ReactNode;
};
