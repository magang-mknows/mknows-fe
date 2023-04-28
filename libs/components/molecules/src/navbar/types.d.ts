type TNavbarItem = {
  name: string;
  link: string;
};

export type TNavbarProps = {
  navItems: Array<TNavbarItem>;
  navItemStyle?: string;
  logo?: string | StaticImport;
  logoStyle?: string;
};
